import { courseDetails } from './data.js';

console.log(courseDetails);


const params = new URLSearchParams(window.location.search);
const courseId = params.get('id');

console.log(courseId);


const course = courseDetails.find(c => c.id === Number(courseId));

if (!course) {
    console.error('Course not found');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const courseImage = document.getElementById('course-image');
        const courseTitle = document.getElementById('title');
        const courseCategory = document.getElementById('category');
        const courseDuration = document.getElementById('duration');
        const courseRequirementDesc = document.getElementById('requirements-description');
        const coursePrice = document.getElementById('course-price');
        const courseHeroDescription = document.getElementById('short-description');
        const courseTutorImage = document.getElementById('instructor-image');
        const courseTutorName = document.getElementById('instructor-name');
        const courseInfoDescription = document.getElementById('course-description-text1');    
        const courseTutorDescription = document.getElementById('instructor-bio');
        const whatYouWillLearn = document.getElementById('what-you-will-learn-description');
        const numberOfStudents = document.getElementById('student-count');
        const numberOfDocuments = document.getElementById('document-count');
        const language = document.getElementById('language');
        const cardDuration = document.getElementById('card-duration');
        const cardCatgory = document.getElementById('card-category');
        const coursePaymentLink = document.getElementById('link');

        
        coursePaymentLink.href = course.link;
        courseImage.src = course.image;
        courseTitle.textContent = course.title
        courseCategory.textContent = course.category
        courseDuration.textContent = course.duration
        coursePrice.textContent = course.price
        courseRequirementDesc.textContent = course.courseInformation.requirementsDescription
        courseHeroDescription.textContent = course.heroDescription
        courseTutorImage.src = course.tutorImage
        courseTutorName.textContent = course.tutorName
        courseInfoDescription.textContent = course.courseInformation.infoDescription
        courseTutorDescription.textContent = course.tutorBio
        whatYouWillLearn.textContent = course.courseInformation.whatYouWillLearnDescription
        numberOfStudents.textContent = course.numberOfDocuments
        numberOfDocuments.textContent = course.numberOfDocuments

        cardCatgory.textContent = course.category
        language.textContent = course.language
        cardDuration. textContent = course.duration
})}