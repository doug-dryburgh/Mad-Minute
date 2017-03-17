$(document).ready(function () {
    var value1;
    var value2;
    var userAnswer;
    var answer;
    var mode;
    var seconds = 60;
    var totalQuestions = 1;
    var correct = 0;
    var incorrect = 0;
    //TIMER
    $("#timer").html("0:" + seconds);

    function startTime() {
        var interval = setInterval(function () {
            seconds--;
            if (seconds > 9) {
                $("#timer").html("0:" + seconds);
            }
            else {
                $("#timer").html("0:0" + seconds);
                if (seconds === 0) {
                    clearInterval(interval);
                    finalScore();
                }
            }
        }, 1000);
    }
    //ADDITION
    $("#selection > h3:nth-child(1)").click(function () {
        mode = "addition";
        addition();
        startGame();
    });

    function addition() {
        value1 = Math.floor(Math.random() * 13);
        value2 = Math.floor(Math.random() * 13);
        answer = value1 + value2;
        $("#firstNum").html(value1);
        $("#operator").html("+");
        $("#secondNum").html(value2);
    }
    //addition();
    //SUBTRACTION
    $("#selection > h3:nth-child(2)").click(function () {
        mode = "subtraction";
        subtraction();
        startGame();
    });
    //subtraction();
    function subtraction() {
        value1 = Math.floor(Math.random() * 11) + 10;
        value2 = Math.floor(Math.random() * 11);
        answer = value1 - value2;
        $("#firstNum").html(value1);
        $("#operator").html("&minus;");
        $("#secondNum").html(value2);
    }
    //MULTIPLICATION
    $("#selection > h3:nth-child(3)").click(function () {
        mode = "multiplication";
        multiplication();
        startGame();
    });
    //multiplication();
    function multiplication() {
        value1 = Math.floor(Math.random() * 11);
        value2 = Math.floor(Math.random() * 11);
        answer = value1 * value2;
        $("#firstNum").html(value1);
        $("#operator").html("&times");
        $("#secondNum").html(value2);
    }
    //DIVISION
    $("#selection > h3:nth-child(4)").click(function () {
        mode = "division";
        division();
        startGame();
    });
    //division();
    function division() {
        value1 = Math.floor(Math.random() * 11) + 6;
        value2 = Math.floor(Math.random() * 6) + 1;
        answer = value1 / value2;
        if (value1 % value2 !== 0) {
            division();
        }
        $("#firstNum").html(value1);
        $("#operator").html("&divide;");
        $("#secondNum").html(value2);
    }
    //RANDOM QUESTION
    $("#selection > h3:nth-child(5)").click(function () {
        mode = "random";
        random();
        startGame();
    });

    function random() {
        var randomSelection = Math.floor(Math.random() * 4);
        if (randomSelection === 0) {
            addition();
        }
        else if (randomSelection === 1) {
            subtraction();
        }
        else if (randomSelection === 2) {
            multiplication();
        }
        else if (randomSelection === 3) {
            division();
        }
    }
    //TRANSITION WELCOME SCREEN
    function startGame() {
        $("#welcome").fadeOut(200);
        setTimeout(function () {
            $("#game").fadeIn(200);
            $("#game").css("display", "flex");
            startTime();
        }, 200);
    }
    //SUBMIT ANSWER
    $("#getAnswer").submit(function (event) {
        event.preventDefault();
        userAnswer = $("#answer")[0].value;
        checkAnswer();
        $("#answer").val("");
        if (mode == "addition") {
            $("#problem").animate({
                opacity: "0"
            }, 200);
            setTimeout(function () {
                addition();
                $("#problem").animate({
                    opacity: "1"
                }, 200);
            }, 200);
        }
        else if (mode == "subtraction") {
            $("#problem").animate({
                opacity: "0"
            }, 200);
            setTimeout(function () {
                subtraction();
                $("#problem").animate({
                    opacity: "1"
                }, 200);
            }, 200);
        }
        else if (mode == "multiplication") {
            $("#problem").animate({
                opacity: "0"
            }, 200);
            setTimeout(function () {
                multiplication();
                $("#problem").animate({
                    opacity: "1"
                }, 200);
            }, 200);
        }
        else if (mode == "division") {
            $("#problem").animate({
                opacity: "0"
            }, 200);
            setTimeout(function () {
                division();
                $("#problem").animate({
                    opacity: "1"
                }, 200);
            }, 200);
        }
        else if (mode == "random") {
            $("#problem").animate({
                opacity: "0"
            }, 200);
            setTimeout(function () {
                random();
                $("#problem").animate({
                    opacity: "1"
                }, 200);
            }, 200);
        }
    });
    //CHECK ANSWER
    function checkAnswer() {
        if (userAnswer == answer) {
            correct++;
            document.getElementById("correct").play();
        }
        else {
            incorrect++;
            document.getElementById("incorrect").play();
        }
        totalQuestions++;
    }
    //SCORE SCREEN
    function finalScore() {
        $("#score > p").html("You saw " + totalQuestions + " questions. You got " + correct + " right and " + incorrect + " wrong");
        $("#game").fadeOut(200);
        setTimeout(function () {
            $("#score").fadeIn(200);
            $("#score").css("display", "flex");
        }, 200);
        seconds = 60;
        totalQuestions = 1;
        correct = 0;
        incorrect = 0;
    }
    $("#score > h2").click(function () {
        $("#score").fadeOut(200);
        setTimeout(function () {
            $("#welcome").fadeIn(200);
            $("#welcome").css("display", "flex");
        }, 200);
    });

    function test(event) {}
    $("#test").click(function () {
        finalScore();
    });
});