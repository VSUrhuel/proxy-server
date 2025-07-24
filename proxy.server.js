const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
const PORT = 8080; // We'll use 8080

const FRONTEND_ORIGIN = "http://localhost:3000";
const API_SERVICE_URL = "https://ai-tools.rev21labs.com";

// Enable CORS for your frontend
app.use(cors({ origin: FRONTEND_ORIGIN }));

// Proxy all requests to the target API
app.use("/", proxy(API_SERVICE_URL));

app.listen(PORT, () => {
  console.log(`🚀 Proxy server is running on http://localhost:${PORT}`);
  console.log(`Forwarding requests to ${API_SERVICE_URL}`);
});
