
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validate();
});
function Datasend(){
    swal("Welcome "+username.value +"!"+ "Account Created Successfully", "success");
}

function Successmsg(){
    let formcontrol = document.getElementsByClassName('form-control');
    if(
    formcontrol[0].className === 'form-control success' && 
    formcontrol[1].className === 'form-control success' &&
    formcontrol[2].className === 'form-control success' &&
    formcontrol[3].className === 'form-control success' 
    ){
        Datasend();
    }
    else{
        return false;
    }
}

const validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    // validation starts

    //username validation
    if (usernameValue === '') {
        setErrormsg(username, "Username can't be blank");
    } else if (usernameValue.length <= 2) {
        setErrormsg(username, "Username should have minimum 3 characters");
    }
    else {
        setSuccessmsg(username, 'Correct Value');
    }

    //email validation
    if (emailValue === '') {
        setErrormsg(email, "Email can't be blank");
    } else if (!isemail(emailValue)) {
        setErrormsg(email, "Not a valid email");
    }
    else {
        setSuccessmsg(email, 'Correct Value');
    }

    //password1 validation
    if (password1Value === '') {
        setErrormsg(password1, "Password can't be blank");
    } else if (password1Value.length < 8) {
        setErrormsg(password1, "Password must contain 8 characters");
    }
    else {
        setSuccessmsg(password1, 'Correct Value');
    }

    // password2 validation
    if (password2Value === '') {
        setErrormsg(password2, "Password can't be blank");
    } else if (password1Value !== password2Value) {
        setErrormsg(password2, 'Passwords does not match');
    } else {
        setSuccessmsg(password2, 'Correct Value');
    }

    console.log(Successmsg());
}
function setErrormsg(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessmsg(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
    small.innerText = message;
}
const isemail = (email) => {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}



