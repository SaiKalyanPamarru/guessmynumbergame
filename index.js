let secretNumber =Math.trunc(Math.random() * 20) + 1 ;

console.log(secretNumber);

let score = 20; 
let highscore = 0; 

const displayMessage = function(messagetodisplay){
    document.querySelector('.message').textContent = messagetodisplay;
}

document.querySelector('.checkusernumber').addEventListener('click', function(){
    const guess = Number( document.querySelector('.usernumber').value) ;

    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('⛔no number');
    }else if(guess === secretNumber){
        displayMessage('Correct number, You won !');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#c8e358'; 
        document.querySelector('.number').style.width = '10rem';

        if (score > highscore)
            highscore = score ; 
            document.querySelector('.highscoredetails').textContent = highscore; 
    }
        else if (guess!==secretNumber){
            if(score > 1){
                displayMessage( guess > secretNumber ? 'Too high' : 'Too low');
                score--; 
                document.querySelector('.scoredetails').textContent = score; 
            } else {
                displayMessage('You have lost the game'); 
                document.querySelector('.scoredetails').textContent = 0; 
            }
        }
        
});

document.querySelector('.btnagain').addEventListener('click', function (){
    score = 20 ; 
    secretNumber = Math.trunc(Math.random() * 20) +1;

    displayMessage('😀 Start guessing...')
    document.querySelector('.scoredetails').textContent = score; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.usernumber').value = '';

    document.querySelector('body').style.backgroundColor = 'rgb(243, 167, 233)';
    document.querySelector('.number').style.width = '8rem';


});
