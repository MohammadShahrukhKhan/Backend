// User Authentication

const express = require('express')
const server = express()
const { pool } = require('./dbConfig')
const bcrypt = require('bcrypt')
const path = require('path')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')

const initializePassport = require('./passportConfig')

initializePassport(passport)

const host_name = '127.0.0.1'
const port = process.env.PORT || 5432

server.set("view engine", 'ejs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: false }))

server.use(
    session({
        secret: 'secret',

        resave: false,

        saveUninitialized: false
    })
)
server.use(passport.initialize())
server.use(passport.session())

server.use(flash())

server.get('/', (req, res) => {
    res.render('index', {})
});

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/users/dashboard')
    }
    next()
}

const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    req.flash('success_msg', 'You are not Authenticated')
    res.redirect('/users/login')
}

server.get('/users/register', checkAuthenticated, (req, res) => {
    res.render('register')
})

server.get('/users/login', checkAuthenticated, (req, res) => {
    res.render('login')
})

server.get('/users/dashboard', checkNotAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user.name })
})

server.get('/users/logout', (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        req.flash('success_msg', 'You are successfully logged out')
        res.redirect('/users/login')
    })
})

server.post('/users/register', async (req, res) => {
    let { name, email, password, password2 } = req.body
    console.log({
        name,
        email,
        password,
        password2
    })

    let errors = []

    if (!name || !email || !password || !password2) {
        errors.push({ message: "Please Enter All Fields" })
    }
    if (password.length < 8 || password2.length < 8) {
        errors.push({ message: "Password should have atleast 8 characters!" })
    }
    if (password != password2) {
        errors.push({ message: "Passwords don't match!" })
    }

    if (errors.length > 0) {
        res.render('register', { errors })
    }
    else {
        //for validation has passed
        let hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        pool.query(
            `SELECT * FROM users
            WHERE email = '${email}'`,
            (err, results) => {
                if (err) {
                    return err
                }
                console.log(results.rows)

                if (results.rows.length > 0) {
                    errors.push({ message: "This email ID already exists. Try again." })
                    res.render('register', { errors })
                } else {
                    pool.query(
                        `INSERT INTO users (name, email, password)
                        VALUES ('${name}', '${email}', '${hashedPassword}')
                        RETURNING id, password`, (err, results) => {
                        if (err) {
                            return err
                        }
                        console.log(results.rows)
                        req.flash('success_msg', 'You are now registered, Please Login')
                        res.redirect('/users/login')
                    }
                    )
                }
            }
        )
    }
})

server.post(
    '/users/login',
    passport.authenticate('local', {
        successRedirect: '/users/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })
)

server.listen(port, () => {
    console.log(`server http://${host_name}:${port}`)
})