$(document).ready(function() {

	var totalQuestions = 5;
	var numCorrect = 0;

	var questions = [{
		question: "What Major League Baseball team drafted Matt 7th overall in 2010?",
		qNum: "1",
		answers: ["St. Louis Cardinals", "Milwaukee Brewers", "New York Mets", "New York Yankees"],
		correct: "New York Mets",
		wrong: "You are incorrect. Matt Harvey was drafted 7th overall in the 2010 draft by the New York Mets."
		},
		{
		question: "In what city was Matt born?",
		qNum: "2",
		answers: ["New London, Connecticut", "Richmond, Virginia", "San Diego, California", "Portsmouth, New Hampshire"],
		correct: "New London, Connecticut",
		wrong: "You are incorrect. Matt was born in New London, Connecticut. He is the only son and youngest of three children of Ed and Jackie Harvey, both teachers."
		},
		{
		question: "When did Matt make his Major League debut?",
		qNum: "3",
		answers: ["July 26, 2012", "June 11, 2011", "August 9, 2013", "September 4, 2012"],
		correct: "July 26, 2012",
		wrong: "You are incorrect. Matt made his Major League debut against the Arizona Diamondback on July 26, 2012."
		},
		{
		question: "Who was a childhood idol of Matt's?",
		qNum: "4",
		answers: ["Alex Rodriguez", "John Smoltz", "Pedro Martinez", "Derek Jeter"],
		correct: "Derek Jeter",
		wrong: "You are incorrect. Matt grew up a Yankee fan and his childhood idols were Yankee greats Derek Jeter and Paul O'Neill."
		},
		{
		question: "What is Matt's favorite NFL football team?",
		qNum: "5",
		answers: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "New York Giants"],
		correct: "New England Patriots",
		wrong: "You are incorrect. Matt's favorite NFL football team is the New England Patriots."
	}];

	$(".startbutton").click(function() {
		$(".answertext").prepend("<input type='radio' value=" + question1.answer4 + " />" + question1.answer4 + "<br>");
		$(".answertext").prepend("<input type='radio' value=" + question1.answer3 + " />" + question1.answer3 + "<br>");
		$(".answertext").prepend("<input type='radio' value=" + question1.answer2 + " />" + question1.answer2 + "<br>");
		$(".answertext").prepend("<input type='radio' value=" + question1.answer1 + " />" + question1.answer1 + "<br>");
		$(".questiontext").prepend("<p>" + question1.question + "</p>");
		$(".question_num").prepend("<p>Question " + question1.qNum + " of " + totalQuestions);
		$(".start").hide();
		$(".question").show();
	});

	/*$(".answer").click(function() {
		//if right show below and add to "correct" counter
		if (input value == question1.correct) {
			$(".rightwrong").prepend("<p>" + result1.correct + "</p>");
			numCorrect++;
		}
		else {
			$(".rightwrong").prepend("<p>" + result1.wrong + "</p>");
		}

		$(".question").hide();
		$(".rightwrong").show();

	});
	*/

	$(".next").click(function() {
		if (questionNumber != totalQuestions) {
			$(".rightwrong").hide();
			$(".question").show();
		}
		else {
			$(".rightwrong").hide();
			$(".final").show();
		}
	});


});