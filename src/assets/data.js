const identity = {
    name: "Yasaman Parhizkar",
    image: "Profile-pic"
};
const data = {
    NavBar: {
        ...identity,
        links: ["Home", "About", "Portfolio", "Training", "Achievement", "Contact"]
    },
    Home: {
        introduction: "I am a data scientist who looks for solutions to complex problems using any mathematical method I know, including graph analysis, statistics, deep learning, and optimization.",
        resumeLink: "https://yasamanparhizkar.github.io/portfolio/assets/resume.pdf",
        typedElement: ["Yasaman Parhizkar", "Data Scientist", "Machine Learning Engineer", "Deep Learning Engineer", "Graph Analyst", "Open Source Enthusiast"]
    },
    About: {
        ...identity,
        NavTabs: [{
            id: "story",
            name: "About",
            placement: "top"
        }, {
            id: "skill",
            name: "Skill",
            placement: "bottom"
        }, {
            id: "education",
            name: "Education",
            placement: "top"
        }],
        about: {
            "tech-stats": "Data Science, Deep Learning, Machine Learning",
            bio: "A data enthusiast eager to contribute to team success through formulating innovative solutions and implementing them according to common software development standards and consideration. Able to communicate and work effectively with software engineers, scientists, business managers, vendors and customers",
            "IDE, Editors & Tools": ["Python3", "Pytorch", "VS Code", "Spark", "HDFS", "Airflow", "Slurm"]
        },
        skills: [
            [{
                skill: "Machine Learning",
                progress: "100"
            }, {
                skill: "Deep Learning",
                progress: "100"
            }, {
                skill: "Data ETL",
                progress: "100"
            }, {
                skill: "Graph Analysis",
                progress: "100"
            }, {
                skill: "Statistics",
                progress: "100"
            }],
            [{
                skill: "Python",
                progress: "100"
            }, {
                skill: "Pytorch",
                progress: "100"
            }, {
                skill: "Git/GitHub",
                progress: "100"
            }, {
                skill: "Clean Code Standards",
                progress: "100"
            }]
        ],
        education: [{
            animationClass: "Right left",
            textAlignment: "right",
            degree: "Master of Applied Science (M.A.Sc.), Computer Engineering",
            college: "York University",
            duration: "2021 - 2023",
            percentage: "GPA: 9.0/9.0"
        }, {
            animationClass: "Left right",
            textAlignment: "left",
            degree: "Bachelor of Science (B.Sc.), Electrical Engineering",
            college: "University of Tehran",
            duration: "2016 - 2021",
            percentage: "GPA: 17.70/20.0"
        }]
    },
    Quote: [{
        author: "Albert Einstein",
        quote: "One may say the eternal mystery of the world is its comprehensibility."
    }, {
        author: "Douglas Adams",
        quote: "Technology is a word that describes something that doesn\u2019t work yet."
    }, {
        author: "Albert Einstein",
        quote: "Logic will get you from A to B. Imagination will take you everywhere."
    }, {
        author: "Jared Diamond",
        quote: "Technology has to be invented or adopted."
    }, {
        author: "Laurie Anderson",
        quote: "Technology is the campfire around which we tell our stories."
    }, {
        author: "Cory Doctorow",
        quote: "This is why I loved technology: if you used it right, it could give you power and privacy."
    }, {
        author: "Elbert Hubbard",
        quote: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man."
    }, {
        author: "Volker Grassmuck",
        quote: "The ultimate promise of technology is to make us master of a world that we command by the push of a button."
    }, {
        author: "Arthur C. Clarke",
        quote: "Any sufficiently advanced technology is equivalent to magic."
    }, {
        author: "Larry Niven",
        quote: "Ethics change with technology."
    }, {
        author: "Man Ray",
        quote: "Technology is anything that wasn\u2019t around when you were born."
    }, {
        author: "Albert Einstein",
        quote: "Reality is merely an illusion, albeit a very persistent one."
    }, {
        author: "Albert Einstein",
        quote: "If you can't explain it simply, you don't understand it well enough."
    }],
    Portfolio: [{
        animationClass: "rotateInDownLeft",
        delay: "0.5s",
        project: "AI-Image-Caption-Bot",
        description: "AI Image Caption Bot is a special project which uses almost every topic of data science and Machine Learning. In this project, we can upload image and bot will predict the caption of that image.",
        placement: "top"
    }, {
        animationClass: "slideInUp",
        delay: "0",
        project: "AI-Music-Generation",
        description: "In this project we were able to generates melodious sound of piano by mixing different nodes and chords By training on LSTM Model.",
        placement: "top"
    }, {
        animationClass: "rotateInDownRight",
        delay: "0.5s",
        project: "School-Donation-Analysis",
        description: "Using School Donation Datasets,I was able to Analysed and Visualized using numPy and pandas & Plotly, Cufflinks and Matplotlib respectively.",
        placement: "top"
    }, {
        animationClass: "rotateInUpLeft",
        delay: "0.5s",
        project: "A-Social-Media",
        description: " A Social Media Is an application developed with MEAN Stack Development. In this application, you can make friends ,besties and enemy, allow user to share their thoughts as post and can chat through one-to-one messages.",
        placement: "bottom"
    }, {
        animationClass: "slideInDown",
        delay: "0",
        project: "E-Commerce-Site",
        description: "Created An E-Commerce Site using Reactjs, REDUX, HTML, CSS and JavaScript where a user can buy product, add it to cart and added PayPal Button to make payment.",
        placement: "bottom"
    }, {
        animationClass: "rotateInUpRight",
        delay: "0.5s",
        project: "URL-Shortner",
        description: "Created An Web Application which help us to shorten the URL by using Firebase Firestore as Database and Bootstrap for Front end.",
        placement: "bottom"
    }],
    Training: {
        background: "footer-cloud.svg",
        sun: ["stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "circle z-2 height-full width-full", "circle-night z-2 height-full width-full"],
        developTime: [{
            time: "1",
            style: {
                left: "66px",
                top: "-10px"
            }
        }, {
            time: "2",
            style: {
                left: "88px",
                top: "-20px"
            }
        }, {
            time: "3",
            style: {
                left: "110px",
                top: "-10px"
            }
        }],
        moon: {
            dot: ["dot", "dot", "dot"],
            name: ["Moon-dark", "Moon"]
        },
        training: [
            [{
                class: "Left",
                title: "Theatron",
                subtitle: "Internship - Android Development",
                date: "10 Feb, 2020 - 30 Sept, 2020",
                description: "Theatron is an entertainment Android Application which I created using Kotlin with Firebase as Backend and Deployed It On Play Store.",
                link: "1Ahg2Gzz8oLBs495N4PT9a1fszNBcJUB9"
            }, {
                class: "Down",
                title: "Android Development",
                subtitle: "Classroom Training - Coding Blocks",
                date: "21 Aug, 2019 - 17 Dec, 2019",
                description: "The training included the basics and practical application of Android Development which included a lot of projects on Integrating API's and Firebase in Kotlin.",
                link: "1lSc9it--0LooJpp6A7riggSFZPVq2vn6"
            }, {
                class: "Right",
                title: "Talent Decrypt",
                subtitle: "Internship - Data Science",
                date: "12 Jan, 2021 - 1 Oct, 2021",
                description: "In TalentDecrypt, We worked on candidate suspicious activity detection which included Face Detection & Recognition and Object Detection to detect any abnormal activity.",
                link: "17-DFgOcSbG0xDdktRRiiSUSSK33WUFMe"
            }],
            [{
                class: "Left",
                title: "Complete Web Developer Master Course",
                subtitle: "Online Training - Udemy",
                date: "1 July 2020 - 25 Aug 2020",
                description: "Complete Web Development course which focused on both Front and Back-end Development, starting with HTML, CSS, JavaScript to MEAN Stack Development.",
                link: "12THg9_3-KtjSRe7pLfw27_pqwkDtSQMx"
            }, {
                class: "Up",
                title: "Python Bootcamp",
                subtitle: "Online Training - Udemy",
                date: "15 Oct, 2020 - 27 Dec, 2020",
                description: "Python bootcamp served as a window for me for the Advanced Python Developer, as it helped me to start applying my knowledge in more Advance and GUI Part.",
                link: "1AdmAM40vQ_mfzz7pVUcUea2S38E6Epuz"
            }, {
                class: "Right",
                title: "Data Science",
                subtitle: "Classroom/Live Training - Coding Blocks",
                date: "29 Dec, 2019 - 05 May, 2020",
                description: "This course covered all the intuitions and theoretical aspects of Machine Learning and Data Science which included all the types of visualisation, analysis etc.",
                link: "1lZmX1wmZLo8ksY6NsrFM9cNfL8HWdMBn"
            }]
        ]
    },
    Achievement: [{
        animationClass: "Left",
        description: "6 ★ in Problem Solving with 3200+ points on HackerRank.",
        image: "HackerRank"
    }, {
        animationClass: "Up",
        description: "Won 𝗛𝗮𝗰𝗸𝘁𝗼𝗯𝗲𝗿𝗳𝗲𝘀𝘁 𝟮𝟬𝟮𝟬 & 𝟮𝟬𝟮𝟭 T-shirt by creating more than 𝟮𝟬 Pull Request.",
        image: "Hacktoberfest"
    }, {
        animationClass: "Right",
        description: "Secured 𝟭𝘀𝘁 Position Among 𝟲𝟲 𝗽𝗲𝗲𝗿𝘀 in Data Science Course.",
        image: "DataScience"
    }],
    Contact: [{
        animationClass: "Left",
        title: "Location",
        icon: "fas fa-street-view",
        links: [{
            type: "https://maps.google.com/?q=",
            title: "Ghaziabad, Uttar Pradesh, India"
        }]
    }, {
        animationClass: "Up",
        title: "Contact Number",
        icon: "fas fa-mobile-alt",
        links: [{
            type: "tel:",
            title: "+91-8377838183"
        }, {
            type: "tel:",
            title: "+91-8076331756"
        }]
    }, {
        animationClass: "Right",
        title: "E-Mail",
        icon: "far fa-envelope",
        links: [{
            type: "mailto:",
            title: "jgoel92@gmail.com"
        }]
    }],
    Social: [
        [{
            link: "https://github.com/JayantGoel001",
            class: "fab fa-github",
            name: "GitHub",
            placement: "left"
        }, {
            link: "https://www.linkedin.com/in/JayantGoel001",
            class: "fab fa-linkedin-in",
            name: "LinkedIn",
            placement: "top"
        }, {
            link: "https://gist.github.com/JayantGoel001",
            class: "fas fa-laptop-code",
            name: "Gist",
            placement: "top"
        }, {
            link: "https://www.hackerrank.com/JayantGoel001",
            class: "fab fa-hackerrank",
            name: "HackerRank",
            placement: "right"
        }],
        [{
            link: "https://www.instagram.com/jayantgoel001",
            class: "fab fa-instagram",
            name: "Instagram",
            placement: "left"
        }, {
            link: "https://www.facebook.com/jayantgoel001",
            class: "fab fa-facebook",
            name: "Facebook",
            placement: "bottom"
        }, {
            link: "https://wa.me/918377838183",
            class: "fab fa-whatsapp",
            name: "WhatsApp",
            placement: "bottom"
        }, {
            link: "https://twitter.com/JayantGoel001",
            class: "fab fa-twitter",
            name: "Twitter",
            placement: "right"
        }]
    ],
    Footer: {
        dev: {
            name: "dev",
            link: "https://dev.to/jayantgoel001",
            image: "monkey"
        },
        citation: {
            ...identity,
            animationClass: "flipInX",
            icon: "fas fa-heart"
        }
    }
};