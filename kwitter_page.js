//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCgrtu3xOXM__PPNMakdBUlUC2Z2yIRR94",
      authDomain: "lets-chat-app-cef96.firebaseapp.com",
      databaseURL: "https://lets-chat-app-cef96-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-cef96",
      storageBucket: "lets-chat-app-cef96.appspot.com",
      messagingSenderId: "417510400549",
      appId: "1:417510400549:web:210120f19725ab84ce15cc",
      measurementId: "G-TNM10ZV5MF"
    };
    
    firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("UserName");
   room_name = localStorage.getItem("room_name");

   function addMessage()
   {
         msg = document.getElementById("message").value;
         firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
         });

         document.getElementById("message").value = " ";
   }
