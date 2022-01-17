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
