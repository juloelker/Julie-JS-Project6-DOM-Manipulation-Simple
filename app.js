//get elements by class name
//manipulate items from a bulleted list,
//style and text content
// const bulletItems = document.getElementsByClassName("bullet-item");
// console.log(bulletItems); //returns an HTML collection of all 5 bulleted items
// console.log(bulletItems[3]); //returns "list item d"
// bulletItems[2].style.color = "gold"; //change "list item c" to yellow text

//I once had a web dev company submit a mock-up of our company website
//with yellow text on a white background. They were a graphics company. It sucked.
// bulletItems[1].textContent = "b: Julie this better work."; //change to "list item b"
// bulletItems[2].innerHTML = "c: Don't know if this one will work."; //change to "list item c"
// bulletItems[3].innerText = "d: Don't know if this one will work either."; //change to "list item d"
// bulletItems[4].innerText = "e: They all work! HaHa!"; //last item

//get elements by tag name, only the list-item tags under the ordered list
//manipulate items
// const numberItems = document
//   .querySelector(".number-list")
//   .getElementsByTagName("li");
// console.log(numberItems);
// numberItems[1].textContent = "tangerine";
// numberItems[2].innerHTML = 1 + 1;
// numberItems[3].innerText = "seafoam";
// numberItems[4].innerText = "navy";

//query selector
//manipulate items, and make array from a collection
const numberItems = document
  .querySelector(".number-list")
  .getElementsByTagName("li");
// console.log(numberItems);
const numberArray = Array.from(numberItems);
// console.log(numberArray);

//change text content of a list item, using numberItems
// numberItems[1].textContent = "tangerine";
// numberItems[2].innerHTML = 1 + 1;
// numberItems[3].innerText = "seafoam";
// numberItems[4].innerText = "navy";

//change text content of a list item, using numberArray
// numberArray[0].textContent = "burgundy";
// numberArray[1].textContent = "peach";
// numberArray[2].innerHTML = "golden";
// numberArray[3].innerText = "forest green";
// numberArray[4].innerText = "sky blue";
// numberArray[5].textContent = "violet";

//change text content of every number item
//in the array with forEach, only works on arrays,
//not on HTML collections
// numberArray.forEach(function (li) {
//   //console.log(li.className);
//   li.textContent = `Hello Julie`;
// });

//highlight even or odd items
//with forEach
// const ulItems = document.querySelectorAll("ul.bullet-list li.bullet-item");
// console.log(ulItems);
const evens = document.querySelectorAll("ul.bullet-list li:nth-child(even)");
const odds = document.querySelectorAll("ul.bullet-list li:nth-child(odd)");
// console.log(evens);
// console.log(odds);
evens.forEach(function (li, index) {
  li.style.background = "#f1f1f1";
});

odds.forEach(function (li, index) {
  li.style.background = "#dcf8c6";
});

//Reverse the order of items in the array.
//This reverses order of the array created from
// the HTML collection in the console.
//Does not reverse the actual order of the elements.
// numberArray.reverse();
// console.log(numberArray);
