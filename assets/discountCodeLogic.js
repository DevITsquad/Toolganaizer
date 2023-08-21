function formatText() {
    let inputValue = this.value;
    let formattedValue = inputValue.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
    if (document.getElementById('codeValue'))
        document.getElementById('codeValue').value = formattedValue;
    if (document.getElementById('codeValue-drawer'))
        document.getElementById('codeValue-drawer').value = formattedValue;
    saveDiscountCode(this.value);
}
function saveDiscountCode(discountCode) {
    localStorage.setItem('storedDiscount', discountCode);
}
function getDiscountCode() {
    return localStorage.getItem('storedDiscount');
}
function putDiscountCode() {
    const code = getDiscountCode();
    if (code) {
        if (document.getElementById('codeValue'))
            document.getElementById('codeValue').value = code;
        if (document.getElementById('codeValue-drawer'))
            document.getElementById('codeValue-drawer').value = code;
    }


}
function addDiscountCode(e) {
    const storedDiscount = localStorage.getItem('storedDiscount')
    saveDiscountCode('')
    if (storedDiscount) {
        console.log('first', window.location = window.location.origin + '/checkout?discount=' + storedDiscount)
        window.location = window.location.origin + '/checkout?discount=' + storedDiscount;
        
    } else {
        console.log('first', window.location = window.location.origin + '/checkout')
        window.location = window.location.origin + '/checkout';
    }

}
function notTriggerCart(e) {
    e.stopPropagation();
}

function onload() {
    console.log("i am loaded")
    putDiscountCode();
    const inputElement = document.getElementById('codeValue');
    const checkoutButton = document.getElementById('checkout-custom');
    const inputElementDrawer = document.getElementById('codeValue-drawer');
    const checkoutButtonDrawer = document.getElementById('CartDrawer-checkout-custom');

    console.log(checkoutButtonDrawer,inputElementDrawer,checkoutButton,inputElement)
    if (checkoutButton) {
        checkoutButton.addEventListener('click', addDiscountCode);
    }
    if (inputElement) {
        inputElement.addEventListener('input', formatText);
        inputElement.addEventListener('change', notTriggerCart);
    }
    if (inputElementDrawer) {
        inputElementDrawer.addEventListener('input', formatText);
        // inputElementDrawer.addEventListener('change', notTriggerCart);
    }


}

document.addEventListener('DOMContentLoaded', onload);

