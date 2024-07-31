// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { 
    getAuth,
     onAuthStateChanged,
     createUserWithEmailAndPassword
      } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 const firebaseConfig = {
    apiKey: "AIzaSyA63UwVuwVmXw6aykT79yK2bs8BqVYJXLs",
    authDomain: "login-signup-page-a7f5f.firebaseapp.com",
    projectId: "login-signup-page-a7f5f",
    storageBucket: "login-signup-page-a7f5f.appspot.com",
    messagingSenderId: "179089035690",
    appId: "1:179089035690:web:bf03f63a993e2c8b8a5bd3",
    measurementId: "G-2RR3S61Y6Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  const signup_email = document.getElementById('signup_email');
  const signup_password = document.getElementById('signup_password');
   const signup_button = document.getElementById('signup_button');
   signup_button.addEventListener("click",createUserAccount);


onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in");
      const uid = user.uid;
    } else {
        console.log("user is not logged in" );
    }
  });

   function createUserAccount() {
    console.log("email=>",signup_email.value);
    console.log("password=>",signup_password.value);
   createUserWithEmailAndPassword(auth,signup_email.value ,signup_password.value )
   .then((userCredential) => {
     // Signed up 
    const user = userCredential.user;
    console.log("user=>",user);
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage)
    // ..
   });
  }
  