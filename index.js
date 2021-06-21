// Code your solutions in this file
function writeCards(arr, event){
    let cards = []
    for(let i = 0; i <= arr.length - 1; i++){
        cards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num--;
    }
    
}
