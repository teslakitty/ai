var responses = [
	"Hello!",
	"How can I assist you?",
	"I'm sorry, I don't understand.",
	"Can you please provide more information?",
	"Thank you for contacting us.",
	"my name is catai"
];

function generateResponse(message) {
	// You can use if/else statements, switch/case statements, or other logic to determine the appropriate response based on the user's message
	var responseIndex = Math.floor(Math.random() * responses.length);
	return responses[responseIndex];
}

document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();
	var message = document.getElementById('message').value;
	var response = generateResponse(message);
	document.getElementById('response').innerHTML = response;
	document.getElementById('message').value = "";
});
