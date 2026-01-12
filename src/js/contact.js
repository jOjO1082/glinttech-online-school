import { faqDetails } from './data.js';



// Render faq details on the contact page
const faqContainer = document.querySelector('.faqs');

faqDetails.forEach(eachFaq => {
    
    faqContainer.innerHTML += `

    <div class="faq-question-and-answers w-full h-auto flex flex-col justify-start items-start gap-4">
                        <div class="question w-full h-auto flex flex-row justify-between items-center px-4 py-4 bg-white rounded-lg cursor-pointer hover:text-blue-800">
                            <h3 class="text-slate-700 font-bold">${eachFaq.question}</h3>

                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        <div class="answer w-full h-auto px-4 py-4 text-slate-700 hidden ">
                            <p>${eachFaq.answer}</p>
                        </div>
                    </div>
    
    
    
    `;
})


// Add a click event to each question
const faqQuestions = document.querySelectorAll('.question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
    })
})


// Make contack form work

const contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Build Link

    const subject = encodeURIComponent(`New Message from ${name}`)
    const body = encodeURIComponent(
        `Name: ${name} \n Email: ${email} \n\n Message: ${message}`
    );

    // Replace link
    const mailtoLink = `mailto:ikpejonathanjoseph@gmail.com?subject=${subject}&body=${body}`;

    // Ope default email client

    window.location.href = mailtoLink
})