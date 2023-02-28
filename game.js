const { Configuration, OpenAIApi } = require("openai");
const configuration = {
    apiKey: "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",
};
const openai = new OpenAI(configuration);

const username = localStorage.getItem("username");

const chatWindow = document.getElementById("chatWindow");
const inputField = document.getElementById("inputField");
const sendButton = document.getElementById("sendButton");

function generateResponse() {
    Console.log("Generating Response");
    const input = inputField.value;
    inputField.value = "";

    if (!input) {
        return;
    }

    const prompt = `${username} ${input}`;

    const completions = async () => {
        const prompt = `${username} ${input}`;

        try {
            const response = await openai.complete({
                engine: "text-davinci-003",
                prompt: prompt,
                maxTokens: 128,
                n: 1,
                stop: ".",
                temperature: 0.9,
            });
            Console.log("Response generated");
            const message = response.data.choices[0].text;
            const newMessage = document.createElement("p");
            newMessage.innerHTML = message;
            chatWindow.appendChild(newMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        } catch (error) {
            console.error(error);
        }
    Console.log("Done");
    };

    completions();
}

sendButton.onclick = generateResponse;

if (username) {
    Console.log("username");
    chatWindow.innerHTML = `Welcome to the game, ${username}!`;
} else {
    const newUsername = prompt("Please enter a username:");
    if (newUsername) {
        localStorage.setItem("username", newUsername);
        location.reload();
    }
}
