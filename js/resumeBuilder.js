var formattedName = HTMLheaderName.replace("%data%", "Ralph Plumley");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Ralph Plumley",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "323.892.1422",
		"email" : "ralphplumley@gmail.com",
		"github" : "plumdot",
		"twitter" : "ralphplumley",
		"location" : "Detroit"
	},
	"pictureUrl" : "images/fry.jpg",
	"welcomeMessage" : "Hello, I'm a designer based in Detroit, MI.",
	"skills" : ["UX", "UI", "Front-End Dev"]
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

$.each(bio.skills, function(i){
	//console.log(bio.skills[i]);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);
});

// append work experience
// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';

// jobs: array of objects with
//            employer: string 
//            title: string 
//            location: string 
//            dates: string (works with a hyphen between them)
//            description: string 
//       display: function taking no parameters

var work = {
    "jobs": [
 		{
 			"job1" : {
 				"employer": "RIIS",
            	"title": "Sr. UX Designer",
           		"location": "Detroit",
           		"dates": "08/2016 - current",
           		"description": "UI / UX design and research for Blue Cross Blue Shield."
 			}
 		},
 		{
 			"job2" : {
 				"employer": "MRM // McCann",
            	"title": "UX Architect",
           		"location": "Detroit",
           		"dates": "04/2014 - 08/2016",
           		"description": "UI / UX design and research for General Motors' web and mobile UX team."
 			}
 		},
 		{
 			"job3" : {
 				"employer": "General Motors",
            	"title": "Interaction Designer",
           		"location": "Detroit",
           		"dates": "06/2012 - 04/2014",
           		"description": "UI / UX design and research for General Motors' in-vehicle UX team."
 			}
 		},
 		{
 			"job4" : {
 				"employer": "Grey NYC",
            	"title": "Digital Designer",
           		"location": "NYC",
           		"dates": "05/2008 - 06/2012",
           		"description": "Design and development in HTML / CSS / JS ... and ActionScript! (YA FLASH BANNERS! ;_;)"
 			}
 		}
    ]
};

// var formattedWorkStart = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkEmployer = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkTitle = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkDates = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkLocation = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// var formattedWorkStart = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkEmployer = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkTitle = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkDates = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkLocation = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// $("#workExperience").append(formattedWelcomeMessage);
$.each(work.jobs, function(i){
	// console.log(work.jobs[i]);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);
});





// var work ={};
// work.position = "Sr. UX Designer";
// work.employer = "RIIS / BCBSM";
// work.years = "8";

// var education = {};
// education["name"] = "College for Creative Studies";
// education["years"] = "2005 - 2008";
// education["city"] = "Detroit, MI., United States";

// // $("#main").append(work["position"]);
// // $("#main").append(education.name);