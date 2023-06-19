//jquery exemple sur le video webinar//
$(document).ready(function(){
    $('#btn-start').click(function() {
        $('#quiz-box').slideDown(1000);
        $('#intro-quiz').slideUp(2000);
  
    });

    $('#logo-haut').click(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });
    $('#logo-bat').click(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    })    

    function setForm(question, response, nbreQuiz) {
        $('#img-illustrate').attr("src","./assets/images/illustrations-game/Batgame_" + (2 + nbreQuiz) + ".png");
        $('#number-quiz').text(nbreQuiz);
    }
});

    //js simple//
    //sans API//

    const quizData = [
        {
            question: "Quel est l’autre nom de l’Homme-Mystère ?",
            a:"Le Saphinx",
            b:"Le Saphir",
            c:"Le Joker",
            correct:"a,b,c",
        },

        {
            question: "Quelle est l’ancienne profession de Harley Quinn  ?",
            a:"Infirmière",
            b:"Psychiatre",
            c:"Dentiste",
            correct:"b",
        },
        {
            question: " Quel est l’objet fétiche de Double Face?",
            a:"Une piece",
            b:"Un livre",
            c:"Un couteau",
            correct:"a",
        },
        {
            question: "Quelle ville Batman défend-il ?",
            a:"Gotham City",
            b:"Starling City",
            c:"Tananarive",
            correct:"a",
        },
        {
            question: " Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
            a:"Georges Clooney",
            b:"Val Kilmer",
            c:"Mickael Keaton",
            correct:"",
        },
        {
            question: "Quel est le prénom des parents du jeune Bruce Wayne?",
            a:"Matina et Adam",
            b:"Elaine et Georges",
            c:"Martha et James",
            correct:"b",
        },
        {
            question: "Dans son premier Batman (1989) Jack Nicholson jouait :?",
            a:"Le Pingouin",
            b:"L'Homme mystère",
            c:"Le Geek",
            correct:"b",
        },
        {
            question: "Qui interprète le Joker en 2008 ?",
            a:"Heath Legder",
            b:"Haeth Ledger",
            c:"Heath Ledger",
            correct:"c",
        },
        {
            question: "En quelle année Robin fait il sa première apparition ?",
            a:"1940",
            b:"1936",
            c:"1941",
            correct:"a",
    
        },
        {
            question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
            a:"Oracle Huntress",
            b:"Black Canary",
            c:"L'Epouvantail",
            correct:"a",
        },
        { 
            question: "Batman c’est aussi le nom d’une ville en...?",
            a:"Islande",
            b:"Turquie",
            c:"Allemagne",
            correct:"b",
        },
        {
            question: "Qui a realisé Batman en 1966 ?",
            a:"Stanley Kubrick",
            b:"Andy Warhol",
            c:"Leslie Martinson",
            correct:"c",
        }
       
    ];

    const quiz= document.getElementById('quiz')
    const answerEls =  document.querySelectorAll('.answer')
    const questionEl= document.getElementById('question')
    const a_text= document.getElementById('a_text')
    const b_text= document.getElementById('b_text')
    const c_text= document.getElementById('c_text')
    const submitBtn= document.getElementById('submit')

    let currentQuiz = 0
    let score = 0
    
    loadQuiz()
    
    function loadQuiz(){
    
    deselectAnswers()
    const currentQuizData= quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    }
    
    function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
    }
    
    submitBtn.addEventListener('click' , () => {
    const answer = getSelected()
    if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    
    if(currentQuiz < quizData.length){
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>you answered ${score}/${quizData.length}questions correctly</h2>
        <button onclick="location.reload()">Recommencer le quiz</button>
        `
    
    }
    }
    })