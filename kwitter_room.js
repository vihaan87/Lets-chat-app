var firebaseConfig = {
    apiKey: "AIzaSyBzb-Dzii50QhmOiENJVqKiP-wRas2RF_A",
    authDomain: "kwitter-app-95a16.firebaseapp.com",
    databaseURL: "https://kwitter-app-95a16-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-95a16",
    storageBucket: "kwitter-app-95a16.appspot.com",
    messagingSenderId: "599473454054",
    appId: "1:599473454054:web:192f0e17e7fd7ac87af427",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name  + "!";
  
  function addroom()
  {
        Room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(Room_name).uptade({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name",Room_name);
        window.location  = "kwitter_page.html";
  } 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name-" + Room_names);
    row = "<div class = 'room_name'  id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'  >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;

    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";

    }

    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";

    }

    //End code
    });});}
getData();
