// // TODO: write the validation functions



// // tests:
// console.log(isValidName("Frank") === true);
// console.log(hoursAttended(6,10) === true);
// console.log(hoursAttended(6,"10") === true);
// console.log(hoursAttended("6",10) === true);
// console.log(hoursAttended("6","10") === true);

// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);
// console.log(hoursAttended("",6) === false);
// console.log(hoursAttended(6,"") === false);
// console.log(hoursAttended("","") === false);
// console.log(hoursAttended("foo",6) === false);
// console.log(hoursAttended(6,"foo") === false);
// console.log(hoursAttended("foo","bar") === false);
// console.log(hoursAttended(null,null) === false);
// console.log(hoursAttended(null,undefined) === false);
// console.log(hoursAttended(undefined,null) === false);
// console.log(hoursAttended(undefined,undefined) === false);
// console.log(hoursAttended(false,false) === false);
// console.log(hoursAttended(false,true) === false);
// console.log(hoursAttended(true,false) === false);
// console.log(hoursAttended(true,true) === false);
// console.log(hoursAttended(10,6) === false);
// console.log(hoursAttended(10,"6") === false);
// console.log(hoursAttended("10",6) === false);
// console.log(hoursAttended("10","6") === false);
// console.log(hoursAttended(6,10.1) === false);
// console.log(hoursAttended(6.1,10) === false);
// console.log(hoursAttended(6,"10.1") === false);
// console.log(hoursAttended("6.1",10) === false);
// console.log(hoursAttended("6.1","10.1") === false);


//console.log(null == undefined)
//console.log(42 == ["42"])
//console.log("" == true)
// let teacher = "abhay"

// teacher = {name: "thanak"}
// console.log(teacher)
let arr = [1,2,3,4,5,6]
var sum = 0; 
function allSum(arr){
    var a = 1
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] 
}
return sum
}
// {
//    var a = 1  
//   // let b = 2 
// }
// console.log(a)
//  console.log(b)
//console.log(allSum(arr))

// const a = ["abhay","thanak"]
//  a[0] = "hello"
//  a[1] = "fuck"
// console.log(a)

function name() {
    return "abhay"
}
console.log(name())