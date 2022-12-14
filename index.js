// Code your solutions in this file
// for (let age=30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
//     debugger;
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for ( let i=0; i < gifts.length; i++){
        // console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }



function writeCards(names, surprise) {
    let message= [];
    for (let i=0; i< names.length; i++ ) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    
    }
    return message;
}

function countDown(number) {
    let i= number;
    while (i >= 0 ) {
    console.log(i);
    i--;
    }
return number;
}

