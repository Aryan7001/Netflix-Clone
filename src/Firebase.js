// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATm0Eilo7Lx1vQ8tLLe791P1bUJKMj2Hs",
  authDomain: "netflix-clone-7bcd7.firebaseapp.com",
  projectId: "netflix-clone-7bcd7",
  storageBucket: "netflix-clone-7bcd7.appspot.com",
  messagingSenderId: "1022544644629",
  appId: "1:1022544644629:web:5d7979710acf22b8d71c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{

  try{

    const res= await createUserWithEmailAndPassword(auth, email, password);
    const user= res.user ;
    
     await addDoc(collection(db, 'user'),{
    
    uid: user.uid,
    name, 
    email,
    authprovider:'email',
    
     } ) ;
     console.log("User data added successfully to Firestore");

  }
  
  catch(error){
    console.error("Error adding user data to Firestore:", error);
        alert("Error adding user data to Firestore: " + error.message);
  }
    

}


const login= async(email, password)=>{

try{

    await signInWithEmailAndPassword(auth, email,password)
}
catch(error){
console.log(error);
alert(error);

}

}

const logout= ()=>{
    signOut(auth);
};


export {auth, login, logout, signup,db};