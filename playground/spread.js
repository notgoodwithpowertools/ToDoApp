function add (a,b) {
  return a+b;

}

console.log(add(3,1));

var toAdd = [9, 5];

console.log(add(toAdd[0], toAdd[1]));

console.log(add(...toAdd));

var groupA = ['Andrew', 'Jane'];

var groupB = ['Joel', 'Lachi', 'Jay', 'Connor'];

var final = [3, ...groupA, groupB];

console.log('Final:', final);



var names = ['Jane', 'Pipkin'];
var final = ['Andrew'];

final = [...final, ...names,]
console.log('Final:', final);

function checkName(name) {

}
final.forEach(function(name){
  console.log('Hi ' + name);

});

person = ['Andrew', 48];
person2 = ['Jane', 47];

function greet (name, age) {
  console.log('Hi ' + name , ' your age is ' + age);
}

greet(...person);
greet(...person2);
