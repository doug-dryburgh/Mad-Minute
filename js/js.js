$(document).ready(function () {
    var value1;
    var value2;
    var answer;
    var mode = "addition";
    var totalQuestions = 0;
    var correct = 0;
    var incorrect = 0;
    //ADDITION
    $("#selection > h3:nth-child(1)").click(function () {
        mode = "addition";
        console.log("addition");
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
    addition();
    //SUBTRACTION
    $("#selection > h3:nth-child(2)").click(function () {
        mode = "subtraction";
        console.log("subtraction");
        subtraction();
        startGame();
    });

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
        console.log("multiplication");
        multiplication();
        startGame();
    });

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
        console.log("division");
        division();
        startGame();
    });

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
    //TRANSITION WELCOME SCREEN
    function startGame() {
        $("#welcome").fadeOut(200);
        setTimeout(function () {
            $("#game").fadeIn(200);
            $("#game").css("display", "flex");
        }, 200);
    }
    //SUBMIT ANSWER
    $("#getAnswer").submit(function (event) {
        event.preventDefault();
        test();
        if (mode == "addition") {
            addition();
        }
    });

    function test() {
        var userAnswer = $("#answer")[0].value;
        console.log(userAnswer);
        $("#answer").val("");
    }
    $("#test").click(function () {
        console.log(value1 % value2 == 0);
    });
});