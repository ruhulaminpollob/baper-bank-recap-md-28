 // withdraw button function 
 document.getElementById('withdraw').addEventListener('click', function () {
    // add withdraw amount
    const withdrawElement = document.getElementById('withdraw-value');
    const withdrawValueString = withdrawElement.value;
    const withdrawValue = parseFloat(withdrawValueString);
    withdrawElement.value = '';
    if (isNaN(withdrawValue) || withdrawValue <= 0 ){
        return;
    }
    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotalString);



    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalString);
    if (withdrawValue > newBalanceTotal) {
        alert('Insufficient Balance')
        return;
    }

    const withdrawTotal = withdrawValue + newWithdrawTotal;

    previousWithdrawTotal.innerText = withdrawTotal;   
    const balanceTotal =newBalanceTotal - withdrawValue;
    previousBalanceTotal.innerText = balanceTotal;
})