const IMAGES = [
    "/images/mountains.jpg",
    "/images/prettytree.jpg",
    "/images/waterfall.jpg",
    "/images/pexels-photo-236047.jpeg",
    "/images/mountains.jpg",
    "/images/prettytree.jpg",
    "/images/waterfall.jpg",
    "/images/pexels-photo-236047.jpeg",
    "/images/mountains.jpg",
    "/images/prettytree.jpg",
    "/images/waterfall.jpg",
    "/images/pexels-photo-236047.jpeg"
];

const thumbnailContainer = document.querySelector('[data-thumbnail]');
const bigger = document.querySelector('[data-biggerImage]');


function createImage(imageURL) {
    const theImage = document.createElement('img');
    theImage.setAttribute('src', imageURL);
    theImage.addEventListener('click', function(event) {
        console.log('Hello');
        console.log("this is the original image src" + bigger.src);
        console.log("this is the image i want to replace the original image with" + event.target.src);
        bigger.src = event.target.src
    })

    console.log('Image created');
    return theImage;
}

function createThumbnail(imageURL) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    console.log('Div Created');

    return theContainer;
 
}


// let index = 0;
// IMAGES[index] alternative to pass into createThumbnail  but also dont pass a paramter in the forEach function.

IMAGES.forEach(function(photo) {

    let testThumb = createThumbnail(photo);
    thumbnailContainer.appendChild(testThumb);
    console.log('All done!!!');

    // Targets each div/image every time the user clicks. Alternative to select target an element without data attribute
    // testThumb.addEventListener('click', function() {
    //     console.log('clicked');
    // })
    // index++;

})

// use addEventListener for the 'click' event on each image





// console.log('Hello I am here');

// // Classes are for styling CSS
// // "data-attributes" are for JavaScript


// // 1. Make some code run when I click the button.
// // const triggerElement = document.querySelector('[data-trigger]');
// const triggerElementHobbies = document.querySelector('[data-hobbies]');
// const outputElement = document.querySelector('[data-output]');
// const imageElement = document.querySelector('[data-image]');

// const fortunes = [
//     "You laugh now, wait till you get home.",
//     "Fortune not found: Abort, Retry, Ignore.",
//     "About time I got out the cookie.",
//     "The world is your oyster.",
//     "Thank god it's Friday."
// ];

// function createFortuneButton() {
//     const theButton = document.createElement('button');
//     theButton.textContent = 'Click here for a fortune';
//     theButton.setAttribute('data-trigger', '');

//     theButton.addEventListener('click', function() {

//         console.log('Hello event listener.')
      
//         const newFortune = fortunes[index];
      
//         outputElement.textContent = newFortune;

//         if (index > fortunes.length - 1) {
//             index = 0;
//         }
      
//         // index = Math.floor((Math.random() * fortunes.length));
      
//         // console.log(index);
      
//       });
    
//     return theButton;
// }

// function createButtonContainer() {
//     const butttonContainer = document.createElement('div');
//     butttonContainer.classList.add('buttonContainer');

//     // const theButton = createFortuneButton();
//     // butttonContainer.appendChild(theButton);
//     butttonContainer.appendChild(createFortuneButton());



//     return butttonContainer;
// }

// const photos = [
//     {
//         text: "You will be ambushed by ninjas",
//         url: "/images/waterfall.jpg"
//     },
//     {
//         text: "You will be ambushed by popcorn",
//         url: "/images/mountains.jpg"
//     },
//     {
//         text: "You will be ambushed by hamburgers",
//         url: "/images/prettytree.jpg"
//     },
//     {
//         text: "You will be ambushed by paper towels",
//         url: "/images/pexels-photo-236047.jpeg"
//     },
// ];

// let index = Math.floor((Math.random() * fortunes.length));
// let photosIndex = 0;

// // addEvenet Listeners that accepts two arguments
// // a string that indentifies the kind of event to listen for
// // a function that says what to do when the event happens

// // Pagnation
// // triggerElement.addEventListener('click', function() {

// //   console.log('Hello event listener.')

// //   const newFortune = fortunes[index];

// //   outputElement.textContent = newFortune;

// //   index = Math.floor((Math.random() * fortunes.length));

// //   console.log(index);

// // });

// triggerElementHobbies.addEventListener('click', function() {
//     console.log('Connected');
//     // photos.forEach(function() {

//     imageElement.src = photos[photosIndex].url;

//     console.log(photosIndex);

//     photosIndex++;

//     if (photosIndex === photos.length) {
//         photosIndex = 0;
//     } 
   
// })
// // 2. Write some text to the page on buttton click.

// outputElement.addEventListener('click', function() {

// });
// // 3. Pull text from an array of text to write to the page.


