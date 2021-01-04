const HashMap = require('./HashMap')

let lotr = new HashMap()

function main() {
  HashMap.MAX_LOAD_RATIO = 0.5
  HashMap.SIZE_RATIO = 3

  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandalf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')
  lotr.get('Hobbit')

  // // console.log(lotr)
  // console.log('Hobbit: ', lotr.get('Hobbit'))
  // console.log('Maiar: ', lotr.get('Maiar'))

}
//the values for the keys "Maiar" and "Hobbit" are Sauron and Frodo respectively.  
// There is a discrepancy because the there were two values with the same keys.
//the capacity of the hash table is 24, because the initial capcity of 8 was too small,
//the set method resized the capacity of HashMap
main()

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}
// console.log(WhatDoesThisDo())
// this function creates two HashMaps 
// it gives the variables of str1, str2, str3, and str4 the value of "Hello World"
// each element has a str variable as the key ( which equals "Hello World")
// the values of the strings are given in the .set methods 
// and str1 and str3 are printed to the console

let stand = new HashMap()
stand.length = 11;

function openAddressing() {
  stand.set(10, 'a')
  stand.set(22, 'b')
  stand.set(31, 'c')
  stand.set(4, 'd')
  stand.set(15, 'e')
  stand.set(28, 'f')
  stand.set(17, 'g')
  stand.set(88, 'h')
  stand.set(59, 'i')

}
console.log(openAddressing())