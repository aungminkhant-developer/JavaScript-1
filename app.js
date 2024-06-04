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

/*const names =["Aung","Min","Khant","Oo"];

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
}*/

/*const text = document.querySelector(".title");
const changeColor =document.querySelector(".changeColor");

text.classList.add("change");*/

/*changeColor.addEventListener("click",function(){
    text.classList.toggle("change");
})*/

const userList = document.querySelector(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn =document.querySelector(".addListBtn");
/*for(user of userList){
    user.addEventListener("click",function(){
        this.style.color = "red";
        console.log(this);
    });
}*/


addListBtn.addEventListener("click" , function(){
    //Create li out of thin air
    const newLi = document.createElement("LI");
    const liContent= document.createTextNode(listInput.value);
    //Add input value inside this li
    newLi.appendChild(liContent);
    //Attaching the li to the user list 
    userList.appendChild(newLi);
});