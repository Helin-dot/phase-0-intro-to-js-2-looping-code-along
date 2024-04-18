// Code your solutions in this file


function writeCards(messages){
    let thankYouMessages = [];
    
    for (let i=0; i<messages.length; i++){
        thankYouMessages.push(`Thank you, ${messages[i]}, for the wonderful surprise gift!`); 
    }
   return thankYouMessages;
}


function countDown(number){
    for (let i=number; i>=0; i--){
        console.log(i);
    }
}

console.log(countDown(100))