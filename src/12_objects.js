// Destructuring
// Destructuring assignmrnt is used to unpack from an array, or propertoes from objects, into distinct varaiables.

const course = {
    coursename: "JavaScript Course",
    price: 999,
    courseInstuctor: "Sahil",
}
// course.courseInstuctor

const {courseInstuctor}= course
console.log(courseInstuctor);

// react destructuring
// const nav =(company)=>{

// }
// navbar(company ="sahil")