const storyData2 = [
  {
    question:
      "Oh oh oh Matelo, je suis Gangplank le roi des pillards déchu. Cela fait maintenant 3 ans que je suis poursuivi par le Grand général Noxus pour avoir dérobé le Léviathan, et j'aurai besoin de ton aide pour un mission assez délicate. Serai-tu prêt à m'aider ?",
    choices: [
      {
        text: "Prendre du temps pour réfléchir",
        nextQuestion: 7,
      },
      {
        text: "Ecouter la suite.",
        nextQuestion: 1,
      },
    ],
  },
  {
    question:
      "Il faut que tu partes vers l'Ouest, un bateau t'attend au port de la ville. Il s'en va dans 3h prépare ta valisoche, un bon K-way ainsi qu'une bonne douzaine de boite de fricandelles. J'aimerai que tu passe également à la bibiliothèque de mestre Emond pour récuperer la carte de l'île de Tougage. Un trésor y est enfouis depuis des milliers d'années.",
    choices: [
      {
        text: "Lui répondre que vous y allez de ce pas.",
        nextQuestion: 2,
      },
      {
        text: "Demander plus d'information sur le Talisman",
        nextQuestion: 3,
      },
    ],
  },
  {
    question:
      "Avant que tu t'en ailles, il faut que je te préviennes. Mestre Emond est un homme sage, mais il n'accord ca confiance qu'à ceux qu'il juge digne de la recevoir.",
    choices: [
      {
        text: "Lui demander comment gagner la confiance du mestre",
        nextQuestion: 4,
      },
    ],
  },
  {
    question:
      "Le talisman de l'île de Tougato, également connu sous le nom de'Cœur de l’Éther', est un artefact ancien et puissant, dont les origines remontent à une époque bien avant l’ère des civilisations connues. Selon les légendes transmises par les anciens sages, ce talisman serait une relique d’une civilisation disparue, les Aériens, qui régnaient autrefois sur des îles flottantes, invisibles aux yeux des mortels. Leur pouvoir venait de l'harmonie qu'ils avaient avec les énergies naturelles du monde, et le talisman en était le catalyseur.",
    choices: [
      {
        text: "Lui répondre que vous y allez de ce pas",
        nextQuestion: 2,
      },
      {
        text: "Dire que vous ne voulez pas risquez votre vie pour si peu et retourner à vos occupations",
        nextQuestion: 7,
      },
    ],
  },
  {
    question:
      "Parle lui d'ouvrages anciens du XVe siècle, il deviendra fou et se mettra a boire du vin, BEAUCOUP de vin. Ainsi il sera plus facile à amadouer et verra en toi un nouvel ami avec qui il pourra partager sa plus grande passion pour la lecture d'encyclopédie.",
    choices: [
      {
        text: "Lui demander ou se situe la bibliothèque",
        nextQuestion: 5,
      },
    ],
  },
  {
    question:
      "Elle se trouve à quelques lieux d'ici dans le domaine de Valonia, il te faudra marcher 10min jusqu'a la tour des ordres de la ville, puis tu entre dans la tour du conseil, en bas il y aura une cave. Tu rentres dans la cave et tu parles a Serge le Mytho, il te donnera une monture pour que tu puisse t'y rendre plus rapidement. Si tu n'as pas d'or, ramène lui 3 sauges et une brindille de shokkoth comme monnaie de paiement.",
    choices: [
      {
        text: "Le remercier et partir à l'aventure.",
        nextQuestion: 6,
      },
    ],
  },
  {
    question: "Fin de l'histoire. Merci d'avoir exploré les choix de Gp.",
    choices: [],
  },
  {
    question: "T'as bien raison, on a pas besoin d'un mec sans C*******",
    choices: [],
  },
];

let typedInstance;

function displayQuestion(index) {
  console.log(index, storyData2.length);
  if (index >= storyData2.length - 1) {
    endStory();
  } else {
    const questionContainer = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");

    const currentQuestion = storyData2[index];

    if (typedInstance) {
      typedInstance.destroy();
    }

    questionContainer.innerHTML = "";

    const options = {
      strings: [currentQuestion.question],
      typeSpeed: 20,
      showCursor: false,
    };

    typedInstance = new Typed(questionContainer, options);

    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => {
        displayQuestion(choice.nextQuestion);
      });
      choicesContainer.appendChild(button);
    });
  }
}

function endStory() {
  const questionContainer = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");

  if (typedInstance) {
    typedInstance.destroy();
  }

  choicesContainer.innerHTML = "";
  questionContainer.textContent = storyData2[storyData2.length - 1].question;

  const button = document.createElement("button");
  button.textContent = "Recommencer";
  button.addEventListener("click", () => {
    window.location.reload();
  });

  choicesContainer.append(button);
}

displayQuestion(0);
