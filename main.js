// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.getElementsByClassName('like-glyph')
const errorBox = document.getElementById("modal")
const errorMsg = document.getElementById("modal-message")
errorBox.className = "hidden"
//errorBox.hidden = true

for (const button of heart) {
  button.addEventListener('click', () => {
//    e.preventDefault()

    mimicServerCall()

    .then(() => {
      if(button.className === "activated-heart"){
        button.textContent = EMPTY_HEART
        button.classList.remove("activated-heart")
      } else {
        button.textContent = FULL_HEART
        button.className = "activated-heart"
      }
    })

    .catch((serverError) => {
      //errorBox.className = false
      errorBox.classList.remove("hidden")
      errorMsg.textContent = serverError
      setTimeout(() => {errorMsg.setAttribute('class', 'hidden')}, 3000)
    })

  })
}

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
