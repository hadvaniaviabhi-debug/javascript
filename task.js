let Student ={
    name : " Hadvani Akshi ",
    email : "AKSHI@gmail.com",
    course : "js,React,Node",
    marks : [45,78,60,90,30],
    hobies :["music","cricket","Reading"],
    address : ["India",["Gujarat","Ahmedabad"]]
}

//STRING OPERATION

// remove extra space from name and convert it to upppercase

 console.log("remove extra space :-",Student.name.trim())
 console.log("convert it to upppercase :-",Student.name.toUpperCase())

// convert email to lowercase

 console.log("convert email to lowercase :-",Student.email.toLowerCase())

//ckeck wether coures includes "react" 
console.log("course includes React :-",Student.course.includes("React"));


// find the index of "node" in course 
console.log("index of Node:-",Student.course.indexOf("Node"));

// replace "javascript" with "js"
console.log("replace javascript with js:-",Student.course.replace("javascript", "js"));


// convert course string into an array
console.log("convert course string into an array:-",Student.course.split(","));

// display the lenght of student name
console.log("length of student name:-", Student.name.length);

//  ARRAY OPERATION    

//add "swimming" to hobies
Student.hobies.push("swimming");
console.log("add swimming to hobies:-",Student.hobies);

//remove the last hobies
Student.hobies.pop();
console.log("remove the last hobies:-",Student.hobies);

// add "Drawing" at the beginning of hobies 
Student.hobies.unshift("Drawing");
console.log("add Drawing at the beginning of hobies :-",Student.hobies);

// remove the frist hobies 
Student.hobies.shift();
console.log(" remove the frist hobies :-",Student.hobies);


//merge hobies with course array

//check if "react " exists in course array

// find index of "js" in course 


//extract  frist two mark


// remove one failed subject mark(less than 40) using splice


//convert hobies array into a string 