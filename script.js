const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

function addNew(text, div) {
    let newElement = document.createElement("p");
    let newText = document.createTextNode(JSON.stringify(text));
    let destination = document.getElementById(div);
    newElement.appendChild(newText);
    destination.appendChild(newElement);
}

const text1 = gotCitiesCSV.split(",");
addNew(text1, 1);

const text2 = bestThing.split(" ");
addNew(text2, 2);

let text3 = gotCitiesCSV.split(",");
text3 = text3.join(";");
addNew(text3, 3);

const text4 = lotrCitiesArray.join(",");
addNew(text4, 4);

const text5 = lotrCitiesArray.slice(0, 5);
addNew(text5, 5);

const text6 = lotrCitiesArray.slice(-5);
addNew(text6, 6);

const text7 = lotrCitiesArray.slice(2, 5);
addNew(text7, 7);

lotrCitiesArray.splice(2, 1);
addNew(lotrCitiesArray, 8);

lotrCitiesArray.splice(-2);
addNew(lotrCitiesArray, 9);

lotrCitiesArray.splice(2, 0, "Rohan");
addNew(lotrCitiesArray, 10);

lotrCitiesArray.splice(5, 1, "Deadest Marshes");
addNew(lotrCitiesArray, 11);

const text12 = bestThing.slice(0, 14);
addNew(text12, 12);

const text13 = bestThing.slice(-12);
addNew(text13, 13);

const text14 = bestThing.slice(23, 38);
addNew(text14, 14);

const text15 = bestThing.substring(23, 38);
addNew(text15, 15);

const text16 = bestThing.substr(23, 15);
addNew(text16, 16);

const text17 = bestThing.indexOf("only");
addNew(text17, 17);

const text18 = bestThing.lastIndexOf("bit");
addNew(text18, 18);

const array19 = gotCitiesCSV.split(",");
let text19 = [];
for (i = 0; i < array19.length; i++) {
    if (array19[i].includes("aa") || array19[i].includes("ee")) {
        text19.push(array19[i]);
    }
}
addNew(text19, 19);

let text20 = [];
for (i = 0; i < lotrCitiesArray.length; i++) {
    if (lotrCitiesArray[i].endsWith("or")) {
        text20.push(lotrCitiesArray[i]);
    }
}
addNew(text20, 20);

const array21 = bestThing.split(" ");
let text21 = [];
for (i = 0; i < array21.length; i++) {
    if (array21[i].startsWith("b")) {
        text21.push(array21[i]);
    }
}
addNew(text21, 21);

let text22 = "No";
if (lotrCitiesArray.includes("Mirkwood")) {
    text22 = "Yes";
}
addNew(text22, 22)

let text23 = "No";
if (lotrCitiesArray.includes("Hollywood")) {
    text23 = "Yes";
}
addNew(text23, 23)

const text24 = lotrCitiesArray.indexOf("Mirkwood");
addNew(text24, 24);

let text25 = ""
for (i = 0; i < lotrCitiesArray.length; i++) {
    if (lotrCitiesArray[i].includes(" ")) {
        text25 = lotrCitiesArray[i];
        break;
    }
}
addNew(text25, 25);

lotrCitiesArray.reverse();
addNew(lotrCitiesArray, 26);

lotrCitiesArray.sort();
addNew(lotrCitiesArray, 27);

function sortByLength(a, b) {
    if (a.length > b.length) {
        return 1;
      }
      if (a.length < b.length) {
        return -1;
      }
      return 0;
}
lotrCitiesArray.sort(sortByLength);
addNew(lotrCitiesArray, 28);

const popped29 = lotrCitiesArray.pop();
addNew(lotrCitiesArray, 29);

lotrCitiesArray.push(popped29);
addNew(lotrCitiesArray, 30);

const shifted31 = lotrCitiesArray.shift();
addNew(lotrCitiesArray, 31);

lotrCitiesArray.unshift(shifted31);
addNew(lotrCitiesArray, 32);