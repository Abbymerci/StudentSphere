// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCvhEDgOdLWyFhDXQ8Zpsx9f6VSId0xeH8",
    authDomain: "morganhack-6e235.firebaseapp.com",
    projectId: "morganhack-6e235",
    storageBucket: "morganhack-6e235.appspot.com",
    messagingSenderId: "601463112033",
    appId: "1:601463112033:web:52a4088c5f30b073040520",
    measurementId: "G-S40WZ2KWSQ"
};
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// Authentication reference
const auth = firebase.auth();

// Sign in as anonymous user
auth.signInAnonymously().catch(function(error) {
	console.log(error.code, error.message);
});

// Send message
document.getElementById("send-btn").addEventListener("click", function(event) {
	event.preventDefault();
	const message = document.getElementById("message-input").value;
	const user = "User 1"; // Replace with current user

	// Add message to Firestore
	db.collection("messages").add({
		message: message,
		user: user,
		timestamp: firebase.firestore.FieldValue.serverTimestamp()
	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});

	// Clear input field
	document.getElementById("message-input").value = "";
});

// Listen for new messages
db.collection("messages")
	.orderBy("timestamp")
	.onSnapshot(function(querySnapshot) {
		const chatMessages = document.querySelector
		(".chat-messages");
		chatMessages.innerHTML = "";

		querySnapshot.forEach(function(doc) {
			const message = doc.data().message;
			const user = doc.data().user;
			const timestamp = doc.data().timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

			// Create message element
			const messageDiv = document.createElement("div");
			messageDiv.classList.add("message");

			// Add user and timestamp to message
			const messageHeader = document.createElement("h4");
			messageHeader.textContent = `${user} (${timestamp})`;
			messageDiv.appendChild(messageHeader);

			// Add message content to message
			const messageContent = document.createElement("p");
			messageContent.textContent = message;
			messageDiv.appendChild(messageContent);

			// Add message element to chat messages
			chatMessages.appendChild(messageDiv);
		});

		// Scroll to bottom of chat messages
		chatMessages.scrollTop = chatMessages.scrollHeight;
	});
