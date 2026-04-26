// Questions data
const quizData = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database"],
        answer: "Markup Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling", "Logic", "Database"],
        answer: "Styling"
    },
    {
        question: "What is JavaScript?",
        options: ["Language", "Browser", "Server"],
        answer: "Language"
    }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

// Load questions
quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
        <p>${q.question}</p>
        ${q.options.map(opt => `
            <label>
                <input type="radio" name="q${index}" value="${opt}">
                ${opt}
            </label><br>
        `).join("")}
    `;

    quizContainer.appendChild(div);
});

// Submit
submitBtn.addEventListener("click", () => {
    let score = 0;

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    result.textContent = "Your Score: " + score + " / " + quizData.length;
});