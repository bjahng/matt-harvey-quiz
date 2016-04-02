$(document).ready(function() {

	var totalQuestions = 5;
	var currentQuestion = 0;
	var numCorrect = 0;

	var questions = [{
		question: "What Major League Baseball team drafted Matt 7th overall in 2010?",
		qNum: 1,
		answers: ["St. Louis Cardinals", "Milwaukee Brewers", "New York Mets", "New York Yankees"],
		correct: "New York Mets",
		fact: "Matt Harvey was drafted 7th overall in the 2010 draft by the New York Mets."
		},
		{
		question: "In what city was Matt born?",
		qNum: 2,
		answers: ["New London, Connecticut", "Richmond, Virginia", "San Diego, California", "Portsmouth, New Hampshire"],
		correct: "New London, Connecticut",
		fact: "Matt was born in New London, Connecticut. He is the only son and youngest of three children of Ed and Jackie Harvey, both teachers."
		},
		{
		question: "When did Matt make his Major League debut?",
		qNum: 3,
		answers: ["July 26, 2012", "June 11, 2011", "August 9, 2013", "September 4, 2012"],
		correct: "July 26, 2012",
		fact: "Matt made his Major League debut against the Arizona Diamondback on July 26, 2012."
		},
		{
		question: "Who was a childhood idol of Matt's?",
		qNum: 4,
		answers: ["Alex Rodriguez", "John Smoltz", "Pedro Martinez", "Derek Jeter"],
		correct: "Derek Jeter",
		fact: "Matt grew up a Yankee fan and his childhood idols were Yankee greats Derek Jeter and Paul O'Neill."
		},
		{
		question: "What is Matt's favorite NFL football team?",
		qNum: 5,
		answers: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "New York Giants"],
		correct: "New England Patriots",
		fact: "Matt's favorite NFL football team is the New England Patriots."
	}];

	// what to do when start button is clicked
	$(".next").click(function() {

		$(".question p").remove();
		$(".answertext").children().remove();
		$(".choicetext").remove;

		if ( currentQuestion < totalQuestions) {

			for (var i = questions[currentQuestion].answers.length - 1; i >= 0; i--) {
				$(".answertext").prepend("<input type='radio' name='choice' value='" + questions[currentQuestion].answers[i] + "' /><span class='choicetext'>" + questions[currentQuestion].answers[i] + "</span><br>");
			}
			
			$(".questiontext").prepend("<p>" + questions[currentQuestion].question + "</p>");
			$(".question_num").prepend("<p>Question " + questions[currentQuestion].qNum + " of " + totalQuestions);

			$(".start").hide();
			$(".rightwrong").hide();
			$(".question").show();

		}
		else if ( currentQuestion == totalQuestions ) {
			$(".final").prepend("<p>Would you like to try again?</p>");
			$(".final").prepend("<p>You got " + numCorrect + " right!</p>");

			$(".rightwrong").hide();
			$(".final").show();
			currentQuestion++;
		}
		else {
			$(".final p").remove();
			$(".final").hide();
			$(".start").show();
			currentQuestion = 0;
			numCorrect = 0;
		}

	});

	$(".answer").click(function() {

		$(".rightwrong p").remove();

 		var answer = $("input[type='radio']:checked").val();
 		
 		if ( answer === undefined ) {
 			event.preventDefault();
 		}
 		else {
 			if ( answer == questions[currentQuestion].correct) {
				$(".rightwrong").prepend("<p>You are correct!</p>");
				numCorrect++;
			}
			else {
				$(".rightwrong").prepend("<p>" + questions[currentQuestion].fact + "</p>");
				$(".rightwrong").prepend("<p>You are incorrect!</p>");
			}

			$(".question").hide();
			$(".rightwrong").show();
			currentQuestion++;
		}
	});

});