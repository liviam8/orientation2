
const $username = document.querySelector('#username');
const $usernameError = document.querySelector('.username.error');
const $form = document.querySelector('form');

console.log($username);
console.dir($username);
console.log($username.value);

const usernameRegex = /[A-z]+/;

$username.addEventListener('keyup', (event) => {
    // usernameRegex.test(event.target.value);
    if (!event.target.value.match(usernameRegex)) {
        console.log('wrong input');
    } else if (event.target.value.length < 5) {
        console.log('You should provide at least 5 characters');
        $usernameError.classList.remove('hidden');
    } else {
        console.log('All right');
        $usernameError.classList.add('hidden');
    }
});

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    if ($username.value.length < 3) {
        console.log('Something went wrong')
    } else {
        let email = document.getElementById('email-input').value;
        fetch('/subscribe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ "name": $username.value, 
                    "email": email })
        })
        .then((data) =>{
            console.log('Subscribed - ' + data);
        })
        .catch((message)=>{
            console.log('Error happend: ' +message);
        });
        console.log('Subscription happened');
    }
});


