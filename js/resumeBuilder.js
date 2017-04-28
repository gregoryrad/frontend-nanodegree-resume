/* ---------------- bio object ---------------- */
var bio = {
    "name": "Gregory Radcliffe - ",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(206)920-8376",
        "email": "greg.ray.radcliffe@gmail.com",
        "github": "github.com/gregoryrad",
        "twitter": "twitter.com/greg_radcliffe",
        "location": "Portland, OR"
    },
    "welcomeMessage": "I am an experienced and versatile creative professional presently focused on UI design and front-end Web development. I am passionate about the process of working with my teammates and other stakeholders to build great solutions to the challenges presented. I work hard to exceed my clients' expectations by providing insights that inspire them and thoughtful solutions to help them define and fulfill their vision.",
    "skills": [
        "HTML,", "CSS,", "Javascript,", "jQuery,", "Bootstrap,", "PhotoShop,", "Illustrator,", "Sketch,", "WordPress,", "Typography,", "UI Design,", "Responsive Design,",  "Information Architecture,", "Wireframing,", "Typography,", "Prototyping"
    ],
    "biopic": "images/headshot_gr.jpg"
};


/* ---------------- bio display function ---------------- */
bio.display = function() {
    function showBio() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName, formattedRole);

        var formattedPicURL = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedPicURL, formattedWelcomeMsg);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedMobile, formattedEmail,formattedTwitter, formattedGithub, formattedLocation);
    }
    showBio();
    /* --- showSkills function --- */
    function showSkills() {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
    showSkills();

/* ---------------- footer contacts display function ---------------- */
    function showFooterContacts() {
        var formattedFooterMobile = HTMLFooterMobile.replace("%data%", bio.contacts.mobile);
        var formattedFooterEmail = HTMLFooterEmail.replace("%data%", bio.contacts.email);
        var formattedFooterTwitter = HTMLFooterTwitter.replace("%data%", bio.contacts.twitter);
        var formattedFooterGithub = HTMLFooterGithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedFooterMobile, formattedFooterEmail, formattedFooterTwitter, formattedFooterGithub);
    }
    showFooterContacts();
};


/* ---------------- education object ---------------- */
var education = {
    "schools": [{
        "name": "Edmonds Community College",
        "location": "Lynnwood, WA",
        "degree": "Certificate in Web App Development",
        "majors": [
            "CIS"
        ],
        "dates": "Sep. 2014 - Jun. 2016",
        "url": "http://catalog.edcc.edu/preview_program.php?catoid=48&poid=9406&returnto=13776"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Sketch Essential Training: The Basics",
        "school": "Lynda.com",
        "dates": "2017",
        "url": "https://www.lynda.com/Sketch-tutorials/Learn-Sketch-Basics/450912-2.html"
    }, {
        "title": "HTML5: Structure, Syntax, and Semantics",
        "school": "Lynda.com",
        "dates": "2014",
        "url": "https://www.lynda.com/HTML-tutorials/HTML5-Structure-Syntax-Semantics/182177-2.html"
    }, {
        "title": "HTML5 & CSS3 Fundamentals",
        "school": "Microsoft Virtual Academy",
        "dates": "2014",
        "url": "https://mva.microsoft.com/en-US/training-courses/html-5-css3-fundamentals-development-for-absolute-beginners-14207"
    }]
};


/* ---------------- education display function ---------------- */
education.display = function() {
    /* --- education function --- */
    function showSchool() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolURL = formattedSchoolName.replace("#", school.url);
            formattedSchoolName = formattedSchoolURL + formattedSchoolDegree;
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
        });
    }
    showSchool();
    /* --- onlineCourses function --- */
    function showOnline() {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedOnlineTitle = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineDates, formattedOnlineURL);
        });
    }
    showOnline();
};


/* ---------------- work object ---------------- */
var work = {
    "jobs": [{
        "employer": "Creative Hubbub",
        "title": "Principal",
        "location": "Seattle, WA",
        "dates": "2000 - Present",
        "description": "Performing effectively as a versatile, problem-solving, independent contractor in roles including creative professional, UX/UI designer, front-end developer, Web producer and project manager. Collaborating with team members and engaging directly with stakeholders on a variety of B2B and B2C projects for print, mobile and Web."
    }, {
        "employer": "Rory Martin, Inc.",
        "title": "Web Producer",
        "location": "Seattle, WA",
        "dates": "2014 - 2016",
        "description": "Collaborated with stakeholders and influenced the web design, information architecture, and content. Provided UX/UI direction, wireframes, and requirements documents to design and development teams. Performed front-end coding, design, and content edits. Executed quality assurance and directed development on revisions."
    }, {
        "employer": "WildTangent",
        "title": "UI Designer",
        "location": "Redmond, WA",
        "dates": "2013 - 2016",
        "description": "Leveraged and applied UX design principles and insights to create online micro-sites and rich media advertising units while working around the strict or ambiguous branding guidelines of high-profile brands."
    }, {
        "employer": "Hornall Anderson Design Works",
        "title": "Senior Production Designer",
        "location": "Seattle, WA",
        "dates": "2013",
        "description": "Proactively pushed critical projects for nationally recognized brands onto completion by extending design and performing intuitive and detail-oriented production design."
    }, {
        "employer": "Discovery Bay Games",
        "title": "UI Designer",
        "location": "Seattle, WA",
        "dates": "2009 - 2013",
        "description": "Directed and created UI designs under the often ambiguous constraints of licensor brand guidelines, human interface guidelines for iOS and internal business requirements. Created wireframes and rapid prototypes to validate the effectiveness of designs by participating in the evaluation of data collected during usability testing."
    }, {
        "employer": "Hasbro",
        "title": "Production Design Manager",
        "location": "Seattle, WA",
        "dates": "2008 - 2009",
        "description": "Responsible for running all aspects of the production design department while working closely with cross-functional teams producing game and toy packaging, components and marketing materials intended for domestic and over-seas printing and fabrication. Directed a team of contractors and managed the design and incorporation of the extensive Cranium product line into compliance with Hasbro branding, legal requirements and safety standards."
    }, {
        "employer": "Cranium",
        "title": "Senior Production Designer",
        "location": "Seattle, WA",
        "dates": "2005 - 2008",
        "description": "Provided design and production for game and toy packaging, components, collateral and trade show graphics. Collaborated on a team of producers, editors and art directors tasked with localizing the existing domestic line of Cranium products into twelve different languages for international markets."
    }]
};


/* ---------------- work display function ---------------- */
work.display = function() {
    function showWork() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formatedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formatedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
        });
    }
    showWork();
};


/* ---------------- projects object ---------------- */
var projects = {
    "projects": [{
        "title": "H&R Irrigation Website",
        "dates": "2017",
        "description": "Customized WordPress website for a local irrigation and landscaping company",
        "images": [
            "images/handr-home.jpg",
            "images/handr-services.jpg",
            "images/handr-contact.jpg"
        ]
    }, {
        "title": "Edmonds Comedy Night",
        "dates": "2016-2017",
        "description": "Promotional website built using HTML5 and CSS3 for an annual comedy fundraising event supporting local schools",
        "images": [
            "images/ecn-home.jpg",
            "images/ecn-about.jpg"
        ]
    }],
};


/* ---------------- projects display function ---------------- */
projects.display = function() {
    function showProject() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

            /* --- images display function --- */
            function showImage() {
                for (i = 0; i < project.images.length; i++) {
                    for (j = 0; j < project.images[i][j].length; j++) {
                        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[i]);
                        $(".project-entry:last").append(formattedProjectImage);
                    }
                }
            }
            showImage();
        });
    }
    showProject();
};


bio.display();

education.display();

work.display();

projects.display();

/* ---------------- Google Maps Section ---------------- */
$("#mapDiv").append(googleMap);
