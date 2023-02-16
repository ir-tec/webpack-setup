import generateJoke from "../generate_joke";
import "./style/main.scss";
import smileIcon from "./assets/Mr._Smiley_Face.png";

const icon = document.getElementById("icon");
icon.src = smileIcon;
generateJoke();
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
