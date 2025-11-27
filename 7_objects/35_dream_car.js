
const car = {
  model: "Porsche 991 GT3 RS",
  year: 2020,
  color: "grey",
  used: false,
 };

 const condition = car.used ? "used" : "new";
 console.log(`I'm looking for a ${car.color} ${car.year} ${car.model} that is ${condition}.`);
