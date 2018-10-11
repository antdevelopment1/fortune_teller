console.log('Hello I am here');

// Classes are for styling CSS
// "data-attributes" are for JavaScript


// 1. Make some code run when I click the button.
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abort, Retry, Ignore.",
    "About time I got out the cookie.",
    "The world is your oyster.",
    "Thank god it's Friday."
]

// addEvenet Listeners that accepts two arguments
// a string that indentifies the kind of event to listen for
// a function that says what to do when the event happens


triggerElement.addEventListener('click', function() {

  console.log('Hello event listener.')

  const newFortune = fortunes.pop();

  outputElement.textContent = newFortune;

});
// 2. Write some text to the page on buttton click.

outputElement.addEventListener('click', function() {

});
// 3. Pull text from an array of text to write to the page.


