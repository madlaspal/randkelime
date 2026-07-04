import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "BURAYA_YENI_API_KEY",
    authDomain: "randkelime.firebaseapp.com",
    projectId: "randkelime",
    storageBucket: "randkelime.firebasestorage.app",
    messagingSenderId: "252908306362",
    appId: "1:252908306362:web:e3c27342d3e484f5112783"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("googleLogin");
const logoutBtn = document.getElementById("logout");

loginBtn.onclick = async () => {

    try{

        await signInWithPopup(auth, provider);

    }catch(e){

        alert(e.message);

    }

};

logoutBtn.onclick = async ()=>{

    await signOut(auth);

};

onAuthStateChanged(auth,(user)=>{

    if(user){

        loginBtn.style.display="none";

        document.getElementById("userInfo").style.display="block";

        document.getElementById("userName").innerText=user.displayName;

        document.getElementById("userPhoto").src=user.photoURL;

    }else{

        loginBtn.style.display="block";

        document.getElementById("userInfo").style.display="none";

    }

});