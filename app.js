/*const user = {
  name :"Aung Min khant",
  age : 23,
 married : false,
 purchases : ["phone","car","laptop"],


 sayName : function(){
    console.log(this.name);
}
};

user.sayName();

function sayMyAge(){
    console.log(`My Age is ${this}`);//This is window object
}

sayMyAge();*/

const names =["Aung","Min","Khant","Oo"];

for(name of names){
    console.log(name);
    if(name==="Khant"){
        console.log("Khant is in my list");
        break;
    }
}

let loading = 0;
while(loading<100){
    console.log("Website is still loading");

    loading++;
}