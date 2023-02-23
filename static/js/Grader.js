const Colors = {
	Green: "rgb(0,255,0)",
	Blue: "rgb(0,0,255)",
	Red: "rgb(255,0,0)",
	Yellow: "rgb(236, 255, 0)",
	Orange: "rgb(255, 50, 0)",
	Dev: "linear-gradient(45deg, #ff00e6, #2cfffb)"
}


function CalculateAll() {
	var calculations = [];
	var weights = [];
	console.clear();
	const grade_values = document.querySelectorAll("#grade-percent")

	for (let i = 0; i < grade_values.length; i++) {
		var percent = parseInt(grade_values[i].value)
		const parent_element = grade_values[i].parentNode;
		console.log(`Grade ID: ${i}'s Value is: ${percent.toString()}`);

		if (percent >= 90) {
			var weight;
			console.log(`Grade ID: ${i} is considered an A`)
			var grade_title = parent_element.querySelector("#card-title")
			grade_title.innerHTML = `A`;
			grade_title.style.color = Colors.Green;
			var options = parent_element.querySelector("#grade-type");
			var worth_value = options.value;
			console.log(worth_value);
			if (worth_value.toString() === "assignment") {
				weight = 90;
				calculations.push(percent * parseInt(weight))
				weights.push(weight)
				console.log(calculations)
				console.log(weights)
			} else if (worth_value.toString() === "practice") {
				weight = 10;
				calculations.push(percent * parseInt(weight))
				console.log(calculations)
				weights.push(weight)
				console.log(weights)
			}


		} else if (percent >= 80 && percent <= 89) {
			console.log(`Grade ID: ${i} is considered an B`)
			var grade_title = parent_element.querySelector("#card-title")
			grade_title.innerHTML = `B`;
			grade_title.style.color = Colors.Blue;
			var options = parent_element.querySelector("#grade-type");
			var worth_value = options.value;
			console.log(worth_value);
			if (worth_value.toString() === "assignment") {
				weight = 90;
				calculations.push(percent * parseInt(weight))
				weights.push(weight)
				console.log(calculations)
				console.log(weights)
			} else if (worth_value.toString() === "practice") {
				weight = 10;
				calculations.push(percent * parseInt(weight))
				console.log(calculations)
				weights.push(weight)
				console.log(weights)
			}

		} else if (percent >= 70 && percent <= 79) {
			var grade_title = parent_element.querySelector("#card-title")
			grade_title.innerHTML = `C`;
			grade_title.style.color = Colors.Yellow;
			console.log(`Grade ID: ${i} is considered an C`)
			var options = parent_element.querySelector("#grade-type");
			var worth_value = options.value;
			console.log(worth_value);
			if (worth_value.toString() === "assignment") {
				weight = 90;
				calculations.push(percent * parseInt(weight))
				weights.push(weight)
				console.log(calculations)
				console.log(weights)
			} else if (worth_value.toString() === "practice") {
				weight = 10;
				calculations.push(percent * parseInt(weight))
				console.log(calculations)
				weights.push(weight)
				console.log(weights)
			}

		} else if (percent >= 60 && percent <= 69) {
			var grade_title = parent_element.querySelector("#card-title")
			grade_title.innerHTML = `D`;
			grade_title.style.color = Colors.Orange;
			console.log(`Grade ID: ${i} is considered an D`)
			var options = parent_element.querySelector("#grade-type");
			var worth_value = options.value;
			console.log(worth_value);
			if (worth_value.toString() === "assignment") {
				weight = 90;
				calculations.push(percent * parseInt(weight))
				weights.push(weight)
				console.log(calculations)
				console.log(weights)
			} else if (worth_value.toString() === "practice") {
				weight = 10;
				calculations.push(percent * parseInt(weight))
				console.log(calculations)
				weights.push(weight)
				console.log(weights)
			}

		} else if (percent <= 60) {
			var grade_title = parent_element.querySelector("#card-title")
			grade_title.innerHTML = `F`;
			grade_title.style.color = Colors.Red;
			console.log(`Grade ID: ${i} is considered an F`)
			var options = parent_element.querySelector("#grade-type");
			var worth_value = options.value;
			console.log(worth_value);
			if (worth_value.toString() === "assignment") {
				weight = 90;
				calculations.push(percent * parseInt(weight))
				weights.push(weight)
				console.log(calculations)
				console.log(weights)
			} else if (worth_value.toString() === "practice") {
				weight = 10;
				calculations.push(percent * parseInt(weight))
				console.log(calculations)
				weights.push(weight)
				console.log(weights)
			}

		}



	}

	let sum_c = 0;
	let sum_w = 0;

	for (let i = 0; i < calculations.length; i++) {
		sum_c += calculations[i];
	}

	for (let i = 0; i < weights.length; i++) {
		sum_w += weights[i];
	}


	var overall_grade = Math.round(((sum_c) / sum_w) * 10) / 10
	console.log(`${overall_grade}%`);

	if (overall_grade > 0) {
		var results_text = document.querySelector("#overall-grade-text");
		var results_progress = document.querySelector(".progress");
		var message_text = document.querySelector("#message");
		var results_box = document.querySelector(".results-box");

		if (window.screen.width === 750 && window.screen.height === 1334) {
			results_box.style.top = '60vw';
		} 
		else if(window.screen.width === 320 && window.screen.height === 568) {
			results_box.style.top = '20vw';
		}


		if (overall_grade > 1000000000000) {
			results_text.innerHTML = "S++++? What??";
			results_progress.style.width = "100%"
			results_progress.style.backgroundImage = Colors.Dev;
			message_text.innerHTML = `Wow, ok. ${overall_grade}%.`
			message_text.style.fontSize = "40px"
		} else if (overall_grade > 100) {
			results_text.innerHTML = "A+++? What??";
			results_progress.style.width = "100%"
			results_progress.style.backgroundImage = Colors.Dev;
			message_text.innerHTML = `Wow, ok. ${overall_grade}%.`
		}
		//A
		else if (overall_grade >= 90) {
			results_text.innerHTML = "A";
			results_progress.style.width = overall_grade.toString() + "%"
			results_progress.style.backgroundColor = Colors.Green;
			results_progress.style.backgroundImage = "None";
			message_text.innerHTML = `Congrats your overall grade is ${overall_grade}%!`
		}
		//B
		else if (overall_grade >= 80 && overall_grade <= 89) {
			results_text.innerHTML = "B";
			results_progress.style.width = overall_grade.toString() + "%"
			results_progress.style.backgroundColor = Colors.Blue;
			results_progress.style.backgroundImage = "None";
			message_text.innerHTML = `Congrats your overall grade is ${overall_grade}%!`

		}
		//C
		else if (overall_grade >= 70 && overall_grade <= 79) {
			results_text.innerHTML = "C";
			results_progress.style.width = overall_grade.toString() + "%"
			results_progress.style.backgroundColor = Colors.Yellow;
			results_progress.style.backgroundImage = "None";
			message_text.innerHTML = `Congrats your overall grade is ${overall_grade}%!`
		}
		//D
		else if (overall_grade >= 60 && overall_grade <= 69) {
			results_text.innerHTML = "D";
			results_progress.style.width = overall_grade.toString() + "%"
			results_progress.style.backgroundColor = Colors.Orange;
			results_progress.style.backgroundImage = "None";
			message_text.innerHTML = `Congrats your overall grade is ${overall_grade}%!`


		}
		//F
		else if (overall_grade < 60) {
			results_text.innerHTML = "F";
			results_progress.style.width = overall_grade.toString() + "%"
			results_progress.style.backgroundColor = Colors.Red;
			message_text.innerHTML = `Congrats your overall grade is ${overall_grade}%!`
			results_progress.style.backgroundImage = "None";
		}
	}
}


function closeResults() {
	var results = document.querySelector(".results-box");
	results.style.top = '-200vw'
}