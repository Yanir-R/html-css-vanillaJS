const prices = {
    small: 2.5,
    medium: 4.66,
    large: 9
}
let data = {
    firstName: '',
    lastName: '',
    email: '',
    totalAmount: 0,
    quantities: {
        small: 0,
        medium: 0,
        large: 0
    },
}

function add(itemType) {
    data.quantities[itemType]++;
    data.totalAmount += prices[itemType];
    updateQuantity(itemType);
    updateBalance();
}

function remove(itemType) {
    if (data.quantities[itemType] === 0) {
        alert('You do not have any packages');
        return;
    }
    data.totalAmount -= prices[itemType];
    data.quantities[itemType]--;
    updateQuantity(itemType);
    updateBalance();
}

function updateQuantity(itemType) {
    const quantityInput = document.querySelector(`.quantityInput#${itemType}`)
    quantityInput.innerText = data.quantities[itemType]
}

function updateCheckout(countElem, rowElem, quantity) {
    const countSpan = document.getElementById(countElem)
    const itemRow = document.getElementById(rowElem)
    countSpan.innerHTML = quantity
    itemRow.setAttribute('data-count', quantity)
}

function updateBalance() {

    const totalSmall = data.quantities.small * prices.small;
	updateCheckout('quantityInputNumberSmall', 'bottlePackSmallSummary', data.quantities.small)
	
    const totalMedium = data.quantities.medium * prices.medium;
	updateCheckout('quantityInputNumberMedium', 'bottlePackMediumSummary', data.quantities.medium)
	
    const totalLarge = data.quantities.large * prices.large;
    updateCheckout('quantityInputNumberLarge', 'bottlePackLargeSummary', data.quantities.large)

    const totalAmount = document.getElementById('totalAmount');
    totalAmount.innerText = `$${parseFloat(totalSmall + totalMedium + totalLarge).toFixed(2)}`

    save();

}

function save() {
    localStorage.setItem('data', JSON.stringify(data));
}

function load() {
    const rawData = localStorage.getItem('data');
    if (!rawData) {
        return;
    }
    data = JSON.parse(rawData)
    updateQuantity('small')
    updateQuantity('medium')
    updateQuantity('large')
    updateBalance();
}

function onOverlay() {
	const firstnameOverlay = document.getElementById('firstnameOverlay');
	firstnameOverlay.innerHTML = data.firstName.value
	document.getElementById("overlay").style.display = "block";
	
	const lastnameOverlay = document.getElementById('lastnameOverlay');
	lastnameOverlay.innerHTML = data.lastName.value
	document.getElementById("overlay").style.display = "block";

	// const numberOfBottleOverlay = document.getElementById('numberOfBottleOverlay');
	// numberOfBottleOverlay.innerHTML = data.quantities
	// document.getElementById("overlay").style.display = "block";

	// const orderPackgesOverlay = document.getElementById('orderPackgesOverlay');
	// orderPackgesOverlay.innerHTML = data.quantities
	// document.getElementById("overlay").style.display = "block";

}

function off() {
	document.getElementById("overlay").style.display = "none";
  }

load();