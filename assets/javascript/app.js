$("#div").hide();

$("#start").click(function(){
    $("#div").show();
    $("#div").css({"height": "auto"});
    $("#start").hide();
})


function check(){
    var question1 = document.form1.question1.value;
	var question2 = document.form1.question2.value;
    var question3 = document.form1.question3.value;
    var question4 = document.form1.question4.value;
    var question5 = document.form1.question5.value;
    var question6 = document.form1.question6.value;
    var question7 = document.form1.question7.value;
    var question8 = document.form1.question8.value;
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

    console.log(correct, incorrect, unanswered);

    document.getElementById("alldone").innerHTML = "All Done";
    document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
    document.getElementById("incorrect").innerHTML = "Incorrect Answers: " + incorrect;
    document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;

}

$("#done").click(function(){
    $("#div3").hide();
    $("#div").css({"height": "auto"});
    $("#start").hide();
})











