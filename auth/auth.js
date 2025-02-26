// ✅ Signup function
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            alert(error.message);
            console.error("Signup Error:", error);
        });
}

// ✅ Login function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            alert(error.message);
            console.error("Login Error:", error);
        });
}

// ✅ Logout function
function logout() {
    auth.signOut()
        .then(() => {
            alert("Logged Out!");
        })
        .catch((error) => {
            alert(error.message);
            console.error("Logout Error:", error);
        });
}
