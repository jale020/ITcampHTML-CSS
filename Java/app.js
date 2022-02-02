// var1 = prompt("Unesi broj 1");
// var2 = prompt("Unesi broj 2");

// console.log(parseInt);

// a = prompt("Unesi broj a");
// b = prompt("Unesi broj b");
// console.log(a > b);

// a = prompt("Unesi broj od 1 do 10");
// console.log(a < 10 && a > 1);

// a = prompt("Da li je broj paran?");
// console.log(a % 2 === 0);

// a = prompt("Unesite vase ime");
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.concat("Mujezinovic"));
// console.log(a.indexOf("s"));
// console.log(a.includes("w"));

// str = "Apple, Banana, Kiwi";
// part = str.slice(7, 13);
// console.log(part);

// text = "Please visit Microsoft!";
// newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// a = prompt("unesite broj");
// b = prompt("unesite broj");
// if (a > b) {
//   console.log("Prvi broj je veci");
// }
// if (b > a) {
//   console.log("Drugi broj je veci");
// }

// a = prompt("Unesite broj od 1-10");
// if (a < 10) {
//   console.log("Tacno");
// }
// if (a > 10) {
//   console.log("Netacno");
// }

// a = 10;
// b = 1;

// if (a > b) {
//   console.log("Pokazi a");
// }
// if (b < a) {
//   console.log("Pokazi b");
// }

// a = prompt("Unesite broj bodova");

// if (a >= 50 && a <= 65) {
//   console.log("Ocena 6");
// } else if (a >= 65 && a <= 75) {
//   console.log("Ocena 7");
// } else if (a >= 75 && a <= 85) {
//   console.log("Ocena 8");
// } else if (a >= 85 && a <= 95) {
//   console.log("Ocena 9");
// } else if (a >= 95 && a <= 100);
// console.log("Ocena 10");

// a = parseInt(prompt("Unesi broj izmedju 1-7"));

// switch (a) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvrtak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;
//   default:
//     console.log("Pogresan unos");
// }

// a = parseInt(prompt("Unesite broj od 0 - 100"));

// switch (true) {
//   case a > 0 && a < 30:
//     console.log("Low");
//     break;
//   case a > 30 && a < 60:
//     console.log("Medium");
//     break;
//   case a > 70 && a < 100:
//     console.log("High");
//     break;
// }

// for (i = 7; i > 0; i--) {
//   console.log(i);
// }

// pocetna = parseInt(prompt("Unesite pocetni broj"));
// krajnja = parseInt(prompt("Unesite krajnju vrednost"));
// for (i = pocetna; i < krajnja; i++) {
//   console.log(i ** 3);
// }

// pocetna = parseInt(prompt("Unesite pocetni broj"));
// krajnja = parseInt(prompt("Unesite krajnju vrednost"));

// for (i = pocetna; (i = krajnja); i++) {
//   delioci = 0;
//   for (j = 1; j <= 1; j++) {
//     delioci++;
//   }
// }
// if (delioci === 2) {
//   console.log(i);
//   {
//   }
// }

// prvi = parseInt(prompt("Unesite prvi broj"));
// drugi = parseInt(prompt("Unesite drugi vrednost"));

// for (i = prvi; i < 9000; i++) {
//   if (i % prvi === 0 && i % drugi === 0) {
//     console.log(i);
//     break;
//   }
// }

// kolicina=prompt("Unesi kolicinu");
// sum="";
// for(i=0;i<kolicina;i++){
//     unos=prompt("Unesi slova")

// a = 6;
// sumFakt = 0;
// for (i = 1; i <= a; i++) {
//   fakt = 1;
//   for (j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }
//   sumFakt += fakt;
// }
// console.log(sumFakt);

// var1 = 5;
// fakt = 1;

// for (i = 1; i <= var1; i++) {
//   fakt = fakt * i;
//   console.log(fakt);
// }
// console.log(fakt);

// for (i = 1; i <= 10; i++) {
//   red = "";
//   for (j = 1; j <= 10; j++) {
//     red += `${j * i}\t`;
//   }
//   console.log(red);
// }
// unos = prompt("Unesi rec");

// while (unos.length < 5) {
//   unos = prompt("Greska pokusajte ponovo");
// }

// unos = parseInt(prompt("Unesite broj ili END"));

// while (unos !== "END") {
//   unos = prompt("Unesite broj ili END");
// }

// unos = parseInt(prompt("Unesite broj"));
// sum = 0;
// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("Unesite negativan broj"));
// }
// console.log(sum);

// unos = prompt("Unesite ime");

// while (unos !== "END") {
//   console.log(unos);
//   unos = prompt("Unesi opet");
// }
// console.log("KRAJ");

// unos = parseInt(prompt("Unesite ocenu"));
// sum = 0;
// brojac = 0;
// while (unos >= 1 && unos <= 5) {
//   sum += unos;
//   brojac++;
//   unos = parseInt(prompt("Unesite ocenu"));
// }
// console.log(sum / brojac);

// broj = Math.round(Math.random() * 10);
// unos = parseInt(prompt("Unesi broj"));
// while (unos !== broj)
//   if (unos > broj) {
//     unos = parseInt(prompt("Broj je veci"));
//     unos = parseInt(prompt("Broj je manji"));
//   }
// console.log("Pogodili ste broj");

// {
// }

// operator = prompt("Unesi operaciju");
// while (operacija !== "STOP") {
//   prviBroj = parseInt(prompt("Unesite prvi broj"));
//   drugiBroj = parseInt(prompt("Unesite drugi broj"));
//   if (operator === "+") {
//     console.log(prviBroj + drugiBroj);
//   } else if (operator === "-") {
//     console.log(prviBroj - drugiBroj);
//   } else if (operator === "*") {
//     console.log(prviBroj * drugiBroj);
//   } else if (operator === "/") {
//     console.log(prviBroj / drugiBroj);
//   }
//   operator = prompt("Unesi operaciju");
// }

// tezina = parseInt(prompt("Unesite tezinu"));
// visina = parseInt(prompt("Unesite visinu"));
// bmi = tezina / visina ** 2;
// if ((bmi = 18.5)) {
//   console.log("Underweight");
// } else if (bmi < 25.0) {
//   console.log("Normal");
// } else if (bmi < 30) console.log("Overweight");
// else if (bmi > 30) {
//   console.log("Obese");
// }

// unos = parseInt(prompt("Unesite broj"));
// brojac = 1;
// while (brojac <= unos) {
//   if (brojac % 2 !== 0) console.log(brojac);
// }
// brojac++;

// unos = prompt("Unesite broj");
// while (unos !== "STOP") {
//   if (unos == 0) {
//     console.log("ZERO");
//   } else if (unos > 0) {
//     console.log("POSITIVE");
//   } else if (unos < 0) {
//     console.log("NEGATIVE");
//   }
// }

// pocetna = prompt("Unesite pocetnu vrednost");
// kranjnja = prompt("Unesite krajnju vrednost");
// for (i = pocetna; i <= kranjnja; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// unos = prompt("Unesite string");
// novi = "";
// for (i = 0; i < unos.length - 1; i++) {
//   if (i === 0) {
//     novi += unos[0].toUpperCase();
//   }
//   if (unos[i] === " ") {
//     novi += unos[i + 1].toUpperCase();
//   } else {
//     novi += unos[i + 1];
//   }
// }
// console.log(novi);

// unos = parseInt(prompt("Unesi minute"));
// sati = Math.floor(unos / 60);
// minute = unos % 60;
// console.log("Sati", sati);
// console.log("Minute", minute);

// arr = [];
// kolicina = parseInt(prompt("Unesi kolicinu"));
// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesite element");
//   arr[i] = el;
// }
// console.log(arr);
// for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// arr = [];
// kolicina = parseInt(prompt("Unesi kolicinu"));
// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesite element");
//   arr[i] = el;
// }
// console.log(arr);
// for (i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);

// sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// arr = [2, 12, 1, 7, 19, 74, 23, 4, 3];
// max = arr[0];
// for (i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// food1 = ["Noodle", "Pasta", "Ice Cream"];
// food2 = ["Pizza", "Ice Cream", "Fries"];
// sameFood = [];
// for (i = 0; i < food1.length; i++) {
//   for (j = 0; j < food2.length; j++) {
//     if (food1[i] === food2[j]) sameFood.push[i];
//   }
// }

// console.log(sameFood);

// data = [1, 2, 3, 2, 1];
// newData = [];

// for (el of data) {
//   if (el !== 2 && el !== 1) newData.push(el);
// }
// console.log(newData);

// kolicina = parseInt(prompt("Koliko zelite elemenata?"));
// elements=[]
// for(i=0;i<kolicina;i++){
//     el=prompt("Unesi element")
//     elements.push(el)
// }
// console.log(elements);

// data = [3, 21, 32, 36, 37, 56, 8, 12, 16, 18, 20, 68, 69];
// console.log(data);

// unos = parseInt(prompt("Indeks kojeg broja zelite da nadjete?"));
// for (i = 0; i < data.length; i++) {
//   if (data[i] === unos) {
//     console.log("Vas broj je na indeksu: ", i);
//     break;
//   }
// }

// arr1 = [3, 21, 32, 36, 37, 56];
// arr2 = [3, 21, 32, 36, 37, 56];
// tacnost = true;

// if (arr1.length !== arr2.length) {
//   console.log("Nisu isti");
//   tacnost = false;
// } else if (tacnost) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       tacnost = false;
//       break;
//     }
//   }

//   if (tacnost) {
//     console.log("Isti su");
//   } else {
//     console.log("Nisu");
//   }
// }

// a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// sum = 0;
// for (i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log(sum / a.length);

// arr = [3, 6, 0, 23, 0, 9, 44, 144, 0, 83, 22, 5, 0, 1];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     arr.push(0);
//   }
// }
// console.log(arr);

// arr = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// min = [0];
// max = [0];
// for (el of arr) {
//   if (el > max) {
//     max = el;
//   } else if (min > el) min = el;
// }
// console.log("Razlika je:", max - min);

// arr = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// sadrzi = false;
// for (el of arr) {
//   if (el === 67 || el === 87) {
//     sadrzi = true;
//   }
// }
// console.log(sadrzi);

// arr = [3, 6, 23, 9, 444, 14, 831, 22, 5, 1, 5555];
// max = arr[0];
// for (el of arr) {
//   if (Math.abs(el) > Math.abs(max));
//   max = el;
// }
// console.log(max);

// arr = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];

// function sum() {
//   unos1 = parseInt(prompt("Unesite prvi broj"));
//   unos2 = parseInt(prompt("Unesite drugi broj"));
//   console.log(unos1 + unos2);
// }
// sum();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(3, 5);
