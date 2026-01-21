import { courseDetails } from './data.js';



const params = new URLSearchParams(window.location.search);
const courseId = params.get('id');



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

        const instructorDetailsName = document.getElementById('details-instructor-name');
        const instructorDetailsImage = document.getElementById('details-instructor-image');
        const instructorDetailsCourse = document.getElementById('course');
        const instructorDetailsStudentsCount = document.getElementById('details-student-count');
        const instructorDetailsDocumentsCount = document.getElementById('details-document-count');
        const instructorDetailsBio = document.getElementById('details-instructor-bio');
        
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


        instructorDetailsName.textContent = course.tutorName
        instructorDetailsImage.src = course.tutorImage
        instructorDetailsCourse.textContent = course.title
        instructorDetailsStudentsCount.textContent = course.numberOfStudents
        instructorDetailsDocumentsCount.textContent = course.numberOfDocuments
        instructorDetailsBio.textContent = course.tutorBio

        

        courseInfoDescription.textContent = course.courseInformation.infoDescription
        courseTutorDescription.textContent = course.tutorBio
        whatYouWillLearn.textContent = course.courseInformation.whatYouWillLearnDescription
        numberOfStudents.textContent = course.numberOfStudents
        numberOfDocuments.textContent = course.numberOfDocuments

        cardCatgory.textContent = course.category
        language.textContent = course.language
        cardDuration.textContent = course.duration

        // Show list of what you will learn
        const learnList = document.getElementById('learning-points');

        course.courseInformation.whatYouWillLearn.forEach(item => {
            
            learnList.innerHTML += `

            <li class=""><i class="fa-regular fa-circle-check text-green-600"></i> ${item}</li>
            
            `
            
        });


        // Show list of requirements
        const requirementsList = document.getElementById('requirement-list');

        course.courseInformation.requirements.forEach(item => {

            requirementsList.innerHTML += `
            
            <li><i class="fa-regular fa-circle-check text-green-500"></i> ${item}</li>

            `
        });
})};



// Show related courses on the course details page
const relatedCourses = document.querySelector('.related-courses-cards-container');

const courseCategoryMatches = courseDetails.filter(eachCourse => eachCourse.categoryMain === course.categoryMain && eachCourse.id !== course.id);

if (courseCategoryMatches.length === 0) {
    relatedCourses.innerHTML = `

    <p class="text-2xl text-slate-600 font-semibold">No related courses</p>

    `;
} else {
    courseCategoryMatches.forEach(eachCourse => {

        relatedCourses.innerHTML += `
        

            <a href=coursedetails.html?id=${eachCourse.id} class="button w-[200px] h-auto">

            <div class="related-course-card w-[200px] h-auto flex flex-col justify-start items-start gap-1 bg-white rounded-md">
                            <div class="course-image w-full h-[100px] border rounded-md overflow-hidden ">
                                <img src=${eachCourse.image} alt="course-image" class="w-full h-32 object-cover rounded-t-md">
                            </div>

                            <div class="course-title-and-price w-full h-auto flex flex-col justify-start items-start gap-1 px-4 py-2">
                                <h4 class="text-slate-700 font-semibold text-sm">${eachCourse.title}</h4>
                                <span class="text-blue-800 font-bold">${eachCourse.price}</span>
                            </div>       
                        </div>
            
            </a>
            

        `;

    });
}
