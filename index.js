import { getChatMessages, sendMessage } from "./services/youtube.js";
import { getJoke } from "./services/joke.js";
import { getWeather } from "./services/weather.js";
import { getIntro } from "./services/intro.js"; 

let nextPageToken = null;

async function pollChat() {
  try {
    const res = await getChatMessages(nextPageToken);
    nextPageToken = res.nextPageToken;

    if (res.items) {
      for (let item of res.items) {
        const message = item.snippet.displayMessage;
        const author = item.authorDetails.displayName;

        console.log(`${author}: ${message}`);

        if (message.startsWith("!joke")) {
          const joke = await getJoke();
          await sendMessage(joke);
        }

        else if (message.startsWith("!weather")) {
          const parts = message.split(" ");
          const city = parts[1] || "Delhi";
          const weather = await getWeather(city);
          await sendMessage(weather);
        }

        else if (message.startsWith("!")) {
          const command = message.substring(1).toLowerCase();
          const intro = getIntro(command);
          if (intro) {
            await sendMessage(intro);
          }
        }

      }
    }
  } catch (err) {
    console.error("Error polling chat:", err.message);
  }

  setTimeout(pollChat, 5000); // poll every 5 sec
}

pollChat();