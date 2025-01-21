const body = document.querySelector("body");
const questZone = document.createElement("div");
const divBtn = document.createElement("div");
const reponse1 = document.createElement("button");
const reponse2 = document.createElement("button");
const questText = document.createElement("p");
questZone.className = "questChat";
divBtn.className = "divBtn";
reponse1.className = "btnUn";
reponse2.className = "btnDeux";
questText.className = "questParag";

body.appendChild(questZone);
questZone.appendChild(questText);
questZone.appendChild(divBtn);
divBtn.appendChild(reponse1);
divBtn.appendChild(reponse2);

reponse1.innerText = " Prendre du temps pour réfléchir.";
reponse2.innerText = "Ecouter la suite.";
