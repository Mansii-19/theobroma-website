
document.getElementById("orderOnlineBtn").addEventListener("click", () => {
    alert("Online ordering coming soon 🍰");
});

document.getElementById("searchBtn").addEventListener("click", () => {
    let item = prompt("Search for cakes, pastries, brownies...");
    if (item) {
        alert("You searched for: " + item);
    }
});


const aboutSection = document.getElementById("aboutSection");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        aboutSection.classList.add("show");
    }
});

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert(card.innerText + " clicked!");
    });
});

document.getElementById("knowMoreBtn").addEventListener("click", () => {
    alert("More details coming soon!");
});

document.getElementById("knowMoreBtn").addEventListener("click", () => {
    alert("Cake and Tea section coming soon!");
});
const products = document.querySelectorAll(".product-card");

products.forEach(product => {
    product.addEventListener("click", () => {
        alert(product.innerText.trim());
    });
});

document.getElementById("signupBtn").addEventListener("click", function () {

    const email = document.getElementById("newsletterEmail").value.trim();

    if (email === "") {
        alert("Please enter your email address");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Thank you for subscribing!");

    document.getElementById("newsletterEmail").value = "";
});

document.getElementById("newsletterEmail").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.getElementById("signupBtn").click();
    }
});

