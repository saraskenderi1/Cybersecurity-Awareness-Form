
const questionsData = [
  {
    question: "1.Which of the following best describes your current professional or educational status?",
    options: [
      "Student",
      "Employee",
      "Self-employed",
      "Government worker",
      "Unemployed",
      "Retired"
    ],
    multiple: false
  },
  {
  question: "2. What is your age group?",
    options: [
      "Under 18",
      "18-24",
      "25-34",
      "34-35",
      "35-44",
      "45-54",
      "55+"
    ],
    multiple: false
  },
  {
    question: "3. How familiar are you with the concept of cybersecurity?",
    options: [
      "Very familiar",
      "Somewhat familiar",
      "Heard of it but don’t understand it",
      "Not familiar at all"
    ],
    multiple: false
  },
  {
    question: "4. Have you ever received cybersecurity awareness communication (e.g., emails, campaigns, school materials)?",
    options: [
      "Yes, many times",
      "A few times",
      "Rarely",
      "Never"
    ],
    multiple: false
  },
  {
    question: "5. Are you aware of any official Albanian institutions that deal with cybersecurity?",
    options: [
      "Yes",
      "No",
      "Not sure"
    ],
    multiple: false
  },
  {
    question: "6. Which cybersecurity threats do you believe are most common in Albania? (Select all that apply)",
    options: [
      "Phishing scams",
      "Identity theft",
      "Malware",
      "Fake job offers",
      "Online blackmail"
    ],
    multiple: true
  },
  {
    question: "7. How concerned are you about cybersecurity threats in Albania?",
    options: [
      "Not concerned at all",
      "Slightly concerned",
      "Moderately concerned",
      "Very concerned",
      "Extremely concerned"
    ],
    multiple: false
  },
  {
    question: "8. Do you believe Albania is well prepared for cyber attacks?",
    options: [
      "Yes",
      "Somewhat prepared",
      "Not really prepared",
      "I don't have information"
    ],
    multiple: false
  },
  {
    question: "9. Do you believe Albanian businesses invest enough in cybersecurity protection?",
    options: [
      "Yes",
      "No",
      "Some do, some don't",
      "Not sure"
    ],
    multiple: false
  },
  {
    question: "10. Do you think your data is safe on Albanian government platforms (e.g., e-Albania)?",
    options: [
      "Yes",
      "Somewhat",
      "No, I'm concerned",
      "I don't use this platform"
    ],
    multiple: false
  },
  {
    question: "11. What makes you trust an Albanian website with your personal data? (Select all that apply)",
    options: [
      "HTTPS / secure connection",
      "Known organization",
      "Professional design",
      "Data privacy statement",
      "Nothing"
    ],
    multiple: true
  },
  {
    question: "12. Have you ever reported a cybercrime or scam to Albanian authorities?",
    options: [
      "Yes",
      "No"
    ],
    multiple: false
  },
  {
    question: "13. How often do you receive suspicious emails or messages?",
    options: [
      "Daily",
      "Weekly",
      "Occasionally",
      "Rarely",
      "Never"
    ],
    multiple: false
  },
  {
    question: "14. If a suspicious message appears in your inbox, what do you do first?",
    options: [
      "Ignore/delete it",
      "Report it to authorities",
      "Click the link to check",
      "Ask friends/family for advice"
    ],
    multiple: false
  },
  {
    question: "15. Do you use the same password for multiple accounts?",
    options: [
      "Never",
      "Rarely",
      "Sometimes",
      "Always"
    ],
    multiple: false
  },
  {
    question: "16. Do you use two-factor authentication (2FA) on your main accounts?",
    options: [
      "Never",
      "Rarely",
      "Sometimes",
      "Always"
    ],
    multiple: false
  },
  {
    question: "17. Which of the following do you use to manage your passwords? (Select all that apply)",
    options: [
      "I memorize them",
      "I use a password manager",
      "I write them down",
      "I use the same password everywhere"
    ],
    multiple: true
  },
  {
    question: "18. Have you ever come across fake news or misleading information online in Albanian platforms?",
    options: [
      "Yes, frequently",
      "Sometimes",
      "Rarely",
      "Never",
      "I don't know"
    ],
    multiple: false
  },
  {
    question: "19. Do you connect to public Wi-Fi without using a VPN?",
    options: [
      "Yes, often",
      "Sometimes",
      "Rarely",
      "Never",
      "I don’t know what a VPN is"
    ],
    multiple: false
  },
  {
    question: "20. Have you or someone you know been a victim of a cyber attack or scam?",
    options: [
      "Yes, personally",
      "Yes, someone I know",
      "No",
      "Not sure"
    ],
    multiple: false
  },
  {
    question: "21. In your opinion, what should the Albanian government prioritize to improve cybersecurity? (Select all that apply)",
    options: [
      "More education and awareness campaigns",
      "Stricter laws and enforcement",
      "Better protection of public systems",
      "Collaboration with international cybersecurity experts",
      "Stronger public-private partnerships",
      "Regular security audits for organizations"
    ],
    multiple: true
  },
  {
    question: "22. Would you participate in a free cybersecurity awareness training if offered?",
    options: [
      "Yes, definitely",
      "Maybe",
      "No, not interested"
    ],
    multiple: false
  }
];

let currentQuestionIndex = 0;
let selectedAnswers = [];
let playerName = "";
let playerEmail = "";

// Cached DOM Elements
const startPage = document.getElementById("start-page");
const signInModal = document.getElementById("sign-in-modal");
const quizPage = document.getElementById("quiz-page");

const playerNameInput = document.getElementById("player-name");
const playerEmailInput = document.getElementById("player-email");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");

const submitMessageContainer = document.getElementById("submit-message-container");
const submitMessage = document.getElementById("submit-message");

function goToSignIn() {
  startPage.style.display = "none";
  signInModal.style.display = "flex";
}

function closeSignInModal() {
  signInModal.style.display = "none";
  startPage.style.display = "block";
}
function validateName(name) {
  const re = /^[a-zA-Z]{5,10}$/;
  return re.test(name);
}


function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]{10,20}@gmail\.com$/;
  return re.test(email);
}

function startQuiz() {
  playerName = playerNameInput.value.trim();
  playerEmail = playerEmailInput.value.trim();

  if (!playerName|| !playerEmail) {
    alert("Please complete the sign-in form before proceeding.");
    return;
  }
  if (!playerName) {
    alert("Please enter your name.");
    return;
  }
   if (!playerEmail) {
    alert("Please enter your email.");
    return;
  }
if (!validateName(playerName)) {
  alert("Name must be 5–10 alphabetic characters.");
  return;
}

  if (!playerEmail || !validateEmail(playerEmail)) {
    alert("Email must be in the format name@gmail.com, where 'name' has 10–20 characters.");
    return;
  }

  signInModal.style.display = "none";
  quizPage.style.display = "block";

  currentQuestionIndex = 0;
  selectedAnswers = [];

  submitMessageContainer.style.display = "none";
  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "none";

  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questionsData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionId = `option${index}`;
    const inputType = currentQuestion.multiple ? "checkbox" : "radio";

    const inputEl = document.createElement("input");
    inputEl.type = inputType;
    inputEl.name = "option";
    inputEl.id = optionId;
    inputEl.value = option;

    const labelEl = document.createElement("label");
    labelEl.setAttribute("for", optionId);
    labelEl.textContent = option;

    optionsEl.appendChild(inputEl);
    optionsEl.appendChild(labelEl);

    inputEl.addEventListener("change", () => {
      if (!currentQuestion.multiple) {
        const labels = optionsEl.querySelectorAll("label");
        labels.forEach(label => label.classList.remove("selected"));
      }
      if (inputEl.checked) {
        labelEl.classList.add("selected");
      } else {
        labelEl.classList.remove("selected");
      }
    });
  });
}

function getSelectedOptions() {
  const inputs = document.querySelectorAll("#options input");
  let selected = [];
  inputs.forEach(input => {
    if (input.checked) {
      selected.push(input.value);
    }
  });
  return selected;
}

function nextQuestion() {
  const selected = getSelectedOptions();
  if (selected.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  selectedAnswers.push(selected);
  currentQuestionIndex++;

  if (currentQuestionIndex >= questionsData.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  }

  if (currentQuestionIndex < questionsData.length) {
    loadQuestion();
  }
}

function submitQuiz() {
  const selected = getSelectedOptions();
  if (selected.length === 0) {
    alert("Please select at least one option.");
    return;
  }
  selectedAnswers.push(selected);

  const data = {
    name: playerName,
    email: playerEmail,
    answers: selectedAnswers
  };
  fetch("https://script.google.com/macros/s/AKfycbwn5W3eZMM8dHgA6skE-zHvp-abNnUuyj28img_wYSOOwCpIQbLRbK5tQ0IzxOM_4O6Ew/exec", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log("Status:", response.status);
  return response.text();
})
.then(result => {
  console.log("Result:", result);
  submitMessage.textContent = `Form submitted successfully, thank you ${playerName}!`;
  submitMessageContainer.style.display = "block";
})
.catch(error => {
  console.error("Fetch error:", error);
  alert("There was an error submitting your quiz. Please try again.");
});

}




