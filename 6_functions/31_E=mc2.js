function relativityTheory(mass){
  const c = 3e8;
  const energy = mass * c ** 2;
  return energy;
}
console.log(relativityTheory(5));
