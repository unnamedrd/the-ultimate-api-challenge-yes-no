// API
const API_ENDPOINT = 'https://yesno.wtf/api';

const answer = document.querySelector('#answer');
const button = document.querySelector('#button');

button.addEventListener("click", fetchAnswer);

function fetchAnswer() {

    fetch(API_ENDPOINT, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            answer.innerHTML = response.answer
            clearAnswer()
        })
        .catch(function (err) {
            errorMsg()
        });

}

function clearAnswer() {
    
    setTimeout(function () {
        answer.innerHTML = " ";
    }, 3000)
  
}
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
