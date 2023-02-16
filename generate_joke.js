import axios from "axios";

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const { data } = await axios.get("https://icanhazdadjoke.com", config);
    document.getElementById("joke").innerHTML = data.joke;
  } catch (error) {}
}

export default generateJoke;
