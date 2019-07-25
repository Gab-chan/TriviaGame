// var correct = 0;
// var incorrect = 0;
// var unanswered = 0;



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

    
	if (question1 == "Lord Boros") {
		correct++;
}
	if (question2 == "Erza") {
		correct++;
}	
	if (question3 == "Accelerator") {
		correct++;
    }
    if (question4 == "Madoka") {
		correct++;
    }
    if (question5 == "Goblin") {
		correct++;
    }
    if (question6 == "Erina") {
		correct++;
    }
    if (question7 == "Ais") {
		correct++;
    }
    if (question8 == "Father") {
		correct++;
    }
    console.log(correct);
}

// $("#second").hide();

// $("#start").click(function(){
//     $("#second").show();
//     $("#first").css({"height": "auto"});
//     $("#start").hide();
// })




// if (document.getElementById("num1").checked === "female") {
//     score++

// }




