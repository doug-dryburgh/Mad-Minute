$(document).ready(function () {
    var value1;
    var value2;
    var answer;
    //ADDITION
    function addition() {
        value1 = Math.floor(Math.random() * 13);
        value2 = Math.floor(Math.random() * 13);
        answer = value1 + value2;
    }

    
    $("#test").click(function () {
        addition();
        console.log(value1 + " + " + value2 + " = " + answer);
    });
});