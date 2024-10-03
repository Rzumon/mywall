document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;
    
    if (message) {
        fetch('/add-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayMessages(data.messages);
                messageInput.value = ""; // Clear input
            }
        });
    }
});

function displayMessages(messages) {
    const messagesList = document.getElementById("messagesList");
    messagesList.innerHTML = ""; // Clear the existing messages
    messages.forEach(msg => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message-item");
        messageDiv.innerText = msg;
        messagesList.appendChild(messageDiv);
    });
}

// Fetch and display messages on page load
fetch('/messages')
    .then(response => response.json())
    .then(data => displayMessages(data.messages));
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;
    
    if (message) {
        fetch('/add-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayMessages(data.messages);
                messageInput.value = ""; // Clear input
            }
        });
    }
});

function displayMessages(messages) {
    const messagesList = document.getElementById("messagesList");
    messagesList.innerHTML = ""; // Clear the existing messages
    messages.forEach(msg => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message-item");
        messageDiv.innerText = msg;
        messagesList.appendChild(messageDiv);
    });
}

// Fetch and display messages on page load
fetch('/messages')
    .then(response => response.json())
    .then(data => displayMessages(data.messages));
