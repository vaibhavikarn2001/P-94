var firebaseConfig = {
  apiKey: "AIzaSyBCu3bZ-eDsJST-cb6UOi4KCBTm0p9INMI",
  authDomain: "p-94-bb5bc.firebaseapp.com",
  databaseURL: "https://p-94-bb5bc-default-rtdb.firebaseio.com",
  projectId: "p-94-bb5bc",
  storageBucket: "p-94-bb5bc.appspot.com",
  messagingSenderId: "856793785235",
  appId: "1:856793785235:web:b8dfa01be807b8ddae7e66",
  measurementId: "G-4R58TJVWQ3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
      


      function addRoom()
      {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose: "adding room"});


      
      }
    
