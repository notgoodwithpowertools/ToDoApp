import firebase from 'firebase';


try {

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;

/*
<script src="https://www.gstatic.com/firebasejs/3.5.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAh-YrgSMzMco2xB81nUar_TJwRKGGQB6c",
    authDomain: "aa-todo-app.firebaseapp.com",
    databaseURL: "https://aa-todo-app.firebaseio.com",
    storageBucket: "aa-todo-app.appspot.com",
    messagingSenderId: "677047813556"
  };
  firebase.initializeApp(config);
</script>
*/
