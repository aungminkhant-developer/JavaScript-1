const user = {
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

sayMyAge();