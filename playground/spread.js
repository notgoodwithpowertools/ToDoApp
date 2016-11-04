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


function hello(name) {
  console.log("hello " + name);
}
console.log("Executing function hello...");
hello('Andrew');

var helloArrow = (name, lastname) => "Hello Arrow..." + name + " " + lastname;

console.log("Greeting ..." + helloArrow('andrew', 'assauw'));

var todos = {
  abc: {text: 'text'},
  def: {text: 'asdf'}
};

parsedTodos = [];
c//onsole.log('Object.keys(todos)', Object.keys(todos));
Object.keys(todos).forEach( (todoId) => {
  //greet(...person);
  console.log('TODOID:', todoId);
  parsedTodos.push({
    id: todoId, text: 'text', gender: 'male',
    ...todos[todoId]
  });
  console.log("todos[todoid]:", todos[todoId]);
  console.log('todoid:', todoId + " parse: " + parsedTodos[0]);
});

console.log('Parsed todos:', parsedTodos);
