
const typingElement = document.getElementById('typing-animation');

function resetTypingAnimation() {
    typingElement.style.animation = 'none'; 
    typingElement.offsetHeight; 
    typingElement.style.animation = 'typing 2s steps(30) 1, blinkCaret 0.75s step-end infinite';  
}


setInterval(resetTypingAnimation, 5000);
