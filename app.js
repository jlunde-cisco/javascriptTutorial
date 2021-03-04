// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all


const listItem = document.querySelector('li.special');
console.log(listItem)
//listItem.style.color = 'red'


//returns an 'array-like' list
const classItem = document.getElementsByClassName('special');
console.log(classItem);
classItemList = [...classItem] // << puts array-like object into proper array
classItemList.forEach(function(item){
  item.style.color = 'red'
})
//classItem[0].style.color = 'red'


//const listItem = document.querySelectorAll('li.special.last');
//console.log(listItem[0]);
//listItem[0].style.color = 'blue'







// const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';
// 
// const item = document.querySelector('.special');
// // console.log(item);
// 
// const lastItem = document.querySelector('li:last-child');
// // console.log(lastItem);
// 
// const list = document.querySelectorAll('.special');
// 
// list.forEach(function(item) {
//   console.log(item);
//   item.style.color = 'yellow';
// });

