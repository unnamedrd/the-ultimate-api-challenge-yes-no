// API
const API_ENDPOINT = 'https://yesno.wtf/api';

const answer = document.querySelector('#answer');
const button = document.querySelector('#button');

button.addEventListener('click', console.log('clicked'))

function fetchAnswer() {

    fetch(API_ENDPOINT)
        .then(function (response) {
            answer.innerHTML = response.data
        })
        .catch(function (err) {
            //error
        });
    
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
