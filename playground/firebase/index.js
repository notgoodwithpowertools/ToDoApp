import firebase from 'firebase';
/*
var config = {
    apiKey: "AIzaSyAh-YrgSMzMco2xB81nUar_TJwRKGGQB6c",
    authDomain: "aa-todo-app.firebaseapp.com",
    databaseURL: "https://aa-todo-app.firebaseio.com",
    storageBucket: "aa-todo-app.appspot.com",
    messagingSenderId: "677047813556"
  };
*/
try {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
} catch (e) {

}


firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

//firebase.database().ref().set({
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 49
  }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log("child added...", snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log("child changed...", snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log("child removed...", snapshot.key, snapshot.val());
});

/*
//Get a reference
var newNoteRef = notesRef.push();

newNoteRef.set({
  text: 'Walk the rabbits'
});
*/
var newNoteRef = notesRef.push().set({
  text: 'Walk the dog'
});

console.log('New note id:', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log("New todo added...", snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log("Todo changed...", snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log("Todo removed...", snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Item 1'
});

todosRef.push({
  text: 'Item 2'
});

//the Promise allows for actions upon success/error
/*
.then( () => {
  console.log('Set worked...');
}, (e) => {
  console.log('Set failed...');
})
*/
/*
firebaseRef.child('app').set({
  name: 'Todo App'
});
*/
/*
firebaseRef.update({
  isRunning: false,
  'app/name': 'Todo Application',
  'user/name': 'Jane Assauw'
});
*/
/*
// This is the same as ...
firebaseRef.child('app').update({
  name: 'Todo Application'
}).then( () => {
  console.log('Update worked...');
}, (e) => {
  console.log('Update failed...');
});

firebaseRef.child('user').update({
  name: 'Jane Leanne Assauw'
}).then( () => {
  console.log('Update user/name worked...');
}, (e) => {
  console.log('Update failed...');
});

firebaseRef.child('app/name').remove();

/*
firebaseRef.update({
  isRunning: null
});
*/
/*
firebaseRef.child('user/age').remove();
*/
/*
// on, once let's you trigger and listen for an event
firebaseRef.once('value').then( (snapshot) => {
  console.log('Entire FB DB...', snapshot.val());
}, (e) => {
  console.log('Unable to fetch value');
});
*/
/*
firebaseRef.child('app').once('value').then( (snapshot) => {
  console.log('Child app...', 'key:' + snapshot.key, snapshot.val());
}, (e) => {
  console.log('Unable to fetch value');
});
*/
/*
firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});
*/
/*
//create a listener
var logData = (snapshot) => {
  console.log('Got value', snapshot.val());
};

firebaseRef.on('value', logData);
firebaseRef.off();

firebaseRef.update({isRunning: false});
*/

firebaseRef.child('user').on('value', (snapshot) => {
  console.log('User ref changed', snapshot.val());
});

firebaseRef.child('user').update({name: 'Lachlan'});

firebaseRef.child('app').update({name: 'Something else'})
