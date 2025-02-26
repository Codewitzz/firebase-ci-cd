// ✅ Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd23FnUa4LEMOIrl07QcsLW0QoQtCfaCI",
    authDomain: "fir-ci-cd-77421.firebaseapp.com",
    projectId: "fir-ci-cd-77421",
    storageBucket: "fir-ci-cd-77421.firebasestorage.app",
    messagingSenderId: "968284501294",
    appId: "1:968284501294:web:c23a18a82621c49bf636bf",
    measurementId: "G-PD47FZ1E6E"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
