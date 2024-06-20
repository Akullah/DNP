document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".btnlogin-popup");
    const iconClose = document.querySelector(".icon-close");
  
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const documentType = document.getElementById("personal-account");
    const uploadDoc = document.getElementById("document");
    const pages = document.getElementById("pages");
    const services = document.getElementById("dropdown");
    const bio = document.getElementById("bio");
    const form = document.getElementById("form");

    // Function to send an email using the Email API
    function sendEmail() {
        const bodyMessage = `
            First Name: ${firstName.value}<br> 
            Last Name: ${lastName.value}<br>
            Email: ${email.value}<br> 
            Account Type: ${documentType.value}<br> 
            Document Type: ${uploadDoc.value}<br> 
            Pages: ${pages.value}<br> 
            Services: ${services.value}<br> 
            Bio: ${bio.value}
        `;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "dnpnursing1@gmail.com",
            Password: "A5A6DDB6D5D9F8594309D7F607DCF769DC65",
            To: "dnpnursing1@gmail.com",
            From: "dnpnursing1@gmail.com",
            Subject: `${documentType.value} Submission`,
            Body: bodyMessage,
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        title: "Success",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "There was an error sending the message.",
                        icon: "error"
                    });
                }
            }
        );
    }

    // Attach event listener to form submit button
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        sendEmail(); // Send email when form is submitted
    });

    // Register link event listener
    if (registerLink && wrapper) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    }

    // Login link event listener
    if (loginLink && wrapper) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    }

    // Button popup event listener
    if (btnPopup && wrapper) {
        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
        });
    }

    // Close icon event listener
    if (iconClose && wrapper) {
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    }
});
