// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return append = [...drivers, name];
}

function prependDriver(name) {
  return prepend = [name, ...drivers];
}

function removeLastDriver() {
  return relas = drivers.splice(0, drivers.length-1)
}
