var obj = {num:2};
var addToThis = function(a){
    return this.num+a;
}
console.log(addToThis.call(obj,3));
console.log(addToThis.apply(obj,[3]))
var obj1 = addToThis.bind(obj);
console.dir(obj1);


var student = {age:20};
var details = function(){
    return this.age;
}
console.log(details.call(student,20));


//closure method//
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(5);

//bind method//
//let multiply = function(x,y){
   // console.log(x*y){

   // }
//}
//let multiplyByTwo = multiply.bind(this,2);
//multiplyByTwo(5);
