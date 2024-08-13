function calculation(fieldName, price){
    // Calculation
    const inputField = document.getElementById(fieldName);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    if (isNaN(inputFieldValue)){
        const inputFieldValue = 1;
        const itemPrice = price;
        const totalItemBill = inputFieldValue * itemPrice;
        return totalItemBill;
    }
    else if (inputFieldValue < 0){
        const negativeZero = 0;
        return negativeZero;
    }
    else {
        const itemPrice = price;
        const totalItemBill = inputFieldValue * itemPrice;
        return totalItemBill;
    }
}

let couponInputFieldValueString = "";

document.getElementById("btn-coupon-apply").addEventListener("click", function(){
    const couponInputField = document.getElementById("coupon-input");
    couponInputFieldValueString = couponInputField.value;
    couponInputField.value = " ";
    // bug: want return couponInputFieldValueString
})

document.getElementById("btn-make-bill").addEventListener("click", function(){
    const totalGlassBill = calculation("glassQuantityInputField", 120);
    const totalShirtBill = calculation("shirtQuantityInputField", 180);
    const totalPantBill = calculation("pantQuantityInputField", 195);
    const totalShoeBill = calculation("shoeQuantityInputField", 210);
    const totalBill = totalGlassBill + totalShirtBill + totalPantBill + totalShoeBill;
    const element = document.getElementById("payBillAmount");
    if(couponInputFieldValueString === "OMG24"){
        const oneOfTotalBill = totalBill / 100;
        const twentyFourOfTotalBill = oneOfTotalBill * 24;
        const discount = totalBill - twentyFourOfTotalBill;
        element.innerText = Math.floor(discount);
    }
    else {
        element.innerText = totalBill;
        // console.log(parseInt(totalBill));
    }
})