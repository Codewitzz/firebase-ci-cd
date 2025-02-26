// Signup Function
document.getElementById("signup-btn").addEventListener("click", function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            alert("Signup successful!");
        })
        .catch((error) => {
            console.error("Signup error:", error.message);
            alert(error.message);
        });
});

// Login Function
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user);
            alert("Login successful!");
        })
        .catch((error) => {
            console.error("Login error:", error.message);
            alert(error.message);
        });
});

// Logout Function
document.getElementById("logout-btn").addEventListener("click", function () {
    auth.signOut()
        .then(() => {
            console.log("User logged out");
            alert("Logout successful!");
        })
        .catch((error) => {
            console.error("Logout error:", error.message);
            alert(error.message);
        });
});
