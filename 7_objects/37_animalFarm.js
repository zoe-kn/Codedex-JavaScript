const pig = {
  name: "Edgar",
  type: "pig",
  age: 2,
   makeSound() {
    console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink!");
  }
};

const sheep = {
  name: "Berta",
  type: "sheep",
  age: 6,
  makeSound (){
    console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes baaah!");
  }
};

const dog = {
  name: "Max",
  type: "dog",
  age: 3,
  makeSound (){
    console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!");
  }
};


pig.makeSound();
sheep.makeSound();
dog.makeSound();
