import { google } from "googleapis";
import readline from "readline";
import { config } from "./config.js";

const oauth2Client = new google.auth.OAuth2(
  config.youtube.clientId,
  config.youtube.clientSecret,
  config.youtube.redirectUri
);

const SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:\n", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Paste the code from that page here: ", async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token);
    rl.close();
  } catch (err) {
    console.error("Error getting token:", err);
    rl.close();
  }
});