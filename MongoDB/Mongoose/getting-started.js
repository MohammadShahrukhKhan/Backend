// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shark'); // " shark " is the name of database
  console.log('connected')
}

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model('shark_kitten', kittySchema);
// const Kitten2 = mongoose.model('shark_kitten2', kittySchema);

const shark_kitten = new Kitten({ name: 'shark_kitten' });
const shark_kitten2 = new Kitten({ name: 'shark_kitten2' });

console.log(shark_kitten.name); // 'shark_kitten'

shark_kitten.save(function (err, shark_kitten) {
  if (err) return console.error(err);
  shark_kitten.speak();
});

shark_kitten2.save(function (err, shark_kitten2) {
  if (err) return console.error(err);
  shark_kitten2.speak();
});

Kitten.find({ name: 'shark_kitten' }, function (err, kit){
  if (err) return console.error(err);
  console.log(kit)
});


