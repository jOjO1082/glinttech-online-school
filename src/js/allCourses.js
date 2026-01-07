import { courseDetails } from './data.js';




function renderallCourses(courseDetails) {
    
    const allCoursesContainer = document.getElementById('all-courses-container');

    courseDetails.forEach(eachCourse => {
        
        allCoursesContainer.innerHTML += `
        
            <div class="course-card w-full h-auto flex flex-col justify-start items-start gap-6 bg-white rounded-md border px-4 py-3 cursor-pointer transition-all delay-150 duration-200 ease-in hover:shadow-lg">

                    <div class="course-image w-full h-[200px] md:h-auto overflow-hidden rounded-md relative">
                        <img src=${eachCourse.image} alt="course image" class="w-full h-auto rounded-md object-cover">

                        <span class="bg-yellow-50 px-4 py-1 rounded-lg font-semibold text-sm w-fit absolute top-2 left-2">${eachCourse.levels}</span>
                    </div>

                    <div class="course-details w-full h-auto flex flex-col justify-start items-start gap-4">
                        <div class="tags w-full h-auto flex flex-row justify-start items-center gap-2 flex-wrap">
                            <span class="bg-blue-50 px-4 py-1 rounded-lg font-semibold text-sm w-fit">${eachCourse.category}</span>

                            
                        </div>
                        <h2 class="font-semibold text-lg w-[80%]">${eachCourse.title}</h2>

                        <div class="details-icons w-full h-auto flex flex-row justify-start items-center gap-6 border-b border-slate-200 pb-3">
                            <div class="duration w-fit h-auto flex flex-row justify-start items-center gap-2 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" /></svg>
                                </div>

                                <p>${eachCourse.duration}</p>
                            </div>

                            <div class="lessons w-fit h-auto flex flex-row justify-start items-center gap-2 text-slate-600">
                                <div class="icon-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2" /><path d="M6 12h12" /><path d="M10 16h4" /></svg>
                                </div>

                                <p>${eachCourse.lessons}</p>
                            </div>
                        </div>

                        <div class="price w-fit h-auto text-blue-800 font-semibold text-2xl">&#8358;${eachCourse.price}</div>
                    </div>

                    <a href=coursedetails.html?id=${eachCourse.id} class="button w-full h-auto flex flex-row justify-center items-center gap-2 bg-slate-100 text-blue-800 font-semibold py-2 rounded-md hover:bg-blue-800 hover:text-slate-100 transition-all delay-75 duration-100 ease-in">Enroll</a>
                </div>     
        
        `;



    });



}


renderallCourses(courseDetails);



