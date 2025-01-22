const homeBg = document.createElement("div");
const characters = document.createElement("div");
const firstCharacter = document.createElement("div");
const secondCharacter = document.createElement("div");
const btnAccueil = document.createElement("button");
homeBg.classList.add("homeBg");
characters.classList.add("characters");
firstCharacter.classList.add("firstCharacter");
secondCharacter.classList.add("secondCharacter");
document.body.appendChild(homeBg);
homeBg.appendChild(characters);
characters.appendChild(firstCharacter);
characters.appendChild(secondCharacter);
homeBg.appendChild(btnAccueil);

document.body.style.backgroundImage = "url('assets/img/backgroundgenshin.jpg')";

document.querySelector("#story-container").style.visibility = "hidden";
document.querySelector("#story-container").style.height = "0%";

btnAccueil.classList.add("btnAccueil");
btnAccueil.id = "btnAccueil";
btnAccueil.innerText = "Jouer";

btnAccueil.addEventListener("click", () => {
  btnAccueil.style.animation = "fadeOut 2s";
  setTimeout(() => {
    btnAccueil.style.visibility = "hidden";
  }, 2000);
});

firstCharacter.addEventListener("click", () => {
  character.innerText = "Neuvillette";
  started = true;
  setTimeout(() => {
    document.body.style.backgroundImage = "url('assets/img/background.gif')";
    document.querySelector("#story-container").style.visibility = "visible";
    homeBg.style.visibility = "hidden";
  }, 2000);
  displayQuestionNeuvillette(0);
});
secondCharacter.addEventListener("click", () => {
  character.innerText = "Wriothesley";
  started = true;
  setTimeout(() => {
    document.body.style.backgroundImage = "url('assets/img/wrio_bgquest.jpeg')";
    document.querySelector("#story-container").style.visibility = "visible";
    homeBg.style.visibility = "hidden";
  }, 2000);
  displayQuestionWriothesley(0);
});
