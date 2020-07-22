// 2
const DATA = [{
  "firstName": "Holly-anne",
  "lastName": "Thomton",
  "department": "HR",
  "iban": "ES26 8380 9621 1484 5002 8876",
  "salary": "$2000",
  "payInsurance": true
}, {
  "firstName": "Case",
  "lastName": "Harbison",
  "department": "Accounting",
  "iban": "EE43 5667 4993 3550 2532",
  "salary": "$3000",
  "payInsurance": true
}, {
  "firstName": "Griffy",
  "lastName": "Bothie",
  "department": "Accounting",
  "iban": "MC63 3524 4277 39TK VHB9 VLF0 R87",
  "salary": "$2000",
  "payInsurance": true
}, {
  "firstName": "Roxana",
  "lastName": "Bee",
  "department": "Accounting",
  "iban": "SI62 1306 0137 7178 799",
  "salary": "$4000",
  "payInsurance": true
}, {
  "firstName": "Winifred",
  "lastName": "Kittles",
  "department": "Accounting",
  "iban": null,
  "salary": null,
  "payInsurance": null
}, {
  "firstName": "Monti",
  "lastName": "Kenealy",
  "department": "HelpDesk",
  "iban": "PK42 ILYX FMEN LYAX P7SO 0BWO",
  "salary": "$2000",
  "payInsurance": true
}, {
  "firstName": "Delmor",
  "lastName": "Crowdy",
  "department": "HR",
  "iban": null,
  "salary": null,
  "payInsurance": null
}, {
  "firstName": "Arty",
  "lastName": "Sprey",
  "department": "HelpDesk",
  "iban": "PL98 5714 4305 2564 3917 3570 7750",
  "salary": "$3000",
  "payInsurance": false
}, {
  "firstName": "Mandi",
  "lastName": "Rubartelli",
  "department": "HR",
  "iban": "FI75 9235 9636 9614 55",
  "salary": "$3000",
  "payInsurance": false
}, {
  "firstName": "Gwyn",
  "lastName": "Jerschke",
  "department": "HR",
  "iban": undefined,
  "salary": "$2000",
  "payInsurance": false
}];

const INSURANCE_COST = 200;

// Add your code below this line

class Person{
  constructor(firstName, lastName, department, iban, salary, payInsurance)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.iban = iban;
    this.salary = salary;
    this.payInsurance = payInsurance;
  }

  departmentChange(newDepartment)
  {
    this.department = newDepartment;
  }

  add()
  {
    DATA.push(this);
  }

  intSalary()
  {
    this.salary=parseInt(this.salary.substring(1));
  }
}

const PEOPLE = DATA.map(element => new Person(element.firstName, element.lastName, element.department, element.iban, element.salary, element.payInsurance));

const findIndexByName = (firstName, lastName) => {
return PEOPLE.findIndex(person => person.firstName===firstName&&person.lastName===lastName);
}

//1a
PEOPLE[findIndexByName("Griffy", "Bothie")].departmentChange("HR");

//1b
const fireEmployee = (firstName, lastName) => {
PEOPLE.splice(findIndexByName(firstName, lastName), 1);
}
fireEmployee("Monti", "Kenealy");

//1c
const addEmployee = (firstName, lastName, department, iban, salary, payInsurance) =>
{
  let person = new Person(firstName, lastName, department, iban, salary, payInsurance);
  PEOPLE.push(person);
  console.log(PEOPLE);
};
addEmployee("Paweł", "Albanowski", "HelpDesk", undefined, "$2000", false);

//1d
const groupDepartments = () =>
{
  const unique = [...new Set(PEOPLE.map(item => item.department))];
  return unique;
};

const groupByDepartment = PEOPLE.reduce((r, a) => {
    r[a.department] = r[a.department] || [];
    r[a.department].push(a);
    return r;
  }, Object.create(null));
console.log(groupByDepartment);

//1e
const printEmptyiban = () =>
{
  console.log(PEOPLE.filter(person => !person.iban));
};
printEmptyiban();

//2a
const fullPrice = (object) =>
{
  const payTrue = object.filter(person => person.payInsurance);
  return payTrue.length * INSURANCE_COST;
};
console.log(fullPrice(PEOPLE));

//2b
const insuranceCostByDepartment = () =>
{
  const payTrue = [{"HR": 0}, {"Accounting": 0}, {"HelpDesk": 0}];
  payTrue.HR+=fullPrice(groupByDepartment.HR);
  payTrue.Accounting+=fullPrice(groupByDepartment.Accounting);
  payTrue.HelpDesk+=fullPrice(groupByDepartment.HelpDesk);
  console.log(payTrue);
};
insuranceCostByDepartment();

//2c
const decrease = (person, cost) =>
{
  person=person.substring(1);
  person=parseInt(person)-cost;
  return person;
};
const printDecreased = (obj, cost) =>
{
  for(person in obj)
  {
    if(obj[person].salary)
    {
    if (obj[person].payInsurance)
    {
    obj[person].salary=decrease(obj[person].salary, cost);
    obj[person].salary="$"+obj[person].salary.toString();
    console.log(obj[person]);
  }
}
  }
};
//2d
const printSalary = (obj, cost) =>
{
  let full=0;
  for(person in obj)
  {
      if(obj[person].salary)
      {
    if (obj[person].payInsurance)
    obj[person].salary=decrease(obj[person].salary, cost);
    else
    obj[person].salary=decrease(obj[person].salary, 0);
    full+=obj[person].salary;
    obj[person].salary="$"+obj[person].salary.toString();
  }
  }
  console.log(full);
};
