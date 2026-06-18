document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!");
});


document.getElementById("course").addEventListener("change", function () {
    console.log("Selected:", this.value);
});

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted");
});

document.getElementById("searchBox").addEventListener("input", function () {
    console.log("Typing:", this.value);
});

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("John", sayBye);


function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

const throttledScroll = throttle(() => {
    console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", throttledScroll);