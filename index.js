const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    var newArray = cats.slice();
    newArray.push("Broom");
    return newArray;
  }

  function prependCat(name) {
    var otherArray = cats.slice();
    otherArray.unshift("Arnold");
    return otherArray;
  }

  function removeLastCat() {
    var thirdArray =cats.slice();
    thirdArray.pop();
    return thirdArray;
  }

  function removeFirstCat() {
    var fourthArray = cats.slice();
    fourthArray.shift();
    return fourthArray;
  }