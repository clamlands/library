// myLibrary is an array of objects
let myLibrary = [];

let buttons = []; // to be used as a Read Status button node list
let readStatus = []; // to be used as a node list for "Finished reading?" text content
let deleteButtons = []; // to be used as a node list for Delete buttons
let cardList = []; // nodelist of all the cards
const cards = document.getElementById("cards"); // points to the cards container

// Book constructor adds book objects to myLibrary

/*
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
*/

//Book class adds book objects to myLibrary
class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}



// takes user input and adds object to the myLibrary array
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    //calls createCard with the last item in the array as a parameter
    createCard(myLibrary[myLibrary.length - 1]); 
}

//for auto-population of cards
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "JK Rowling", "394", "Yes");
addBookToLibrary("Gone With the Breeze", "Joe Shmoe", "47", "Yes");
addBookToLibrary("The Guy that did Stuff", "Elisha Long", "428", "Yes");
addBookToLibrary("Butterflies and Rainbows", "Steven King", "280", "No");
addBookToLibrary("No Way", "Hydro Flask", "46", "Yes");
addBookToLibrary("Fairly Odd Parents", "Timmy Turner", "250", "No");
addBookToLibrary("Hey Arnold", "Mr. Universe", "666", "No");



// calling this function will create a card based on the last item in myLibrary array
function createCard(book) {
    //creates the element for the card itself
    const card = document.createElement("div");
    card.classList.add("card");  

    //creates a new div with text from the object. Appends it to the card div
    const div1 = document.createElement("div");
    const node1 = document.createTextNode('Title: ' + book.title);
    div1.appendChild(node1);
    card.appendChild(div1);

    const div2 = document.createElement("div");
    const node2 = document.createTextNode('Author: ' + book.author);
    div2.appendChild(node2);
    card.appendChild(div2);

    const div3 = document.createElement("div");
    const node3 = document.createTextNode('Pages: ' + book.pages);
    div3.appendChild(node3);
    card.appendChild(div3);

    const div4 = document.createElement("div");
    const node4 = document.createTextNode('Finished reading? ' + book.read);
    div4.appendChild(node4);
    div4.classList.add("read");
    card.appendChild(div4);
    
    const readButton = document.createElement("button")
    const node5 = document.createTextNode('Update Read Status')
    readButton.appendChild(node5);
    readButton.classList.add("toggle")
    card.appendChild(readButton);

    const deleteButton = document.createElement("button")
    const node6 = document.createTextNode('Delete')
    deleteButton.appendChild(node6);
    deleteButton.classList.add("delete")
    card.appendChild(deleteButton);

    cards.appendChild(card);


    readStatus.push(div4);
    buttons.push(readButton);
    deleteButtons.push(deleteButton);
    cardList.push(card);

    toggleRead(readStatus, buttons, myLibrary.length);
    deleteCard(deleteButtons, myLibrary.length);
}


// adds functionality to most recently created "Update Read Status" button
function toggleRead(lastReadStatus, lastButton, index){

    lastButton[index - 1].addEventListener("click", () => {
        if(myLibrary[index - 1].read === "Yes"){
            myLibrary[index - 1].read = "No";
        } else {
            myLibrary[index - 1].read = "Yes";
        }
        lastReadStatus[index - 1].textContent = 'Finished reading? ' + myLibrary[index - 1].read;
    })
}

// adds functionality to most recently created "Delete" button
function deleteCard(lastButton, index){
    lastButton[index - 1].addEventListener("click", () => {
        cardList[index - 1].remove();
    })
}


const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read")

// submit button to send user input to addBookToLibrary function
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    //checks that Auther, Title, and Pages vales are not empty
    if(titleInput.value === "" || authorInput.value === "" || pagesInput.value === ""){
        alert("not filled out!")
        return;
    }
    if(!(pagesInput.value > 0)){
        alert("pages must be greater than zero")
        return;
    }
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
});