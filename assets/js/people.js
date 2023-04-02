const chatInput = document.querySelector('.chat-input input[type="text"]');
const chatButton = document.querySelector('.chat-input button');
const chatWindow = document.querySelector('.chat-window');

chatButton.addEventListener('click', function() {
	// Get the user's message
	const message = chatInput.value;
	
	// Create a new chat bubble
	const chatBubble = document.createElement('div');
	chatBubble.classList.add('chat-bubble');
	
	// Create a user icon
	const userIcon = document.createElement('div');
	userIcon.classList.add('user-icon');
	
	// Create an image element and set the src attribute to the path of the user's icon
	const userImage = document.createElement('img');
	userImage.src = '/assets/img/abby.png';
	userIcon.appendChild(userImage);
	
	// Create a chat message
	const chatMessage = document.createElement('div');
	chatMessage.classList.add('chat-message');
	
	// Create a paragraph element and set its text content to the user's message
	const messageParagraph = document.createElement('p');
	messageParagraph.textContent = message;
	chatMessage.appendChild(messageParagraph);
	
	// Add the user icon and chat message to the chat bubble
	chatBubble.appendChild(userIcon);
	chatBubble.appendChild(chatMessage);
	
	// Add the chat bubble to the chat window
	chatWindow.appendChild(chatBubble);
	
	// Clear the input field
	chatInput.value = '';
});
