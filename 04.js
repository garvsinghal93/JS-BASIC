const stud = {
    gender: "male",
    "full name": "Romesh Sharma",
    email: "romesh@gmail.com",
    age: 18,
    location: "Ghaziabad",
    loginDays: ["Sat","Sun","Tues"],
    isLogin: true,
};
console.log(stud);
console.log(typeof stud);

stud.name = "Romesh Sharma";

console.log(stud);
console.table(stud);
console.log(stud.age);
console.log(stud["full name"]);
console.log(stud["email"]);

//anything except false, null is true in js
if(stud.isLogin)
{
    console.log(stud.loginDays);
}
if(stud.email)
{
    console.log(stud.email);
}

stud.greeting=()=> log("hello")
stud.greeting()
