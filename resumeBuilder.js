/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append(work["position"]);
//$("#main").append(education.name);

 /*var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var biopic = bio.pic;
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
$("#header").append(formattedBiopic);

var message = bio.message;
var welcome_msg = HTMLwelcomeMsg.replace("%data%",message);
$("#header").append(welcome_msg);

var _location = bio.contact.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);


var mobile = bio.contact.cell;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);


var github = bio.contact.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var email = bio.contact.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

// how to insert into ul created by helper HTMLskillsStart ??

*/

var bio = {
	"name": "Rajat Chhajer",
	"role": "Security Analyst",
	"contact": {
		"email": "rajat.chhajer1@gmail.com",
		"github": "rajatc25",
		"location": "India",
		"cell": "+91-8469886872"
	},
	"pic": "images/fry.jpg",
	"message": "Creative Design and Code",
	"skills": ["HTML/CSS", "JS", "Design"]
}
var work={
			"position": "Systems Engineer",
			"employer": "Infosys Pvt. Ltd.",
			"duration": "0 years",
			"city": "Mysore"
}
var education={
	"schools": [{
			"name": "Kendriya Vidyalaya",
			"degree": "Secondary Education",
			"majors": "Science",
			"years": "2010-2011",
			"city": "New Delhi"
		},
		{
			"name": "Kendriya Vidyalaya",
			"degree": "Senior Secondary Education",
			"majors": "Science",
			"years": "2012-2013",
			"city": "New Delhi"
		},
		{
			"name": "Kendriya Vidyalaya",
			"degree": "BTech",
			"majors": "Electronics and Communication",
			"years": "2013-2017",
			"city": "Surat"
		}
	],
	"online courses": [{
			"title": "Front End Web Development",
			"school": "Udacity"
		},
		{
			"title": "Certified Ethical Hacking",
			"school": "EC-Council"
		},
		{
			"title": "Network +",
			"school": "CompTIA"
		},
		{
			"title": "Cisco Certified Network Administrator",
			"school": "Cisco"
		}
	]
}

var project= {
	"title":"Labview Based Wireless Fingerprint Attendance System",
	"date": 2017,
	"description": "* LabView: To Capture Realtime Information with better GUI /n* Wireless: No more wires. /n* Fingerprint: Using the Unique Biometric Features for non redundant /n* Attendance System: Free from papers and counter measures to prevent proxy./nThis Makes Our Project: LabView Based Wireless Fingerprint Attendance System"
}

if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);
for (var i=0; i<skills.length; i++){
var formattedskills = HTMLskills.replace("%data%",skills[i]);
$("#skills").append(formattedskills);
}
}