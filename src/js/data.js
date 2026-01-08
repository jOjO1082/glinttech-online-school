// All course details data
export const courseDetails = [
    {
        id: 1,
        image: 'images/development.jpg',
        category: 'Web Development',
        categoryMain: 'Development',
        title: 'Become a Certified Web Designer',
        duration: '2h 30m',
        levels: 'Beginner',
        lessons: '12',
        numberOfStudents: '123',
        numberOfDocuments: '32',
        price: '10,000',
        language: 'English',
        featured: false,
        heroDescription: 'Learn the fundamentals of web design and development with this comprehensive course.',
        tutorImage: 'images/portrait.jpg',
        tutorName: 'Jonathan Joseph',
        tutorBio:  'My name is Jonathan',
        courseInformation: {
            infoDescription: 'This course covers HTML, CSS, JavaScript, and responsive design principles to help you create stunning websites.',
            whatYouWillLearn: [
                'HTML5 and CSS3 basics',
                'JavaScript fundamentals',
                'Responsive design techniques',
                'Creating interactive web elements',
                'Building a portfolio website'
            ],
            requirements: [
                'Basic knowledge of web development',
                'Basic knowledge of HTML, CSS, and JavaScript',
                'Basic knowledge of responsive design'
            ],
            requirementsDescription: 'No prior experience is required, but a basic understanding of web development concepts will be helpful.',
            whatYouWillLearnDescription: 'It will site here'
        },

        link : 'https://houseplug.netlify.app/'   


    },

    {
        id: 2,
        image: 'images/development.jpg',
        category: 'Graphic Design',
        categoryMain: 'Design',
        title: 'Mastering Adobe Illustrator',
        duration: '2h 30m',
        lessons: '12',
        levels: 'Beginner',
        price: '5,000',
        featured: false,
        heroDescription: 'Learn the fundamentals of Adobe Illustrator with this comprehensive course.',
        tutorImage: 'src/images/tutor2.jpg',
        tutorName: 'Otor Peter',
        courseInformation: {
            infoDescription: 'This course covers the basics of Adobe Illustrator, including creating vector graphics, text, and shapes.',
            whatYouWillLearn: [
                'Creating vector graphics',
                'Using the pen tool',
                'Working with text and shapes',
                'Working with layers and groups',               
            ],
            requirements: [
                'Basic knowledge of Adobe Illustrator',
                'Basic knowledge of vector graphics',
                'Basic knowledge of text and shapes'
            ],
            requirementsDescription: 'No prior experience is required, but a basic understanding of Adobe Illustrator concepts will be helpful.',
        }
    },

    {
        id: 3,
        image: 'images/development.jpg',
        category: 'Digital Marketing',
        categoryMain: 'Marketing',
        title: 'Digital Marketing Fundamentals',
        duration: '2h 30m',
        lessons: '12',
        levels: 'Beginner',
        price: '5,000',
        featured: false,
        heroDescription: 'Learn the fundamentals of digital marketing with this comprehensive course.',
        tutorImage: 'src/images/tutor3.jpg',
        tutorName: 'Michael Ogbu',
        courseInformation: {
            infoDescription: 'This course covers SEO, social media marketing, email marketing, and content marketing strategies to help you grow your online presence.',
            whatYouWillLearn: [
                'Search engine optimization (SEO)',
                'Social media marketing',
                'Email marketing',
                'Content marketing',                
            ],
            requirements: [
                'Basic knowledge of SEO',
                'Basic knowledge of social media marketing',
                'Basic knowledge of email marketing',
                'Basic knowledge of content marketing'
            ],
            requirementsDescription: 'No prior experience is required, but a basic understanding of digital marketing concepts will be helpful.',
        }
    },

    {
        id: 4,
        image: 'images/development.jpg',
        category: 'Photography',
        categoryMain: 'Photography',
        title: 'Photography Basics for Beginners',
        duration: '2h 30m',
        lessons: '12',
        levels: 'Beginner',
        price: '10,000',
        featured: false,
        heroDescription: 'Learn the basics of photography with this comprehensive course.',
        tutorImage: 'src/images/tutor4.jpg',
        tutorName: 'Jonathan Joseph',
        courseInformation: {
            infoDescription: 'This course covers the basics of photography, including camera settings, composition, and lighting techniques.',
            whatYouWillLearn: [ 
                'Camera settings',                
                'Composition principles',
                'Lighting techniques',
                'Using a tripod',
                'Using a flash',
                'Using a lens',
                'Using a camera',
            ],
            requirements: [
                'Basic knowledge of photography',
                'Basic knowledge of camera settings',
                'Basic knowledge of composition principles',
                'Basic knowledge of lighting techniques'
            ],
            requirementsDescription: 'No prior experience is required, but a basic understanding of photography concepts will be helpful.',
        }
    }
      
];


// All Category Details Data
export const categoryDetails = [
    {
        id: 1,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-source-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" /><path d="M6 5l-2 2l2 2" /><path d="M10 9l2 -2l-2 -2" /></svg>',
        category: 'Web Development',
        title: 'Web Development',
        numberOfCourses: 18,
    },

    {
        id: 2,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-icons text-blue-800"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M2.5 21h8l-4 -7l-4 7" /><path d="M14 3l7 7" /><path d="M14 10l7 -7" /><path d="M14 14h7v7h-7l0 -7" /></svg>',
        category: 'Graphic Design',
        title: 'Graphic Design',
        numberOfCourses: 12,
    },

    {
        id: 3,  
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-loom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" /><path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" /><path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" /><path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" /></svg>',
        category: 'Photography',
        title: 'Photography',
        numberOfCourses: 10,
    },

    {
        id: 4,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>',
        category: 'Marketing',
        title: 'Digital Marketing',
        numberOfCourses: 8,
    }
];


// All Turutor Details Data
export const tutorDetails = [
    {
        id: 1,  
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'John Doe',
        rating: 4.5,
        courseCount: 12,
        title: 'Senior Web Developer'
    },

    {
        id: 2,  
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'Jane Smith',
        rating: 4.8,
        courseCount: 8,    
        title: 'Digital Marketing Expert'            
    },

    {
        id: 3,  
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'John Doe',
        rating: 4.5,
        courseCount: 12,   
        title: 'Senior Web Developer'             
    },

    

]
   


// All blog data

export const blogDetails = [
    
]


// All FAQ data

export const faqDetails = [
    {
        id: 1,
        question: 'What services do you offer?',
        answer: 'We specialize in web design, UI/UX design, front-end development, and digital product design. This includes landing pages, portfolio websites, course platforms, dashboards, and scalable web solutions.'
    },

    {
        id: 2,
        question: 'Who do you work with?',
        answer: 'We work with individuals, startups, businesses, institutions, and creators. Whether you’re just starting out or looking to improve an existing product, we tailor our approach to your goals.'
    },

    {
        id: 3,
        question: 'Do you offer discounts for students and professionals?',
        answer: 'Yes, we offer discounts to students and professionals. Please contact us for more information.'
    },

    {
        id: 4,
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. Small projects may take 1–2 weeks, while larger or more custom solutions can take several weeks. Clear timelines are agreed upon before work begins.'
    },


]