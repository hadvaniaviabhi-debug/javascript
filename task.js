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

