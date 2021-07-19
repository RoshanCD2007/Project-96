// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxoCjUCtQNmXQuyYz-LSALC6SZ4ZXvj-c",
  authDomain: "kwitter-project-93134.firebaseapp.com",
  databaseURL: "https://kwitter-project-93134-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-93134",
  storageBucket: "kwitter-project-93134.appspot.com",
  messagingSenderId: "896496638941",
  appId: "1:896496638941:web:704f08f92d7021ea0e7434"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";  
}

function log_out(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}