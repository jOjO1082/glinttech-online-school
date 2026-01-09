import { blogPosts } from "./data.js";



function renderBlogs(blogPosts){

    

    const blogsContainer = document.querySelector('.post-container')

    if (!blogsContainer) {
        return
    }

    blogsContainer.innerHTML = '';

    blogPosts.forEach(eachPost => {


    blogsContainer.innerHTML += `
    
        <div class="blog-card w-full h-auto flex flex-col justify-start items-center gap-4">
                        <div class="image-container w-full h-[200px] overflow-hidden  rounded-md">
                            <img src=${eachPost.mainImage} alt="" class="hover:scale-105 transition-all delay-100 duration-200 ease-in w-full h-full object-cover">
                        </div>

                        <div class="text-container w-full h-auto flex flex-col justify-start items-start gap-4 pb-4">
                            <div class="category-and-read-time w-full h-auto flex flex-row justify-start items-center gap-2">
                                <div class="category w-fit h-auto text-blue-800 font-medium text-sm">${eachPost.category}</div>
                                <span class="text-sm text-blue-800">|</span>
                                <div class="read-time w-fit h-auto text-blue-800 font-medium text-sm">${eachPost.readTime}</div>
                            </div>

                            <div class="title-and-leader w-full h-auto flex flex-col justify-start items-start gap-1">
                                <a href=blogPostDetails.html?id=${eachPost.id} class="w-[90%] h-auto font-semibold text-slate-700 text-lg hover:text-blue-800 hover:underline">${eachPost.title}</a>
                                <p class="text-slate-600">${eachPost.leader}</p>
                            </div>



                            <div class="author-and-date w-full h-auto flex flex-row justify-start items-center gap-2">
                                <div class="author w-fit h-auto flex flex-row justify-start items-center gap-2">
                                    <div class="author-image w-8 h-8 rounded-full overflow-hidden">
                                        <img src=${eachPost.authorImage} alt="">
                                    </div>

                                    <div class="author-name text-slate-600 test-sm">${eachPost.author}</div>
                                </div>


                                <p class="bg-slate-600 w-1 h-1 rounded-lg"></p>


                                <div class="date text-slate-600 test-sm">${eachPost.date}</div>
                            </div>

                        </div>
                    </div>
    
    `;
})
}

renderBlogs(blogPosts)

