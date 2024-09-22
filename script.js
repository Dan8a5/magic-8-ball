const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

const ball = document.getElementById('ball');
const answerElement = document.getElementById('answer');
const questionInput = document.getElementById('question');
const askButton = document.getElementById('askButton');

function getRandomAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
}

function shakeBall() {
    ball.classList.add('shake');
    setTimeout(() => {
        ball.classList.remove('shake');
        const randomAnswer = getRandomAnswer();
        console.log("Generated answer:", randomAnswer);
        answerElement.textContent = randomAnswer;
    }, 1000);
}

askButton.addEventListener('click', () => {
    console.log("Button clicked");
    if (questionInput.value.trim() !== '') {
        shakeBall();
    } else {
        alert('Please ask a question!');
    }
});

questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        askButton.click();
    }
});

console.log("Script loaded");