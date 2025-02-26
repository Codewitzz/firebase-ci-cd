import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../firebaseConfig.js";  // Firebase config file

const auth = getAuth(app);

// Signup Function
export function signupUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Login Function
export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Logout Function
export function logoutUser() {
    return signOut(auth);
}
