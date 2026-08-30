// ASSIGNMENT 4: User Authentication & Profile Pipeline
function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "pass123") {
                console.log("Step 1: User authenticated successfully.");
                resolve({ userId: 42, token: "JWT_SECURE_TOKEN_98765" });
            } else {
                reject("Step 1 Failed: Invalid Username or Password.");
            }
        }, 600);
    });
}

function fetchUserProfile(authData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (authData.token === "JWT_SECURE_TOKEN_98765") {
                console.log("Step 2: User profile fetched.");
                resolve({ id: authData.userId, username: "admin", role: "Administrator" });
            } else {
                reject("Step 2 Failed: Unauthorized Token.");
            }
        }, 600);
    });
}

function fetchUserPermissions(profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3: User permissions loaded.");
            resolve({ ...profile, permissions: ["READ", "WRITE", "DELETE"] });
        }, 600);
    });
}

authenticateUser("admin", "pass123")
    .then((authData) => fetchUserProfile(authData))
    .then((profile) => fetchUserPermissions(profile))
    .then((fullUserData) => console.log("Authentication Pipeline Complete:", fullUserData))
    .catch((err) => console.error("Authentication Error:", err));
