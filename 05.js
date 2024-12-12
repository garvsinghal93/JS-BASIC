function sayhi()
{
    console.log("Garv Singhal")
}
sayhi()

function sum(a,b)
{
    console.log(a+b)
}
sum(5,10)

function add(a,b)
{
    return a+b;
}
x= console.log(add(12,90))

function sum2(a=10,b=50)
{
    return a+b;
}
y=console.log(sum2(5))

const sayhii=()=>{
    console.log("byeee")
}
sayhii()

const sum5=(a,b)=>(a*b)-(a+b);
console.log(sum5(9,9))

//if we use curly braces then return keyword should be used

const findsum= (...num)=>{
    console.log(num);
}

findsum(10,120);
findsum(12);
findsum(1,2,3,4,5,6,7,8);
findsum();

//immediately inwoke function expression (IIFE)

(()=>{
    console.log("name");
})();

((uname)=>{
    console.log("${uname} is logged in");
})("John");