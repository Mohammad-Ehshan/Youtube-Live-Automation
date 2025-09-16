import dotenv from "dotenv";
dotenv.config();

export const config = {
  youtube: {
    clientId: process.env.YOUTUBE_CLIENT_ID,
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
    redirectUri: process.env.YOUTUBE_REDIRECT_URI,
    refreshToken: process.env.YOUTUBE_REFRESH_TOKEN,
    liveChatId: process.env.LIVE_CHAT_ID,
  },
  weatherApiKey: process.env.WEATHER_API_KEY,
};