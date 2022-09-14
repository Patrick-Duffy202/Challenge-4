const Questions = [{
    id: 0,
    q: "How many inches in one foot?",
    a: [{ text: "12", isCorrect: true },
        { text: "24", isCorrect: false },
        { text: "36", isCorrect: false },
        { text: "48", isCorrect: false },
    ]
},
{   
    id: 1,
    q: "What is the capitol of Texas?",
    a: [{ text: "San Antonio", isCorrect: false},
        { text: "Dallas", isCorrect: false},
        { text: "Austin", isCorrect: true},
        { text: "Houston", isCorrect: false},
    ]
},
{   
    id: 2,
    q: "How many ounces in one pound?",
    a: [{ text: "10", isCorrect: false},
        { text: "5", isCorrect: false},
        { text: "18", isCorrect: false},
        { text: "16", isCorrect: true},
    ]
}
]

var start = true;

function iterate(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText = Questions[id].q;



    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');

    answer1.innerText = Questions[id].a[0].text;
    answer2.innerText = Questions[id].a[1].text;
    answer3.innerText = Questions[id].a[2].text;
    answer4.innerText = Questions[id].a[3].text;

    answer1.value = Questions[id].a[0].isCorrect;
    answer2.value = Questions[id].a[1].isCorrect;
    answer3.value = Questions[id].a[2].isCorrect;
    answer4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    answer1.addEventListener("click", () => {
        answer1.style.backgroundColor = "yellow";
        answer2.style.backgroundColor = "skyblue";
        answer3.style.backgroundColor = "skyblue";
        answer4.style.backgroundColor = "skyblue";
        selected = answer1.value;
    })

    answer2.addEventListener("click", () => {
        answer1.style.backgroundColor = "skyblue";
        answer2.style.backgroundColor = "yellow";
        answer3.style.backgroundColor = "skyblue";
        answer4.style.backgroundColor = "skyblue";
        selected = answer2.value;
    })

    answer3.addEventListener("click", () => {
        answer1.style.backgroundColor = "skyblue";
        answer2.style.backgroundColor = "skyblue";
        answer3.style.backgroundColor = "yellow";
        answer4.style.backgroundColor = "skyblue";
        selected = answer3.value;
    })

    answer4.addEventListener("click", () => {
        answer1.style.backgroundColor = "skyblue";
        answer2.style.backgroundColor = "skyblue";
        answer3.style.backgroundColor = "skyblue";
        answer4.style.backgroundColor = "yellow";
        selected = answer4.value; 
    })

    const check= document.getElementsByClassName("check");
    check[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
    if (start) {
        iterate("0");
    }
    
    var timeleft = 30;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    }, 1000);

    const next = document.getElementsByClassName('next')[0];
    var id = 0;

    next.addEventListener("click", () => {
        start = false;
        if (id < 2) {
            id++;
            iterate(id);
            console.log(id);
        } else {
            window.alert("Great job on the quiz, smarty!")
        }
    })

    


