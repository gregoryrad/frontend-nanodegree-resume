/* ---------------- bio object ---------------- */
var bio = {
    "name": "Gregory Radcliffe",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "(206)920-8376",
        "email": "mailto:greg.ray.radcliffe@gmail.com",
        "github": "https://github.com/gregoryrad",
        "twitter": "https://twitter.com/greg_radcliffe",
        "location": "Portland, OR"
    },
    "welcomeMessage": "Hi there. This is my welcome message. Aenean ac ullamcorper arcu. In sed fermentum purus. Ut aliquam tempor odio, non commodo turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat facilisis ultrices. Donec et diam lobortis, venenatis dui id, viverra urna. Aliquam sed magna diam. Maecenas sed nisi ac sapien condimentum dignissim eget nec leo. Nunc consectetur arcu vitae elit condimentum sollicitudin. Phasellus eu metus ex.",
    "skills": [
        "PhotoShop", "Illustrator", "HTML", "CSS", "Responsive Design"
    ],
    "biopic": "images/GregoryR_profilePic.jpeg"
};


/* ---------------- education object ---------------- */
var education = {
    "schools": [
        {
            "name": "Edmonds Community College",
            "location": "Lynnwood, WA",
            "degree": "Certificate in Web App Development",
            "major": "CompSci",
            "dates": "Sep. 2014 - Jun. 2016"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

/* ---------------- work object ---------------- */
var work = {
    "jobs": [
        {
            "title": "Principal",
            "employer": "Creative Hubbub",
            "dates": "Apr. 2000 - Present",
            "location": "Seattle, WA",
            "description": "Donec non nibh ullamcorper, faucibus orci quis, pharetra urna. Sed imperdiet turpis gravida quam vestibulum scelerisque. Nam rhoncus nulla vel sem rutrum, ut porttitor justo tempus. Integer et arcu id risus commodo fringilla"
        },
        {
            "title": "Web Producer",
            "employer": "Rory Martin, Inc.",
            "dates": "Sep. 2014 - Sep. 2016",
            "location": "Seattle, WA",
            "description": "Donec non nibh ullamcorper, faucibus orci quis, pharetra urna. Sed imperdiet turpis gravida quam vestibulum scelerisque. Nam rhoncus nulla vel sem rutrum, ut porttitor justo tempus. Integer et arcu id risus commodo fringilla"
        },
        {
            "title": "UI Designer",
            "employer": "WildTangent",
            "dates": "Nov. 2013 - Jun. 2016",
            "location": "Redmond, WA",
            "description": "Donec non nibh ullamcorper, faucibus orci quis, pharetra urna. Sed imperdiet turpis gravida quam vestibulum scelerisque. Nam rhoncus nulla vel sem rutrum, ut porttitor justo tempus. Integer et arcu id risus commodo fringilla"
        }
    ]
};

/* ---------------- projects object ---------------- */
var projects = {
    "projects": [
        {
            "title": "Suspendisse vitae",
            "dates": "2017",
            "description": "Pellentesque molestie pellentesque neque. Morbi cursus odio ante, eget suscipit metus auctor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": [
                "images/fpo-1.jpg",
                "images/fpo-1.jpg"
            ]
        },
        {
            "title": "Donec diam",
            "dates": "2016",
            "description": "Morbi in ipsum non velit ornare tristique. Maecenas vel lacus id turpis pharetra hendrerit. Maecenas ipsum erat, cursus a mollis a, rutrum sit amet lacus.",
            "image": [
                "images/fpo-2.jpg",
                "images/fpo-1.jpg"
            ]
        }
    ]
};




// bio formatted variables
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
// var formattedPicURL = HTMLbioPic.replace("%data%", bio.biopic);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


// bio jQuery display
// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedTwitter);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedLocation);
// $("#header").append(formattedPicURL);
// $("#header").append(formattedWelcomeMsg);



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
};

bio.display();

// if (bio.skills.length > 0) {
//
//     $("#header").append(HTMLskillsStart);
//
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//     $("#skills").append(formattedSkill);
// };

/* ---------------- education display function ---------------- */
education.schools.display = function () {
/* ---------------- education function ---------------- */
    function showSchool() {
        education.schools.forEach(function(school) {
            console.log(school);
            // console.log(job.title);
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
    }showSchool();
    /* ---------------- onlineCourses function ---------------- */
    function showOnline() {
        education.onlineCourses.forEach(function(online) {
            console.log(online);
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedOnlineTitle = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }showOnline();
};

education.schools.display();

/* ---------------- work display function ---------------- */
work.jobs.display = function () {
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
    }showWork();
};

work.jobs.display();


/* ---------------- projects display function ---------------- */
 // TODO: debug result of undefined in output
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

            function showImage() {
                projects.projects.forEach(function(image){
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image.image);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            }
            showImage();
        });
    }
    showProject();
};

projects.projects.display();


// $("mapDiv").append(googleMap);
