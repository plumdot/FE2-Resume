var formattedName = HTMLheaderName.replace("%data%", "Ralph Plumley");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Ralph Plumley",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "323.892.1422",
        "email": "ralphplumley@gmail.com",
        "github": "plumdot",
        "twitter": "ralphplumley",
        "location": "Detroit"
    },
    "pictureUrl": "images/fry.jpg",
    "welcomeMessage": "Hello, I'm a designer based in Detroit, MI.",
    "skills": ["UX", "UI", "Front-End Dev"]
}

// format and append contact information
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactTwitter);
$("#topContacts").append(formattedContactGithub);
$("#topContacts").append(formattedContactLocation);

// format and append image, welcome message 
var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPictureUrl);
$("#header").append(formattedWelcomeMessage);

// append skills
$("#header").append(HTMLskillsStart);
var formattedSkills;

$.each(bio.skills, function(i) {
    // console.log(bio.skills[i]);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
});

// my work JSON
var work = {
    "jobs": [{
        "employer": "RIIS",
        "title": "Sr. UX Designer",
        "location": "Detroit",
        "dates": "08/2016 - current",
        "description": "UI / UX design and research for Blue Cross Blue Shield."
    }, {
        "employer": "MRM // McCann",
        "title": "UX Architect",
        "location": "Detroit",
        "dates": "04/2014 - 08/2016",
        "description": "UI / UX design and research for General Motors' web and mobile UX team."
    }, {
        "employer": "General Motors",
        "title": "Interaction Designer",
        "location": "Detroit",
        "dates": "06/2012 - 04/2014",
        "description": "UI / UX design and research for General Motors' in-vehicle UX team."
    }, {
        "employer": "Grey NYC",
        "title": "Digital Designer",
        "location": "NYC",
        "dates": "05/2008 - 06/2012",
        "description": "Design and development in HTML / CSS / JS ... and ActionScript! (YA FLASH BANNERS! ;_;)"
    }]
};

// Work
work.display = function() {
    'use strict';
    var i = 0,
        a;
    $("#workExperience").append("<div id=\"work-foldable-content\"></div>");
    for (i = 0; i < work.jobs.length; i++) {
        //console.log(work.jobs[i].employer);
        $("#work-foldable-content").append(HTMLworkStart);
        a = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(a);
        a = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(a);
        a = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        $(".work-entry:last").append(a);
        a = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(a);
        a = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(a);
    }
};

work.display();

// Projects

var projects = {
	"projects": [
		{
			"title": "title",
			"datesWorked": "January 1900 - January 2017",
			"description": "lorem description",
			"images": ["images/image.jpg"],
			"url": "url"
		},
		{
			"title": "title",
			"datesWorked": "January 1900 - January 2017",
			"description": "lorem description",
			"images": ["images/image.jpg"],
			"url": "url"
		},
		{
			"title": "title",
			"datesWorked": "January 1900 - January 2017",
			"description": "lorem description",
			"images": ["images/image.jpg"],
			"url": "url"
		}
	]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i = 0; i < work.jobs.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

