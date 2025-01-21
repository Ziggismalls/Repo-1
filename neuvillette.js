const storyData = [
    {
        question: "Neuvillette doit juger un cas où un citoyen accuse une Mélusine de vol. Comment réagit-il ?",
        choices: [
            { text: "Faire une enquête approfondie pour découvrir la vérité", nextQuestion: 1 },
            { text: "Rendre un jugement rapide basé sur les premières preuves", nextQuestion: 2 }
        ]
    },
    {
        question: "Neuvillette trouve un artefact ancien capable de contrôler l'eau. Que doit-il faire ?",
        choices: [
            { text: "Utiliser l'artefact pour améliorer la sécurité de Fontaine", nextQuestion: 3 },
            { text: "Sceller l'artefact pour éviter toute catastrophe", nextQuestion: 4 }
        ]
    },
    {
        question: "Un groupe de Mélusines réclame plus de droits civiques à Fontaine. Neuvillette doit-il leur accorder ces droits ?",
        choices: [
            { text: "Accorder plus de droits pour maintenir la paix", nextQuestion: 5 },
            { text: "Refuser et maintenir le statu quo", nextQuestion: 6 }
        ]
    },
    {
        question: "Une mystérieuse organisation propose son aide pour la protection de Fontaine contre les inondations. Que fait Neuvillette ?",
        choices: [
            { text: "Accepter l'alliance pour assurer la sécurité de la ville", nextQuestion: 7 },
            { text: "Refuser et compter sur les ressources internes de Fontaine", nextQuestion: 8 }
        ]
    },
    {
        question: "Un cas délicat se présente où une Mélusine a été accusée de sabotage. Que fait Neuvillette ?",
        choices: [
            { text: "Protéger la Mélusine jusqu'à ce que la vérité éclate", nextQuestion: 9 },
            { text: "Faire confiance aux preuves et juger rapidement", nextQuestion: 10 }
        ]
    },
    {
        question: "Neuvillette doit juger un cas impliquant une trahison de la part d'un noble influent. Comment réagit-il ?",
        choices: [
            { text: "Faire respecter la loi sans distinction de statut", nextQuestion: 11 },
            { text: "Adoucir la sentence pour préserver l'ordre social", nextQuestion: 12 }
        ]
    },
    {
        question: "Une rumeur dit que Neuvillette cacherait sa véritable identité de Dragon Hydro. Que fait-il ?",
        choices: [
            { text: "Révéler la vérité pour gagner la confiance des citoyens", nextQuestion: 13 },
            { text: "Maintenir le secret pour préserver l'équilibre de Fontaine", nextQuestion: 14 }
        ]
    },
    {
        question: "Un ancien ennemi de Fontaine revient dans la ville. Comment Neuvillette réagit-il ?",
        choices: [
            { text: "Accueillir l'ennemi avec prudence mais sans violence", nextQuestion: 15 },
            { text: "Le confronter immédiatement pour éviter tout conflit futur", nextQuestion: 16 }
        ]
    },
    {
        question: "Les citoyens de Fontaine sont de plus en plus inquiets des inondations. Que doit faire Neuvillette ?",
        choices: [
            { text: "Mettre en place un plan d'urgence pour prévenir les inondations", nextQuestion: 17 },
            { text: "Chercher une solution magique plus audacieuse", nextQuestion: 18 }
        ]
    },
    {
        question: "Un ancien artefact, très puissant, est trouvé sous Fontaine. Que doit faire Neuvillette ?",
        choices: [
            { text: "Étudier l'artefact et l'utiliser pour protéger la ville", nextQuestion: 19 },
            { text: "Sceller l'artefact pour éviter toute catastrophe", nextQuestion: 20 }
        ]
    },
    {
        question: "La stabilité de Fontaine est menacée par une rébellion populaire. Comment Neuvillette réagit-il ?",
        choices: [
            { text: "Utiliser la force pour réprimer la rébellion", nextQuestion: 21 },
            { text: "Négocier avec les rebelles pour apaiser la situation", nextQuestion: 22 }
        ]
    },
    {
        question: "Une inondation massive est imminente, et une décision doit être prise. Que fait Neuvillette ?",
        choices: [
            { text: "Utiliser l'artefact Hydro pour stopper l'inondation", nextQuestion: 23 },
            { text: "Chercher une solution plus traditionnelle avec les ingénieurs", nextQuestion: 24 }
        ]
    },
    {
        question: "Neuvillette découvre un complot contre le gouvernement de Fontaine. Comment doit-il réagir ?",
        choices: [
            { text: "Enquêter et éliminer les conspirateurs discrètement", nextQuestion: 25 },
            { text: "Informer le public et agir de manière transparente", nextQuestion: 26 }
        ]
    },
    {
        question: "Les Mélusines souhaitent aider Neuvillette à gérer les affaires de la ville. Que doit-il faire ?",
        choices: [
            { text: "Accepter leur aide pour renforcer l'efficacité de la gestion", nextQuestion: 27 },
            { text: "Refuser leur aide pour préserver son autorité", nextQuestion: 28 }
        ]
    },
    {
        question: "Un ancien artefact Hydro puissant menace de ravager Fontaine. Que doit faire Neuvillette ?",
        choices: [
            { text: "Tenter de contrôler l'artefact pour son propre usage", nextQuestion: 29 },
            { text: "Le détruire pour éviter tout danger", nextQuestion: 30 }
        ]
    },
    {
        question: "Fin de l'histoire. Merci d'avoir exploré les choix de Neuvillette.",
        choices: []
    }
];

let typedInstance;

document.querySelector('title').textContent = 'Histoire de Neuvillette';

function displayQuestion(index) {
    console.log(index, storyData.length)
    if (index >= storyData.length - 1) {
        endStory();
    } else {
        const questionContainer = document.getElementById('question');
        const choicesContainer = document.getElementById('choices');
    
        const currentQuestion = storyData[index];
    
        if (typedInstance) {
            typedInstance.destroy();
        }
            
        const options = {
            strings: [currentQuestion.question],
            typeSpeed: 20,
            showCursor: false,
        }
    
        typedInstance = new Typed('#dialog', options);
        console.log(typedInstance)
    
        choicesContainer.innerHTML = '';
    
        currentQuestion.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <div class="choices-container animate__fadeIn">
                    <img src="assets/img/msg.png" alt"msg" /> 
                    <p>${choice.text}</p>
                </div>
            `;
            button.addEventListener('click', () => {
                displayQuestion(choice.nextQuestion);
            });
            choicesContainer.appendChild(button);
        });
    }
}

function endStory() {
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');

    document.body.style.backgroundImage = "url('assets/img/end.gif')";

    if(typedInstance) {
        typedInstance.destroy();
    }

    choicesContainer.innerHTML = '';
    questionContainer.textContent = storyData[storyData.length - 1].question;

    const button = document.createElement('button');
    button.innerHTML = `
                <div class="choices-container animate__fadeIn">
                    <img src="assets/img/back.png" alt"msg" /> 
                    <p>Recommencer</p>
                </div>
            `;
    button.addEventListener('click', () => {
        window.location.reload();
    });

    choicesContainer.append(button);
}

displayQuestion(0);