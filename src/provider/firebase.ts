import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, signInAnonymously, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCX9jSxDKsFB2Q4Ecltc8Wb74SP8KE98AE",
    authDomain: "jobplatform-d63d7.firebaseapp.com",
    projectId: "jobplatform-d63d7",
    storageBucket: "jobplatform-d63d7.appspot.com",
    messagingSenderId: "464378690479",
    appId: "1:464378690479:web:8e288d2315ce0db1a38d5a",
    measurementId: "G-M9ERCPE9WM"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


const signInAnon = () => {
    try {
        signInAnonymously(auth);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
}

const signIn = async (email: string, password: string) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};


const signUp = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "Users", user.uid), {
            name: name,
            email: email
        });
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};


const signUpWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, provider);
        const user = res.user;
        localStorage.setItem('JWT', await res.user.getIdToken());

        await setDoc(doc(db, "Users", user.uid), {
            name: res.user.displayName,
            email: res.user.email,
        });
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};


// export type UserProfileData = {
//     email: string;
//     name: string;
//     domain: string;
//     type: string;
//     gender: string | null;
//     age: number | null;
//     location: string;
//     phone: string;
//     last_level_grad: string | null;
//     description: string;
//     description_last_job: string | null;
//   };


const updateUserInfo = async (user: User | null | undefined, userData: any) => {
    try {
        userData.name = user?.displayName ?? userData.name;
        userData.email = user?.email ?? userData.email;
        await updateDoc(doc(db, "Users", user?.uid ?? "test"), userData);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};


const signOut = () => {
    firebaseSignOut(auth);
};

export {
    auth,
    db,
    signIn,
    signInAnon,
    signOut,
    signUp,
    signUpWithGoogle,
    updateUserInfo
};