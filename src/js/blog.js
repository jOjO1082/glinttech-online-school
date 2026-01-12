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



// Blog Details

const params = new URLSearchParams(window.location.search);
const courseId = params.get('id');


const blogDetailsObject = blogPosts.find(blogId => blogId.id === Number(courseId))


if (!blogDetailsObject) {
    // alert("Not found")
} else{
    document.addEventListener('DOMContentLoaded', () => {

        // Blog Main
        const blogMainImage = document.getElementById('main-image');
        const blogTitle = document.getElementById('main-title');
        const blogDate = document.getElementById('post-date');
        const blogLeader = document.getElementById('leader-text');
        const blogMainText = document.getElementById('main-text');
        const blogQuote = document.getElementById('quote');
        const blogSupportImage = document.getElementById('support-image');
        const blogSupportTitle = document.getElementById('support-title');
        const nextParagraph = document.getElementById('next-paragraph');
        const nextParagraphTwo = document.getElementById('next-paragraphTwo');
        const nextParagraphThree = document.getElementById('next-paragraphThree');
        const blogListContianer = document.querySelector('.list-container');

        // Blog Author
        const blogAuthorImage = document.getElementById('author-image');
        const blogAuthor = document.getElementById('author-name');
        const authorBio = document.getElementById('author-bio');


        const blogCategory = document.getElementById('category');
        const blogTags = document.getElementById('tags');
        
        
        // Blog Main
        blogMainImage.src = blogDetailsObject.mainImage;
        blogTitle.textContent = blogDetailsObject.title;
        blogDate.textContent = blogDetailsObject.date;
        blogLeader.textContent = blogDetailsObject.leader;
        blogMainText.textContent = blogDetailsObject.mainContent.bodyOne;
        blogQuote.textContent = blogDetailsObject.mainContent.quote.theQuote;
        blogSupportImage.src = blogDetailsObject.bodyImages[0];
        blogSupportTitle.textContent = blogDetailsObject.subTitle;
        nextParagraph.textContent = blogDetailsObject.mainContent.bodyTwo;
        nextParagraphTwo.textContent = blogDetailsObject.mainContent.bodyThree;
        nextParagraphThree.textContent = blogDetailsObject.mainContent.bodyFour;

        // Blog Author
        blogAuthorImage.src = blogDetailsObject.authorImage;
        blogAuthor.textContent = blogDetailsObject.authorName;
        authorBio.textContent = blogDetailsObject.authorBio;
        blogCategory.textContent = blogDetailsObject.category;
        blogTags.textContent = blogDetailsObject.tags;
    })


    // Show related post

    const relatedPostContainer = document.querySelector('.related-posts-container');

    

    const relatedPosts = blogPosts.filter(eachPost => eachPost.category.toLowerCase() === blogDetailsObject.category.toLowerCase() && eachPost.id !== blogDetailsObject.id);

    

    if (relatedPosts.length === 0) {
        relatedPostContainer.innerHTML = `

        <p class="text-lg text-slate-600 font-semibold">No related posts</p>

        `;
    } else {
        relatedPostContainer.innerHTML = ``;

        relatedPosts.forEach(eachPost => {

            relatedPostContainer.innerHTML += `
            
            <div class="related-post w-full h-auto flex flrex-row justify-start items-center gap-4">
                            <div class="image-container w-40 h-28 overflow-hidden rounded-lg">
                                 <img src=${eachPost.mainImage} alt="" class="w-full h-full object-cover">
                            </div>
                            <div  class="title-date w-fit h-auto flex flex-col justify-start items-start gap-2 hover:text-blue-800">
                                <a href="blogPostDetails.html?id=${eachPost.id}" class="font-medium text-slate-700 hover:text-blue-800 hover:underline">How to make a good design work</a>
                                <p class="text-base text-slate-600"><i class="fa-regular fa-calendar text-blue-800"></i>${eachPost.date}</p>
                            </div>
                        </div>

            `;

        })
    }


     
}




 // Show blogListContianer
    function showBlogCategoriesButtons(blogPosts){
         const blogCategoryButtonsContainer = document.querySelector('.blog-category-links')

         if (blogCategoryButtonsContainer) {
            blogCategoryButtonsContainer.innerHTML = `<button class="shrink-0 h-auto px-4 py-1 bg-blue-800 rounded-lg text-slate-50 font-medium border">All</button>`;
         }

         const categories = [...new Set(blogPosts.map(cat => cat.category).filter(Boolean))]
         console.log(categories)
     
         categories.forEach(eachCategory => {

            blogCategoryButtonsContainer.innerHTML += `<button class="shrink-0 h-auto px-4 py-1  rounded-lg font-normal border border-slate-200 hover:bg-blue-800 transition-all duration-100 delay-75 ease-in hover:text-slate-50">${eachCategory}</button>`;
         })
    } 
showBlogCategoriesButtons(blogPosts)



// Change active state for blog category
const blogCategoryButtonsContainer = document.querySelectorAll('.blog-category-links button')


blogCategoryButtonsContainer.forEach(eachButton => {
    eachButton.addEventListener('click', () =>{
        blogCategoryButtonsContainer.forEach(button => {
            button.classList.remove('bg-blue-800', 'text-slate-50', 'font-medium')
            eachButton.classList.add('bg-blue-800', 'text-slate-50', 'font-medium')
        })
        
    })
})



// Filter Blog post by Category

const categorySelected = document.querySelectorAll('.blog-category-links button')

categorySelected.forEach(categoryClicked => {
    categoryClicked.addEventListener('click', () => {

        const featuredContainer = document.querySelector('.featured-story-container')


        if (categoryClicked.textContent === 'All') {
            renderBlogs(blogPosts)
            featuredContainer.classList.remove('hidden')
        } else{
            featuredContainer.classList.add('hidden')

            const filteredPosts =  blogPosts.filter(everyPost => everyPost.category === categoryClicked.textContent);

            renderBlogs(filteredPosts)
        }

        
        

    })
})


// Filter by Search Input

const blogPageSearchInput = document.querySelector('.searchbox input')

blogPageSearchInput.addEventListener('input', () => {

    const featuredContainer = document.querySelector('.featured-story-container')

    if (blogPageSearchInput.value === '') {
        renderBlogs(blogPosts)
        featuredContainer.classList.remove('hidden')
    } else{
        featuredContainer.classList.add('hidden')
    }
    
    const userInput = blogPageSearchInput.value.toLowerCase();
    const searchedFilterBlogPosts = blogPosts.filter(eachPost => eachPost.title.toLowerCase().includes(userInput))



    renderBlogs(searchedFilterBlogPosts)
})


