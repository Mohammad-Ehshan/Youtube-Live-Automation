import fetch from "node-fetch";

export async function getJoke() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await res.json();

  if (data.type === "single") {
    return data.joke;
  } else {
    return `${data.setup} ... ${data.delivery}`;
  }
}