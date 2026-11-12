
const form = document.getElementById("registrationForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const college = document.getElementById("college").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = document.getElementById("year").value;
    const event = document.getElementById("event").value;

    if (
        !name ||
        !email.includes("@") ||
        !/^\d{10}$/.test(phone) ||
        !gender ||
        !college ||
        !department ||
        !year ||
        !event
    ) {

        msg.textContent = "Please fill all fields correctly.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Registration successful! " + name +
        " | " + event + " | " + college;

    msg.style.color = "green";

});

form.addEventListener("reset", function() {

    msg.textContent = "";

});
