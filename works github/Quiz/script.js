const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Florianópolis"],
        correct: 1
    },
    {
        question: "Quanto é 5 + 7?",
        answers: ["13", "12", "11", "57"],
        correct: 1
    },
    {
        question: "Oque significa a sigla CPU?",
        answers: ["Código de Processamento Unitário", "Unidade Central de Processamento", "Campo de Processamento Único"],
        correct: 1
    },
    {
        question: "Quantos estados tem o Brasil?",
        answers: ["24", "26", "27", "28"],
        correct: 2
    },
    {
        question: "Qual o idioma oficial do Brasil?",
        answers: ["Espanhol", "Inglês", "Francês", "Português"],
        correct: 3
    },
    {
        question: "Qual é o maior animal terrestre?",
        answers: ["Elefante", "Girafa", "Tubarão-Baleia", "Urso-Polar"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('#answers button');

    buttons.forEach((button, i) => {
        if (i === currentQuestion.correct) {
            button.style.backgroundColor = 'green'; // Resposta correta
        } else {
            button.style.backgroundColor = 'red'; // Resposta errada
        }
        button.disabled = true; // Desabilitar os botões após a resposta
    });

    if (index === currentQuestion.correct) {
        score++;
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        showAnalyzingScreen();
    }
}

function showAnalyzingScreen() {
    document.getElementById('question-container').style.display = 'none';
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'block';
    resultScreen.querySelector('#score').textContent = 'Analisando...';

    setTimeout(showScore, 3000); // Esperar 3 segundos
}
function showScore() {
    const resultScreen = document.getElementById('result-screen');
    resultScreen.querySelector('#score').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;

    if (score >= 4) {
        resultScreen.querySelector('#hint').textContent = "Parabéns! A pista para o enigma é: uma caixa escondida";
    } else {
        resultScreen.querySelector('#hint').textContent = "Não foi dessa vez, mas valeu a tentativa :)!";
    }
}
