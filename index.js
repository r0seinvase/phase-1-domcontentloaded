document.addEventListener("DOMContentLoaded", () => {
    const replacement = document.querySelector('p')
    replacement.innerText = 'This is really cool!'
    console.log('The DOM has loaded');

});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);