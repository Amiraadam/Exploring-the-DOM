console.log(document);

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!';
}, 3000);

const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode');
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector('.fruits');

for(let i = 0; i < fruits.length; i++){
    const fruit = fruits[i];

    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

const fruitInputBox = document.querySelector('.fruitInputValue');
const addFruitButton = document.querySelector('.addFruitButton');

addFruitButton.addEventListener('click', function() {
    if (fruitInputBox.value.trim().length > 0) {
        const newFruit = fruitInputBox.value;
    
        const li = document.createElement('li');
        li.innerText = newFruit;
        fruitList.appendChild(li);
 
        fruitInputBox.value = '';
    }
});