import { categoryDetails } from './data.js';
import { courseDetails } from './data.js';



// Render featured courses on the homepage
const featuredCoursesContainer = document.querySelector('.courses-cards-container');

courseDetails.forEach(course => {

        featuredCoursesContainer.innerHTML += `
        
        <div class="course-card w-full h-auto flex flex-col justify-start items-start gap-6 bg-white rounded-md px-4 py-3 cursor-pointer transition-all delay-150 duration-200 ease-in hover:shadow-lg">

                    <div class="course-image w-full h-auto overflow-hidden rounded-md">
                        <img src=${course.image} alt="course image" class="w-full h-auto rounded-md object-cover">
                    </div>

                    <div class="course-details w-full h-auto flex flex-col justify-start items-start gap-4">
                        <div class="tags w-full h-auto flex flex-row justify-start items-center gap-2 flex-wrap">
                            <span class="bg-blue-50 px-4 py-1 rounded-lg font-semibold text-sm w-fit">${course.category}</span>

                            <span class="bg-yellow-50 px-4 py-1 rounded-lg font-semibold text-sm w-fit">${course.levels}</span>
                        </div>
                        <h2 class="font-semibold text-lg w-[80%]">${course.title}</h2>

                        <div class="details-icons w-full h-auto flex flex-row justify-start items-center gap-6 border-b border-slate-200 pb-3">
                            <div class="duration w-fit h-auto flex flex-row justify-start items-center gap-2 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg>
                                </div>

                                <p>${course.duration}</p>
                            </div>

                            <div class="lessons w-fit h-auto flex flex-row justify-start items-center gap-2 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2" /><path d="M6 12h12" /><path d="M10 16h4" /></svg>
                                </div>

                                <p>${course.lessons}</p>
                            </div>
                        </div>

                        <div class="price w-fit h-auto text-blue-800 font-semibold text-2xl">&#8358;${course.price}</div>
                    </div>

                    <a href="course.html" class="button w-full h-auto flex flex-row justify-center items-center gap-2 bg-slate-100 text-blue-800 font-semibold py-2 rounded-md hover:bg-blue-800 hover:text-slate-100 transition-all delay-75 duration-100 ease-in">Enroll</a>
                </div>      
        
        `;
})


// Render category cards on the homepage
const categoryCardsContainer = document.querySelector('.categories-card-container');

categoryDetails.forEach(category => {

    categoryCardsContainer.innerHTML += `
    
    
        <a href="courses.html" class="category-card w-full h-auto flex flex-row justify-start items-center gap-4 bg-blue-50 rounded-md px-4 py-6 cursor-pointer transition-all delay-150 duration-200 ease-in md:flex-col">
                    <div class="icon-container bg-white w-fit h-auto p-8 rounded-md text-blue-800 shadow-sm">
                        ${category.icon}
                    </div>

                    <div class="category-text w-full h-auto flex flex-col justify-start items-start gap-2 text-start md:text-center md:items-center">
                        <p class="font-medium text-slate-700 text-start text-2xl md:text-center">${category.title}</p>
                        <p class="text-start font-semibold text-lg text-slate-600 md:text-center">${category.numberOfCourses} Courses</p>
                    </div>
                </a>
    
    
    
    `

});