//Task 2: Add Event Listeners for Product Selection 

document.addEventListener(`DOMContentLoaded`),() => {
    const sizeSelector =document.getElementById(`size-selector`);
    const productPrice = document.getElementById(`product-price`);
    const purchaseButton =document.getElementById(`purchase-button`);
    const addProductForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-list');

    sizeSelector.addEventListener(`change`, () => {
        const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
        const newPrice = selectedOption.getAttribute(`data-price`);
        const stockStatus = selectedOption.getAttribute(`data-stock`);

//Task 3: Handle Stock Availability
        productPrice.textContent= newPrice;
        if(stockStatus === `out-of-stock`){
            purchaseButton.disabled = true;
        }else{
            purchaseButton.disabled =false;
        }
});
};

//Task 4: Create a Checkout Event

purchaseButton.addEventListener(`click`, () => {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute(`data-stock`);
    if (stockStatus === `in-stock`) {
        alert(`Thank you for shopping with us!!!`);
    } else {
        alert(`Sorry for the inconvinece this is out of stock :(`);
    }
});