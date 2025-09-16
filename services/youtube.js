import { google } from "googleapis";
import { config } from "../config.js";

const oauth2Client = new google.auth.OAuth2(
  config.youtube.clientId,
  config.youtube.clientSecret,
  config.youtube.redirectUri
);

oauth2Client.setCredentials({ refresh_token: config.youtube.refreshToken });

const youtube = google.youtube({ version: "v3", auth: oauth2Client });

export async function getChatMessages(pageToken = null) {
  const res = await youtube.liveChatMessages.list({
    liveChatId: config.youtube.liveChatId,
    part: "snippet,authorDetails",
    pageToken,
  });
  return res.data;
}

export async function sendMessage(text) {
  await youtube.liveChatMessages.insert({
    part: "snippet",
    requestBody: {
      snippet: {
        liveChatId: config.youtube.liveChatId,
        type: "textMessageEvent",
        textMessageDetails: { messageText: text },
      },
    },
  });
}