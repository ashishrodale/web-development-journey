// ASSIGNMENT 4: Authentication Flow Simulation
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "secret") {
                resolve({ token: "AUTH_TOKEN_XYZ123" });
            } else {
                reject("Invalid Credentials");
            }
        }, 800);
    });
}

function getUserProfile(token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === "AUTH_TOKEN_XYZ123") {
                resolve({ name: "Alex Developer", role: "Administrator" });
            } else {
                reject("Invalid Authentication Token");
            }
        }, 800);
    });
}

loginUser("admin", "secret")
    .then((authData) => getUserProfile(authData.token))
    .then((profile) => console.log("Authenticated User Profile:", profile))
    .catch((err) => console.error("Authentication Failed:", err));
