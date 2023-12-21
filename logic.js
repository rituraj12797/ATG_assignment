const loginExisting = document.querySelector('.login_existing');
const signup = document.querySelector('.signup');
const darkDiv = document.querySelector('.dark_div');
const body = document.querySelector('body');
const login = document.querySelector('.login');
const cancelButtonSignin = document.querySelector('.cancel_button_signin');
const cancelButtonSignup = document.querySelector('.cancel_button_signup');
const createAccount = document.querySelector('.create_account');
let joinButton = document.querySelector('.join_group'); 

let joinState = false;

const toggleJoinButton = () => {
    console.log("Join button clicked");
    joinButton.innerHTML = joinState ? "Join Group" : "Leave Group";
    joinState = !joinState;
}

//  function to toggle visibility
const toggleVisibility = (element, isVisible) => {
    element.classList[isVisible ? 'add' : 'remove']('visible');
}


const handleCancelButtonClick = (element) => {
    darkDiv.style.visibility = 'hidden';
    body.classList.remove('stop_scroll');
    toggleVisibility(element, false);
}

loginExisting.addEventListener('click', () => {
    toggleVisibility(signup, false);
    toggleVisibility(login, true);
});

createAccount.addEventListener('click', () => {
    toggleVisibility(login, false);
    toggleVisibility(signup, true);
});

cancelButtonSignin.addEventListener('click', () => {
    handleCancelButtonClick(login);
});

cancelButtonSignup.addEventListener('click', () => {
    handleCancelButtonClick(signup);
});

joinButton.addEventListener('click', toggleJoinButton);