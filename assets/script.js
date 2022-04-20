const btnplay = document.getElementById('btnplay')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const about = document.getElementById('about');
let currentQuestionIndex = 0;
var modal = document.getElementById("myModal");
const googledriveurl = "https://drive.google.com/uc?export=view&id=";
function getImage(key) {
    return "assets/images/" + key + ".png";
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
        img.src = getImage(answer.text)
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
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getImage("hedayat")}'/> Wrong guess, This is Hedayat, you selected his good friend that will be introduced later.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/> This one is Hedayat, actually you selected a good buddy! just wait! you will know him in a second.` },
            { text: 'hedayat', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/> That is true, it is Hedayat.  did you know him or just guessed by face? ` },
            { text: 'panda', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/> Hedayat loves panda, but unfortunately he is not one of them.  ` }
        ],
        posttext: " ",
        button: "Go next!"
    },
    {
        id: 2, question: 'Which one is David?',
        answers: [
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getImage("david")}'/> Sooo smart, yeeh this is David with a big heart and a bigger head.` },
            { text: 'tom', correct: false, desc: `<img class='img-story' src='${getImage("david")}'/> Really?!! Tom!!? No No this one is David. Don't worry you were not so wrong, David has an internal Tom. If you don't believe it, just bite him. ` },
            { text: 'david', correct: false, desc: `<img class='img-story' src='${getImage("david")}'/> Sooo smart, yeeh this is David with a big heart and a bigger head.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("david")}'/> You selected a buddy who is a close friend of him. But this one is David. He is always busy, even when he is not busy! ` }
        ],
        posttext: " ",
        button: "And then!"
    },
    {
        id: 3, question: 'Please focus and find Buddy carefully. Otherwise!? something will explode.',
        answers: [
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getImage("buddy")}'/>  Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("buddy")}'/> Yessss you did it. This is Buddy. With a lot of unpredictable abilities.` }
        ],
        posttext: " ",
        button: "One more!"
    },
    {
        id: 4,
        question: 'Who deserve your F**K words if needed?',
        answers: [
            { text: 'hedayat', correct: true, desc: `<img class='img-story' src='${getImage("hedayat")}'/> Exactly, Hedayat takes responsibility for all the silly ideas in this container. Don't target others. ` },
            { text: 'panda', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/> What? a lovely panda? No they didn't do anything here. Hedayat takes responsibility for all the silly ideas you see on this container. Don't target others. ` },
            { text: 'tom', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/> Although Tom is the devil, but still Hedayat takes responsibility for all the silly ideas in this container. Don't target others.` },
            { text: 'quala', correct: false, desc: `<img class='img-story' src='${getImage("hedayat")}'/>However hedayat's internal koala is big and sleepy all the time. But it is Hedayat that takes responsibility for all the silly ideas in this container. Don't target others.Please!  ` }
        ],
        posttext: " ",
        button: "Play again!"
    },
    {
        id: 5,
        question: 'Commercial, Connection, Bridge, Business, Token, DAO, Blockchain, Holochain, Challenge, NFT. These tornifed words can be used to describe which one better?',
        answers: [
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getImage("david")}'/> Absolutely correct, it is David who fits a lot with these topics: Commercial, Connection, Bridge, Business, Token, DAO, Blockchain, Holochain, Challenge, NFT and much more.  ` },
            { text: 'buddy', correct: false, desc: `<img class='img-story' src='${getImage("david")}'/> Buddy can hold and support David to be fits for these topic: Commercial, Connection, Bridge, Business, Token, DAO, Blockchain, Holochain, Challenge, NFT and much more.  ` },
            { text: 'hedayat', correct: false, desc: `<img class='img-story' src='${getImage("david")}'/> Hedayat would love to support David to be fits for these topic: Commercial, Connection, Bridge, Business, Token, DAO, Blockchain, Holochain, Challenge, NFT and much more.  .` },
            { text: 'david', correct: true, desc: `<img class='img-story' src='${getImage("david")}'/> Absolutely correct, it is David who fits a lot with these topics: Commercial, Connection, Bridge, Business, Token, DAO, Blockchain, Holochain, Challenge, NFT and much more.  ` },
        ],
        posttext: " ",
        button: "Next one!"
    },
    {
        id: 6,
        question: 'Which one fits better to these words? Therapy, Adventure, Consciousness, Holder, Transformer',
        answers: [
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getImage("buddy")}'/> Amazingly, amazing part of Buddy is about consciousness & therapy with holding and supporting others in the transformation phase of their adventures. ` },
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getImage("buddy")}'/> Amazingly, amazing part of Buddy is about consciousness & therapy with holding and supporting others in the transformation phase of their adventures. ` },
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getImage("buddy")}'/> Amazingly, amazing part of Buddy is about consciousness & therapy with holding and supporting others in the transformation phase of their adventures. ` },
            { text: 'buddy', correct: true, desc: `<img class='img-story' src='${getImage("buddy")}'/> Amazingly, amazing part of Buddy is about consciousness & therapy with holding and supporting others in the transformation phase of their adventures. ` },
        ],
        posttext: " ",
        button: "Finally!"
    },
    {
        id: 7,
        question: 'Who can be the next team member?',
        answers: [
            { text: 'elephant', correct: true, desc: `<img class='img-story' src='${getImage("elephant")}'/> A strong elephant in the team would be great. Do you have it or know it?` },
            { text: 'jerry', correct: false, desc: `<img class='img-story' src='${getImage("jerry")}'/> Playful Jerry is an exciting motivational option. Do you have it or know it?` },
            { text: 'turtle', correct: false, desc: `<img class='img-story' src='${getImage("turtle")}'/>A slow turtle can be a good team member. Do you have it or know it?` },
            { text: 'question', correct: false, desc: `<img class='img-story' src='${getImage("question")}'/> Hmm you also don't know who can be the next team member. Would you like to discover yourself more?.` },
        ],
        posttext: "<br/> <br/> <h3>Thank you!</h3><h4><a href='http://www.zand.games/' target='blank'>ZAND.GAMES Teamtro</a><h4>",
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