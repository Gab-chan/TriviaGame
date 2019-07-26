//The id div start hiden.
$("#div").hide();


// function timer(seconds){
//     const now = Date.now();
//     const then = now + seconds * 1000;
//     console.log({now, then});
// }

// When the button start is press the div tag with the id div is visible and the height of the div with id div1 is change to auto so the questions fit inside the div1.
$("#start").click(function(){
    
    $("#div").show();
    $("#start").hide();
    $("#div1").css("height", "auto");
    c = 80;
})


function check(){
    //question variables in which the value of each radio button is store.
    
    var question1 = document.form1.question1.value;
	var question2 = document.form1.question2.value;
    var question3 = document.form1.question3.value;
    var question4 = document.form1.question4.value;
    var question5 = document.form1.question5.value;
    var question6 = document.form1.question6.value;
    var question7 = document.form1.question7.value;
    var question8 = document.form1.question8.value;
    //variables used at the end to show the score.
	var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //question 1 conditions
	if (question1 == "Lord Boros") {
        correct++;
        
    }

    if (question1 != "Lord Boros" && question1 != ""){
        incorrect++;
    }

    if (question1 == ""){
        unanswered++;
    }
    //question 2 conditions
	if (question2 == "Erza") {
		correct++;
    }

    if (question2 != "Erza" && question2 != ""){
        incorrect++;
    }
    
    if (question2 == ""){
        unanswered++;
    }
    //question 3 conditions
	if (question3 == "Accelerator") {
		correct++;
    }

    if (question3 != "Accelerator" && question3 != ""){
        incorrect++;
    }
    
    if (question3 == ""){
        unanswered++;
    }
    //question 4 conditions
    if (question4 == "Madoka") {
		correct++;
    }

    if (question4 != "Madoka" && question4 != ""){
        incorrect++;
    }
    
    if (question4 == ""){
        unanswered++;
    }
    //question 5 conditions
    if (question5 == "Goblin") {
		correct++;
    }

    if (question5 != "Goblin" && question5 != ""){
        incorrect++;
    }
    
    if (question5 == ""){
        unanswered++;
    }
    //question 6 conditions
    if (question6 == "Erina") {
		correct++;
    }

    if (question6 != "Erina" && question6 != ""){
        incorrect++;
    }
    
    if (question6 == ""){
        unanswered++;
    }
    //question 7 conditions
    if (question7 == "Ais") {
		correct++;
    }

    if (question7 != "Ais" && question7 != ""){
        incorrect++;
    }
    
    if (question7 == ""){
        unanswered++;
    }
    //question 8 conditions
    if (question8 == "Father") {
		correct++;
    }

    if (question8 != "Father" && question8 != ""){
        incorrect++;
    }
    
    if (question8 == ""){
        unanswered++;
    }

    // console.log(correct, incorrect, unanswered);
    //The score variables are attach to the html.
    document.getElementById("alldone").innerHTML = "All Done!";
    document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
    document.getElementById("incorrect").innerHTML = "Incorrect Answers: " + incorrect;
    document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
    
    
}

//when pressing the button done the div that contains the questions plus the button start will be hidden and the div with id div will have a height of auto.
$("#done").click(function(){
    $("#div3").hide();
    $("#div").css({"height": "auto"});
    $("#start").hide();
})



function timer001(){
    c = c - 1;
    if (c < 80){
        time001.innerHTML = c;
    }
    if (c < 1){
        window.clearInterval(update);
        $("#div3").hide();
        document.getElementById("alldone").innerHTML = "Time's up";
        document.getElementById("incorrect").innerHTML = "You Failed!";
        
        
    }
}
update = setInterval("timer001()", 1000);










