console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log("function", this === exports, this === global);
}

const whatIsThisInArrow = () => {
  console.log("arrow function", this === exports, this === global);
};
whatIsThis();
whatIsThisInArrow();
