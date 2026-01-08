import { courseDetails } from './data.js';
import { categoryDetails } from './data.js';



// Render all courses
function renderallCourses(courseDetails) {
    
    const allCoursesContainer = document.getElementById('all-courses-container');

    allCoursesContainer.innerHTML = "";

    courseDetails.forEach(eachCourse => {
        
        allCoursesContainer.innerHTML += `
        
            <div class="course-card w-full h-auto flex flex-col justify-start items-start gap-2 bg-white rounded-md border px-3 py-3 cursor-pointer transition-all delay-150 duration-200 ease-in hover:shadow-lg">

                    <div class="course-image w-full h-[200px] md:h-auto overflow-hidden rounded-md relative">
                        <img src=${eachCourse.image} alt="course image" class="w-full h-auto rounded-md object-cover">

                        <span class="bg-yellow-50 px-4 py-1 rounded-lg font-medium text-sm w-fit absolute top-2 left-2">${eachCourse.levels}</span>
                    </div>

                    <div class="course-details w-full h-auto flex flex-col justify-start items-start gap-3">
                        <div class="tags w-full h-auto flex flex-row justify-start items-center gap-2 flex-wrap">
                            <span class="bg-blue-50 px-4 py-1 rounded-lg font-medium text-sm w-fit">${eachCourse.category}</span>

                            
                        </div>
                        <h2 class="font-normal text-md w-[100%]">${eachCourse.title}</h2>

                        <div class="details-icons w-full h-auto flex flex-row justify-start items-center gap-6 border-b border-slate-200 pb-3">
                            <div class="duration w-fit h-auto flex flex-row justify-start items-center gap-2 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg>
                                </div>

                                <p class="duration-count font-medium text-sm">${eachCourse.duration}</p>
                            </div>

                            <div class="lessons w-fit h-auto flex flex-row justify-start items-center gap-1 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2" /><path d="M6 12h12" /><path d="M10 16h4" /></svg>
                                </div>

                                <p class="lessons-count font-medium text-sm">${eachCourse.lessons}</p>
                            </div>
                        </div>

                        <div class="price w-fit h-auto text-blue-800 font-semibold text-lg">&#8358;${eachCourse.price}</div>
                    </div>

                    <a href=coursedetails.html?id=${eachCourse.id} class="button w-full h-auto flex flex-row justify-center items-center gap-2 bg-slate-100 text-blue-800 font-semibold py-2 rounded-md hover:bg-blue-800 hover:text-slate-100 transition-all delay-75 duration-100 ease-in">Enroll</a>
                </div>     
        
        `;



    });



}


renderallCourses(courseDetails);



// Populate categories on the courses page
const allCategoriesContainer = document.querySelector('.actions-links');

if (allCategoriesContainer) {
    allCategoriesContainer.innerHTML = `<button class="w-fit h-auto px-4 py-1 border border-slate-200 rounded-lg bg-blue-800 text-slate-50 font-semibold hover:bg-blue-800 transition-All delay-75 ease-in duration-200">All</button>`;
}

categoryDetails.forEach(category => {

    allCategoriesContainer.innerHTML += `<button class="w-fit h-auto px-4 py-1 border border-slate-200 rounded-lg hover:bg-blue-800 hover:text-slate-50 transition-All delay-75 ease-in duration-200">${category.category}</button>`;


});




// Make Active state on each button clicked

const filterButtons = document.querySelectorAll('.actions-links button');

filterButtons.forEach(buttonClicked => {
     buttonClicked.addEventListener('click', () => {

        filterButtons.forEach(button => button.classList.remove('bg-blue-800', 'text-slate-50', 'font-bold', 'font-semibold', 'text-slate-700'));
        buttonClicked.classList.add('bg-blue-800', 'text-slate-50');
     });

});


// Filter course by category function

function filterCoursesByCategory(category) {

    if(category === "All"){
        renderallCourses(courseDetails);
        return;
    }

   const filteredCourses = courseDetails.filter(course => course.categoryMain === category);

   if(filteredCourses.length === 0){

    const coursesContainer = document.querySelector('.all-courses');

    coursesContainer.innerHTML = `<p class="text-2xl text-slate-600 font-semibold">No courses found</p>`;
    return;
   }



   renderallCourses(filteredCourses);

}




filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent;

        

        filterCoursesByCategory(category);
    });
});





// Filter Course by search input from the User

const searchInput = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', () => {


    if (searchInput.value === "") {
        renderallCourses(courseDetails);
        return;
    } 

    const searchValue = searchInput.value;
    const filteredCourses = courseDetails.filter(course => course.title.toLowerCase().includes(searchValue.toLowerCase()));
    renderallCourses(filteredCourses);

    if(filteredCourses.length === 0){

    const coursesContainer = document.querySelector('.all-courses');

    coursesContainer.innerHTML = `<p class="text-2xl text-slate-600 font-semibold">No Items meets your search</p>`;
    return;
   }
});



// Reveal filter cards on click of Filter button

const resetButton = document.getElementById('reset-button');
const filterButton = document.getElementById('filter-button');
const filterCardsContainer = document.querySelector('.filtering-boxes')

filterButton.addEventListener('click', () => {
    resetButton.classList.remove('hidden')
    resetButton.classList.add('flex')
    filterCardsContainer.classList.remove('hidden', 'md:hidden');
    filterCardsContainer.classList.add('flex')
})

document.addEventListener('click', (userClicksOutside) => {
    const userClickedItems = filterButton.contains(userClicksOutside.target) || resetButton.contains(userClicksOutside.target) || filterCardsContainer.contains(userClicksOutside.target);

    if (!userClickedItems) {
        filterCardsContainer.classList.add('hidden')
        resetButton.classList.add('hidden')
    }
})


// Filter course based on Instructor and level using checkboxes

const levelCheckboxes = document.querySelectorAll('input[type="checkbox"][id="beginner"], input[type="checkbox"][id="intermediate"], input[type="checkbox"][id="advance"]'); const instructorCheckboxes = document.querySelectorAll('input[type="checkbox"][id="otor"], input[type="checkbox"][id="jonathan"], input[type="checkbox"][id="michael"]');


function filteredCourses (){

    const selectedLevels = Array.from(levelCheckboxes).filter(level => level.checked).map(level => level.nextElementSibling.textContent.trim().toLowerCase());

    const selectedInstructors = Array.from(instructorCheckboxes).filter(instructor => instructor.checked).map(instructor => instructor.nextElementSibling.textContent.trim().toLowerCase());


    let filteredCourses = courseDetails;

    if (selectedLevels.length > 0) {
        filteredCourses = filteredCourses.filter(course => selectedLevels.includes(course.levels.toLowerCase()));
    }

    if (selectedInstructors.length > 0) {
        filteredCourses = filteredCourses.filter(course => selectedInstructors.includes(course.tutorName.toLowerCase()));
    }


    if (filteredCourses.length === 0) {
        const coursesContainer = document.querySelector('.all-courses');

        coursesContainer.innerHTML = `<p class="text-2xl text-slate-600 font-semibold">No Items meets your search</p>`;
        return;
    }



    renderallCourses(filteredCourses);


}


[...levelCheckboxes, ...instructorCheckboxes].forEach(checkbox => checkbox.addEventListener('change', filteredCourses));



// Clear checkboxes on click of reset button

resetButton.addEventListener('click', () => {
    [...levelCheckboxes, ...instructorCheckboxes].forEach(checkbox => checkbox.checked = false);
    renderallCourses(courseDetails);

});














