// // //let: changeable variable
// // //const: non changeable variable
// // // === checks for exact variable type
// // //== checks for value
// // //!= checks for not equal to
// // //prompt asks user a question 

// // console.log("If you can see this, I'm working")
// // const myFirstName = "Luke"
// // const myAge = 23
// // console.log(myFirstName)
// // console.log(myAge)

// // let a = 10
// // let b = 20
// // let c = 30
// // let d = 40

// // let sum = (a * b) - (c + d)
// // console.log(sum)

// // // "" or '' for basic strings, `` for strings with variables (``most recommended)

// // console.log(`Hi! My name is ${myFirstName} and I am ${myAge} years old.`)

// // let foreName = "Luke"
// // let surName = "Winston"
// // let fullName = ${foreName} ${surName}
// // console.log(`Hello, I'm ${fullName}. I am ${myAge} years old.`)
// // console.log(typeof foreName);

// // variable types: string, number, boolean
// // string: a sentence
// // number: a number of any kind
// // boolean: true or false

let input = prompt(`How old are you?`)
if (input < 16) {
    alert(`Shouldn't you be in school?`)
} else if(input < 18){
    alert(`You ought to be in College`)
} else{
    alert(`Get back to work!`)
}

// // //There are two primary ways to declare a variable in JavaScript: const and let. They’re similar, except const values are not allowed to change during the execution of the code.