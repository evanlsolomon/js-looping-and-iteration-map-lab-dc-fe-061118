// Code your solution in this file.
const drivers = [];

function lowerCaseNames(x) {
return x.toLowerCase();
}

function lowerCaseDrivers(anything){
  return anything.map(lowerCaseNames);
}

function nameSplitter(name){
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];
  return {firstName:firstName, lastName:lastName}
}

function nameToAttributes(anything){
drivers.push('Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge');
  return anything.map(splitNames);
}


