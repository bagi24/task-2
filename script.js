//Task -1

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

const youngAge = (users) => {
  const minAge = Math.min(...users.map((user) => user.age));

  const youngestUser = users.find((user) => user.age === minAge);

  return youngestUser.name;
};

console.log(youngAge(users)); //"Lasha"

//Task - 2

const user = {
  name: "Bagrati",
  age: 28,
  email: "bagrat.injgia24@gmail.com",
};

const cloneUser = (originalUser) => ({ ...originalUser });

const newUser = cloneUser(user);

console.log(user); // { name: 'Bagrati', age: 28, email: 'bagrat.injgia24@gmail.com' }
console.log(newUser); // { name: 'Bagrati', age: 28, email: 'bagrat.injgia24@gmail.com' }

//Task - 3

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let winner;

do {
  const aPerson = rollDice();
  const bPerson = rollDice();
  if (aPerson === 3) {
    winner = "Player A";
  } else if (bPerson === 3) {
    winner = "Player B";
  }
} while (!winner);

console.log(`${winner} wins!`);  
