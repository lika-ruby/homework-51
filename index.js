const user = {
  hobby: "reading",
  premium: true,
};

const addMood = () => (user.mood = "happy");
const changeHobby = () => (user.hobby = "skydiving");
const changePremium = () => (user.premium = false);

const makeMessage = function (addMood, changeHobby, changePremium) {
  addMood();
  changeHobby();
  changePremium();
  let message = "";
  const keys = Object.keys(user);
  for (const key of keys) {
    message += `${key} - ${user[key]}, `;
  }
  return message;
};

console.log("--------------------------- Task 1 ---------------------------");
console.log(makeMessage(addMood, changeHobby, changePremium));

///////////////////////////////////////////////////////////////////////////////////

const basket = {
  tomato: 30,
  cucumber: 45,
  carrot: 20,
};

const countProps = function (obj) {
  const valueArray = Object.values(obj);
  return `У корзині ${valueArray.length} продукти`;
};

console.log("--------------------------- Task 2 ---------------------------");
console.log(countProps(basket));

///////////////////////////////////////////////////////////////////////////////////

const employees = {
  bernjemin: 46,
  ramunda: 32,
  volfram: 54,
  elsa: 49,
};

const findBestEmployee = function (employees) {
  const namesArray = Object.keys(employees);
  let theBestTask = 0;
  let theBestEmployee = "";
  for (const name of namesArray) {
    if (employees[name] > theBestTask) {
      theBestTask = employees[name];
      theBestEmployee = name;
    }
  }

  return `Найкращий працівник - ${theBestEmployee}, з ${theBestTask} виконанами завданнями`;
};

console.log("--------------------------- Task 3 ---------------------------");
console.log(findBestEmployee(employees));

///////////////////////////////////////////////////////////////////////////////////

const employees2 = {
  bernjemin: 20000,
  ramunda: 17000,
  volfram: 25000,
  elsa: 22000,
};

const countTotalSalary = function (employees) {
  const salaryArray = Object.values(employees);
  let sumSalary = 0;
  for (const salary of salaryArray) {
    sumSalary += salary;
  }
  return `Сума зарплати всіх працівників - ${sumSalary}`;
};

console.log("--------------------------- Task 4 ---------------------------");
console.log(countTotalSalary(employees2));

///////////////////////////////////////////////////////////////////////////////////

const playlist = [
  {
    name: "Radeo",
    author: "TeaMonkey",
    year: 2016,
  },
  {
    name: "Space around",
    author: "RangeBange",
    year: 1982,
  },
  {
    name: "India",
    author: "Ogusto",
    year: 2001,
  },
  {
    name: "Between hills",
    author: "Panara",
    year: 2013,
  },
  {
    name: "King of island",
    author: "Lasi",
    year: 2021,
  },
];

const getAllPropValues = function (arr, prop) {
  let message = "Автори пісень:";
  for (const song of arr) {
    message += ` ${song[prop]},`;
  }
  return message;
};
console.log("--------------------------- Task 5 ---------------------------");
console.log(getAllPropValues(playlist, "author"));

///////////////////////////////////////////////////////////////////////////////////

const basket2 = [
  {
    name: "яблуко",
  },
  {
    name: "банан",
  },
  {
    name: "яблуко",
  },
  {
    name: "яблуко",
  },
  {
    name: "персик",
  },
  {
    name: "банан",
  },
  {
    name: "яблуко",
  },
  {
    name: "персик",
  },
  {
    name: "банан",
  },
  {
    name: "яблуко",
  },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let countOfProduct = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      countOfProduct += 1;
    }
  }
  return `У корзині лежить ${countOfProduct} ${productName}`;
};
console.log("--------------------------- Task 6 ---------------------------");
const productName = prompt(
  "Введіть назву фрукта, кількість якого ви хочете дізнатись. У корзині є яблуко, банан та персик"
);
console.log(calculateTotalPrice(basket2, productName));

///////////////////////////////////////////////////////////////////////////////////

const account = {
  balance: 10000,

  deposit(sumDeposit) {
    this.balance += sumDeposit;
  },

  withdraw(sumWithdraw) {
    this.balance -= sumWithdraw;
  },
  showBalance(account) {
    console.log(`У вас на балансі ${account.balance} грн`);
  },
};

console.log("--------------------------- Task 7 ---------------------------");
let reapete;
do {
  const choice = confirm(
    "Якщо хочете поповнити рахунок - натиснить 'Ok', якщо хочете зняти з рахунку - натиснить 'Cansel'"
  );
  if (choice === true) {
    const sumDeposit = Number(
      prompt("Введіть суму, на яку хочете поповнити баланс")
    );
    account.deposit(sumDeposit);
  } else {
    const sumWithdraw = Number(
      prompt("Введіть суму, яку хочете зняти з баланс")
    );
    account.withdraw(sumWithdraw);
  }
  reapete = confirm("Чи хочети ви ще поповнити чи зняти з рахунку?");
} while (reapete === true);

account.showBalance(account);
