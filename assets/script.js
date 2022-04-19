const btnplay = document.getElementById('btnplay')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const about = document.getElementById('about');
let currentQuestionIndex = 0;
var modal = document.getElementById("myModal");
const googledriveurl = "https://drive.google.com/uc?export=view&id=";
function getGoogleDriveImageUrl(key) {
    switch (key) {
        case "hedayat":
            return "assets/images/hedayat.png";
        case "buddy":
            return "assets/images/buddy.png";
        case "david":
            return "assets/images/david.png";
        case "tom":
            return "assets/images/tom.png";
        case "panda":
            return "assets/images/panda.png";
        case "quala":
            return "assets/images/quala.png";
        case "penguin":
            return "assets/images/penguin.png";
        default:
            break;
    }



}
btnplay.addEventListener('click', playGame);

function playGame() {
    modal.style.display = "block";
    resetState()
    showQuestion(questions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.sort(() => Math.random() - .5).forEach(answer => {
        const img = document.createElement('img')
        img.src = getGoogleDriveImageUrl(answer.text)
        img.alt = answer.text
        img.id = question.id
        img.classList.add('img-option')
        if (answer.correct) {
            img.dataset.correct = answer.correct
        }
        img.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(img)
    })
}
function resetState() {

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    currentQuestionIndex++;
    const selectedButton = e.target
    const id = e.target.id;
    const correct = selectedButton.dataset.correct ? true : false;

    const question = questions.find(i => i.id == id);
    const answer = question.answers.find(i => i.text == e.target.alt);

    if (questions.length >= currentQuestionIndex + 1) {
        btnplay.innerText = question.button

    } else {
        btnplay.classList.add('hide')
    }
    about.innerHTML += answer.desc;
    about.innerHTML += question.posttext;
    modal.style.display = "none";
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        id: 1,
        question: 'Can you guess which one is Hedayat?',
        answers: [
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> Wrong guess, This is Hedayat, you selected his good friend that will be introduced later.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> This one is Hedayat, actually you selected a good buddy! just wait! you will know him in a second.` },
            { text: 'hedayat', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> That is true, it is Hedayat.  did you know him or just guessed by face? ` },
            { text: 'panda', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> Hedayat loves panda, but unfortunately he is not one of them.  ` }
        ],
        posttext: " ",
        button: "Go next!"
    },
    {
        id: 2, question: 'Which one is David?',
        answers: [
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> Sooo smart, yeeh this is David with a big heart and a bigger head.` },
            { text: 'tom', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> Really?!! Tom!!? This is David. Don't worry you were not so wrong, David has an internal Tom. If you don't believe it, just bite him. ` },
            { text: 'david', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> Sooo smart, yeeh this is David with a big heart and a bigger head.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> You selected a buddy who is a close friend of him. But this is David. He is always busy, even when he is not busy! ` }
        ],
        posttext: " ",
        button: "And then!"
    },
    {
        id: 3, question: 'Please focous and find Buddy carefully. Otherwise!? something will explode.',
        answers: [
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/>  Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` }
        ],
        posttext: " ",
        button: "Okay. More!"
    },
    {
        id: 4,
        question: 'Who deserve your F**K words if needed?',
        answers: [
            { text: 'hedayat', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> Exactly, Hedayat takes responsibility for all the silly ideas in this container. Don't target others. ` },
            { text: 'panda', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> What? a lovely panda? No they didn't do anything here. Hedayat takes responsibility for all the silly ideas you see on this container. Don't target others. ` },
            { text: 'tom', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/> Although Tom is the devil, but still Hedayat takes responsibility for all the silly ideas in this container. Don't target others.` },
            { text: 'quala', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("hedayat")}'/>However hedayat's internal koala is big and sleepy all the time. But it is Hedayat that takes responsibility for all the silly ideas in this container. Don't target others.Please!  ` }
        ],
        posttext: " ",
        button: "Play again!"
    },
    {
        id: 5,
        question: 'Commercial, Busy, Bridge, Money, Token, Challange, Connection. These tornifed words can be used to describe which one better?',
        answers: [
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> Absolutely correct, it is David. If you need any contact about commercial topics contact him.  ` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> however you tought about buddy, but the right & best person for of commercial topics is David. ` },
            { text: 'hedayat', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> let's hedayat focus on the games and give the jobs of commercial topics to David.` },
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("david")}'/> Absolutely correct, it is David. So you got it right, if you need any contact about DAO, Token, Investment, Connection and etc whom to contact  ` },
        ],
        posttext: " ",
        button: "And then!"
    },
    {
        id: 6,
        question: 'Therapy, adventure, concious, holder, transformer, which one fits better to those words?',
        answers: [
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> It is buddy that support and hold others for transformation.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> It is buddy that support and hold others for transformation.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> It is buddy that support and hold others for transformation.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("buddy")}'/> It is buddy that support and hold others for transformation. ` },
        ],
        posttext: " ",
        button: "Finally!"
    },
    {
        id: 7,
        question: 'Who can be the next team member?',
        answers: [
            { text: 'panda', correct: true, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("panda")}'/> If you would like to join us please bring your internal panda or any other animal.` },
            { text: 'quala', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("quala")}'/> If you would like to join us please bring your internal quala or any other animal.` },
            { text: 'tom', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("tom")}'/> If you would like to join us please bring your internal tom or any other animal.` },
            { text: 'penguin', correct: false, desc: `<img class='img-story' src='${getGoogleDriveImageUrl("penguin")}'/> If you would like to join us please bring your internal penguin or any other animal.` },
        ],
        posttext: "<br/> <br/> <h3>Thank you!</h3>",
        button: ""
    }
]





// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}