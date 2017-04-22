/* ---------------- bio object ---------------- */
var bio = {
    "name": "Gregory Radcliffe",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(206)920-8376",
        "email": "greg.ray.radcliffe@gmail.com",
        "github": "github.com/gregoryrad",
        "twitter": "twitter.com/greg_radcliffe",
        "location": "Portland, OR"
    },
    "welcomeMessage": "I am an experienced creative professional currently focused on UI design and front-end Web development. I love the process of working with clients, stakeholders and teammates to build great solutions to challenges.",
    "skills": [
        "PhotoShop,", "Illustrator, ", "HTML, ", "CSS, ", "Responsive Design, ", "Sketch, ", "WordPress"
    ],
    "biopic": "images/headshot_gr.jpg"
};


/* ---------------- education object ---------------- */
var education = {
    "schools": [{
        "name": "Edmonds Community College",
        "location": "Lynnwood, WA",
        "degree": "Certificate in Web App Development",
        "major": "CompSci",
        "dates": "Sep. 2014 - Jun. 2016"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};


/* ---------------- work object ---------------- */
var work = {
    "jobs": [{
        "title": "Principal",
        "employer": "Creative Hubbub",
        "dates": "2000 - Present",
        "location": "Seattle, WA",
        "description": "Proin risus odio, aliquam eu metus vitae, sodales vehicula ligula. Sed ac odio tellus. Cras justo massa, feugiat vitae est in, pellentesque convallis arcu. Morbi facilisis interdum mauris. Cras at dolor laoreet purus ultricies euismod vel a elit. Suspendisse varius, metus sit amet luctus porttitor, diam nibh porttitor tortor, non cursus mauris libero lacinia ex."
    }, {
        "title": "Web Producer",
        "employer": "Rory Martin, Inc.",
        "dates": "2014 - 2016",
        "location": "Seattle, WA",
        "description": "Donec non nibh ullamcorper, faucibus orci quis, pharetra urna. Sed imperdiet turpis gravida quam vestibulum scelerisque. Nam rhoncus nulla vel sem rutrum, ut porttitor justo tempus. Integer et arcu id risus commodo fringilla"
    }, {
        "title": "UI Designer",
        "employer": "WildTangent",
        "dates": "2013 - 2016",
        "location": "Redmond, WA",
        "description": "Sed cursus venenatis lacus, quis tempor sapien placerat sed. Nunc cursus ipsum quis rutrum malesuada. Sed eget turpis eu metus tincidunt sagittis. Nullam porta est et ligula cursus rhoncus. Vivamus erat orci, molestie a tincidunt eget, dapibus id leo."
    }, {
        "title": "Senior Production Designer",
        "employer": "Hornall Anderson Design Works",
        "dates": "2013",
        "location": "Seattle, WA",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt elit eu lorem venenatis auctor id non nisi."
    }, {
        "title": "UI Designer",
        "employer": "Discovery Bay Games",
        "dates": "2009 - 2013",
        "location": "Seattle, WA",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut porta tincidunt lorem, vel sollicitudin augue lacinia ut. Sed in libero ac ligula pulvinar euismod et vel nibh. Fusce cursus rutrum ante, id fermentum neque porttitor at."
    }, {
        "title": "Production Design Manager",
        "employer": "Hasbro",
        "dates": "2008 - 2009",
        "location": "Seattle, WA",
        "description": "Ut quis diam mauris. Integer et tempus odio. Aliquam erat volutpat. Phasellus ullamcorper vitae sem non mollis. Maecenas et fermentum orci. Pellentesque augue erat, euismod sit amet lacus at, interdum ornare lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }, {
        "title": "Senior Production Designer",
        "employer": "Cranium",
        "dates": "2005 - 2008",
        "location": "Seattle, WA",
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis libero ex. Cras at semper metus. Nunc commodo ex ex, vitae consectetur lectus faucibus a."
    }]
};


/* ---------------- projects object ---------------- */
var projects = {
    "projects": [{
        "title": "Suspendisse vitae",
        "dates": "2017",
        "description": "Pellentesque molestie pellentesque neque. Morbi cursus odio ante, eget suscipit metus auctor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "images": [
            "images/fpo-1.jpg",
            "images/fpo-2.jpg",
            "images/fpo-6.png"
        ]
    }, {
        "title": "Donec diam",
        "dates": "2016",
        "description": "Morbi in ipsum non velit ornare tristique. Maecenas vel lacus id turpis pharetra hendrerit. Maecenas ipsum erat, cursus a mollis a, rutrum sit amet lacus.",
        "images": [
            "images/fpo-3.png",
            "images/fpo-4.png",
            "images/fpo-5.png"
        ]
    }]
};


/* ---------------- bio display function ---------------- */
bio.display = function() {
    function showBio() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        var formattedPicURL = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPicURL);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
    }
    showBio();

    function showSkills() {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
    showSkills();
};

bio.display();


/* ---------------- education display function ---------------- */
education.schools.display = function() {
    /* --- education function --- */
    function showSchool() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolName = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    }
    showSchool();
    /* --- onlineCourses function --- */
    function showOnline() {
        education.onlineCourses.forEach(function(online) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedOnlineTitle = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
    showOnline();
};

education.schools.display();


/* ---------------- work display function ---------------- */
work.jobs.display = function() {
    function showWork() {
        work.jobs.forEach(function(job) {
            // console.log(job);
            // console.log(job.title);
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formatedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formatedEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
    showWork();
};

work.jobs.display();


/* ---------------- projects display function ---------------- */
projects.projects.display = function() {
    function showProject() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            /* --- images display function --- */
            function showImage() {
                for (i = 0; i < project.images.length; i++) {
                    // console.log(project.images);
                    for (j = 0; j < project.images[i][j].length; j++) {
                        // console.log(project.images[i]);
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

projects.projects.display();

/* ---------------- footer contacts display function ---------------- */
// bio.display = function() {
    function showFooterContacts() {
        var formattedFooterMobile = HTMLFooterMobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedFooterMobile);

        var formattedFooterEmail = HTMLFooterEmail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedFooterEmail);

        var formattedFooterTwitter = HTMLFooterTwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedFooterTwitter);

        var formattedFooterGithub = HTMLFooterGithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedFooterGithub);
    }
    showFooterContacts();


/* ---------------- Google Maps Section ---------------- */
$("#mapDiv").append(googleMap);
