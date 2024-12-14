const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const ACCESS_TOKEN_SECRET = "your_access_secret";
const REFRESH_TOKEN_SECRET = "your_refresh_secret";

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Static User and Product Data
const invalidatedRefreshTokens = [];
const user = { id: 1, name: "admin", email: "admin@gmail.com" };
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "product-1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "product-2",
    },
    {
        id: 3,
        name: "Product 2",
        price: 300,
        image: "product-3",
    },
    {
        id: 4,
        name: "Product 2",
        price: 150,
        image: "product-4",
    },
    {
        id: 5,
        name: "Product 2",
        price: 240,
        image: "product-5",
    },
    // add more products as needed
];

// Helper function to generate tokens
function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "12s" });
}

function generateRefreshToken(user) {
    return jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: "25s" });
}

// Login API
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        const accessToken = generateAccessToken({ username });
        const refreshToken = generateRefreshToken({ username });
        res.json({ accessToken, refreshToken });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Token refresh API
app.post("/refresh", (req, res) => {
    const { token } = req.body;
    if (!token)
        return res.status(403).json({ message: "Refresh token is required" });

    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ message: "Invalid refresh token" });
        const accessToken = generateAccessToken({ username: user.username });
        res.json({ accessToken });
    });
});

// Middleware to verify access token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "Access token is required" });

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res
                    .status(401)
                    .json({ message: "Access token expired" });
            }
            return res.status(403).json({ message: "Invalid access token" });
        }
        req.user = user;
        next();
    });
}

app.get("/verify-user", authenticateToken, (req, res) => {
    res.json({ message: "User is authorized", user: req.user });
});

app.post("/logout", (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: "Token is required" });

    invalidatedRefreshTokens.push(token); // Add token to the invalidated list
    res.json({ message: "Logged out successfully" });
});

// Fetch product data API
app.get("/products", authenticateToken, (req, res) => {
    res.json(products);
});

// Fetch user data API
app.get("/user", authenticateToken, (req, res) => {
    res.json(user);
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
