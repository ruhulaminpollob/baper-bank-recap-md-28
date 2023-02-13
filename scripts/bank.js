// deposit button  function 
document.getElementById('deposit').addEventListener('click', function () {
    // add deposit amount
    const depositElement = document.getElementById('deposit-value');
    const depositValueString = depositElement.value;
    const depositValue = parseFloat(depositValueString);
    depositElement.value = '';
    if (isNaN(depositValue) || depositValue <=0 ) {
        return;
    }
    const previousDepositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = previousDepositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotalString);


    const depositTotal = depositValue + newDepositTotal;
    
    previousDepositTotal.innerText = depositTotal;

    // adding to balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalString);

    const balanceTotal = depositValue + newBalanceTotal;
    previousBalanceTotal.innerText = balanceTotal;
})