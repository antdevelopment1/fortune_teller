console.log('Hello I am here');

// Classes are for styling CSS
// "data-attributes" are for JavaScript


// 1. Make some code run when I click the button.
const triggerElement = document.querySelector('[data-trigger]');
const triggerElementHobbies = document.querySelector('[data-hobbies]');
const outputElement = document.querySelector('[data-output]');
const imageElement = document.querySelector('[data-image]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abort, Retry, Ignore.",
    "About time I got out the cookie.",
    "The world is your oyster.",
    "Thank god it's Friday."
];

const photos = [
    {
        text: "You will be ambushed by ninjas",
        url: "/images/waterfall.jpg"
    },
    {
        text: "You will be ambushed by popcorn",
        url: "/images/mountains.jpg"
    },
    {
        text: "You will be ambushed by hamburgers",
        url: "/images/prettytree.jpg"
    },
    {
        text: "You will be ambushed by paper towels",
        url: "/images/pexels-photo-236047.jpeg"
    },
];

let index = Math.floor((Math.random() * fortunes.length));
let photosIndex = 0;

// addEvenet Listeners that accepts two arguments
// a string that indentifies the kind of event to listen for
// a function that says what to do when the event happens

// Pagnation
triggerElement.addEventListener('click', function() {

  console.log('Hello event listener.')

  const newFortune = fortunes[index];

  outputElement.textContent = newFortune;

  index = Math.floor((Math.random() * fortunes.length));

  console.log(index);

});
triggerElementHobbies.addEventListener('click', function() {
    console.log('Connected');
    // photos.forEach(function() {

        imageElement.src = photos[photosIndex].url;

        console.log(photosIndex);

        photosIndex++;

        if (photosIndex === photos.length) {
            photosIndex = 0;
        } 
   
})
// 2. Write some text to the page on buttton click.

outputElement.addEventListener('click', function() {

});
// 3. Pull text from an array of text to write to the page.


