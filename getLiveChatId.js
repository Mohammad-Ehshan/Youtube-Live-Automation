import { google } from "googleapis";
import { config } from "./config.js";

const oauth2Client = new google.auth.OAuth2(
  config.youtube.clientId,
  config.youtube.clientSecret,
  config.youtube.redirectUri
);

oauth2Client.setCredentials({ refresh_token: config.youtube.refreshToken });

const youtube = google.youtube({ version: "v3", auth: oauth2Client });

const res = await youtube.liveBroadcasts.list({
  part: "snippet",
  broadcastStatus: "active",
});
if (res.data.items.length === 0) {
  console.log("⚠ No active live streams found!");
} else {
  console.log("Your liveChatId:", res.data.items[0].snippet.liveChatId);
}