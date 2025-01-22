// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Selecting all like buttons
const likeButtons = document.querySelectorAll('.like');

// Function to handle like button click
function handleLikeClick(event) {
  const likeButton = event.target;

  // Mimic server call (fake server request)
  mimicServerCall()
    .then(() => {
      // If the call is successful, toggle the heart symbol
      if (likeButton.querySelector('.like-glyph').textContent === EMPTY_HEART) {
        likeButton.querySelector('.like-glyph').textContent = FULL_HEART;
        likeButton.classList.add('liked');
      } else {
        likeButton.querySelector('.like-glyph').textContent = EMPTY_HEART;
        likeButton.classList.remove('liked');
      }
    })
    .catch((error) => {
      // Show the modal with the error message if the server call fails
      const modal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
      modalMessage.textContent = error;
      modal.classList.remove('hidden');  // Show the modal
    });
}

// Adding event listener for each like button
likeButtons.forEach(button => {
  button.addEventListener('click', handleLikeClick);
});

// Function to hide the modal when clicked
const modal = document.getElementById('modal');
modal.addEventListener('click', () => {
  modal.classList.add('hidden'); // Hide the modal when it's clicked
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
