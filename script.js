 // this function execute special ticket increase and decrease
 function ticketIncreaseDecrease(increase){
    const inputValue = document.getElementById('special-value');
    const countValue = parseInt(inputValue.value);
    // const newValue = countValue +1 ;
    let newValue = countValue;
    if (increase == true){
        newValue = countValue +1;
    }
    if(increase == false && countValue > 0){
        newValue = countValue -1;
    }
    inputValue.value = newValue;
    const specialTotalPrice = newValue * 150;
    document.getElementById('special-price').innerText ='$' + specialTotalPrice;
}
// increase ticket
document.getElementById('special-increase').addEventListener('click', function(){
    ticketIncreaseDecrease(true);
    totalAmount();
});
// dicrease ticket
 document.getElementById('special-decrease').addEventListener('click', function(){
    ticketIncreaseDecrease(false)
    totalAmount();
});


// this function economy ticket increase and decrease
function economyticket(economyIncrease){
    const inputValue = document.getElementById('economy-value');
    const countValue = parseInt(inputValue.value);
    // const newValue = countValue + 1;
    let newValue = countValue;
    if(economyIncrease == true){
        newValue = countValue + 1;
    }
    if(economyIncrease == false && countValue > 0){
        newValue = countValue - 1;
    }
    inputValue.value = newValue;
    const economyTotalPrice = newValue * 100;
    document.getElementById('economy-price').innerText = '$' + economyTotalPrice;
}
// economy decrease value
document.getElementById('economy-decrease').addEventListener('click', function(){
    economyticket(false);
    totalAmount();
});
// economy increase value
document.getElementById('economy-increase').addEventListener('click', function(){
    economyticket(true);
    totalAmount();

});

// this is sub total and total and tax
function totalAmount(){
 const specialValue = document.getElementById('special-value');
 const specialNewValue = parseInt(specialValue.value);

 const economyValue = document.getElementById('economy-value');
 const economyNewValue = parseInt(economyValue.value);

 const subTotalPrice = specialNewValue * 150 + economyNewValue * 100;
 document.getElementById('sub-total').innerText = subTotalPrice;

 const vatPrice = Math.round(subTotalPrice * 0.1);
 document.getElementById('tax').innerText = vatPrice;

 const totalAmount = vatPrice + subTotalPrice;
 document.getElementById('total').innerText = totalAmount;
}
// booking part
document.getElementById('booking').addEventListener('click', function(){
    document.getElementById('section-out').style.display ='none';
    document.getElementById('book-block').style.display = 'block';
 
})