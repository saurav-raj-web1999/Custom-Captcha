const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1', '2', '3', '4', '5', '6', '7', '8', '9', '0' , 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const captcha = document.querySelector('.captcha-text');
const refreshCaptcha = document.querySelector('.reload');
const submitCaptcha = document.querySelector('.submit');
const userText = document.querySelector('input');
const message = document.querySelector('.text-area');

const clear = ()=>{
    message.style = "display: none;"

}

const generateCaptcha = ()=>{
    clear();
    captcha.innerText="";
    for(let i=0; i<6; i++){
        captcha.innerText +=` ${alphabets[Math.floor(Math.random()*alphabets.length)]}`;
    }
}

generateCaptcha();
refreshCaptcha.addEventListener('click', ()=>{
    generateCaptcha();
})

submitCaptcha.addEventListener('click', e=>{
    // e.defaultPrevented();
    let text = userText.value.split('').join(' ');
    if(text == captcha.innerText){
        message.style = "display: block; color: green;"
        message.innerText = "Nice you entered correct captcha!";
    }
    else{
        message.style = "display: block; color: rgb(159, 0, 0)";
        message.innerText = "You entered wrong captcha!"
    }
})