const card_grid = document.querySelector('.grid-container');
const add_button = document.querySelector('.add-button');


function addCard(){
	const newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.innerHTML = 
	`
	<p id="card-title">N/A</p>
	<input id="grade-percent" placeholder="Grade Percentage" type="number"></input>
	<select id="grade-type">
	<option value="assignment">All Tasks Assignment</option>
	<option value="practice">Practice and Preparation</option>
	</select>
	`;
	card_grid.insertBefore(newCard, add_button)
};

