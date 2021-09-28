Let n:number =10;
Let s: string="hello";
Let b:boolean = true;
Let nu:null=null;
let a:any =null;

Let a:number=[1,2,3];
Let b:(number|string|boolean)[]=[1,2,3];
console.log(a[0]);

console.log(a);

interface user={
    name:"arin";
    age:20;
};
//user.user:User;
console.log(user);
//class
class App{
    printHello(){
       console.log("hello");
    }
}
const app = new App();
app.printHello();


Let username:string | null ="";
console.log(username);


//custom data type
Let door: = "open"|"close";
Let door:Door="open";
door = "none";


//functions
function add(a:number,b:number)
{
    return a+b;
}
console.log(add(1,3));

