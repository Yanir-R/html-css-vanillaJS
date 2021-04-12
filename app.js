const prices = {small:2.5, medium: 4.66, large:9}
let data = {firstName:'', lastName:'', email:'', totalAmount:0, items:{small:0, medium: 0, large:0}, bottleInfo:{small:'6 BOTTLE PACK', medium: '12 BOTTLE PACK', large:'24 BOTTLE PACK'}}

function add(itemType){

	data.totalAmount += prices[itemType];
	data.items[itemType]++;

	updateGUI();
}

function remove(itemType){
	if(data.items[itemType] === 0){
		alert('you do not have any packages');
		return;
	}
	data.totalAmount -= prices[itemType];
	data.items[itemType]--;
	updateGUI();
}

function updateGUI(){
	const totalAmountSMall = document.getElementById('totalAmountSmall');
	const totalSmall = data.items.small * prices.small;
	// totalAmountSMall.innerText = totalSmall;

	const totalAmountMedium = document.getElementById('totalAmountMedium');
	const totalMedium = data.items.medium * prices.medium;
	// totalAmountMedium.innerText = totalMedium;

	const totalAmountLarge = document.getElementById('totalAmountLarge');
	const totalLarge = data.items.large * prices.large;
	// totalAmountLarge.innerText = totalLarge;

	const totalAmount = document.getElementById('totalAmount');
	totalAmount.innerText = totalSmall + totalMedium + totalLarge;
}

function save(){
	localStorage.setItem('data', JSON.stringify(data));
}

function load(){
	const rawData = localStorage.getItem('data');
	if(!rawData){
		return;
	}
	data = JSON.parse(rawData)

}

function updateAmount(that) {
    var number = document.getElementById('number');
      var num = parseInt(number.innerHTML);
      num = (that.value == "minus") ? --num : ++num;
      number.innerHTML = num;
    }

// function displayPattern(pattern) {
//     const $li = document.createElement('li')
//     $li.innerHTML = pattern.content
//     $li.setAttribute('id', pattern.id)
//     const deleteButton - document.createElement('button')
//     deleteButton.textContent = 'Remove this pattern from saves'
//     deleteButton.setAttribute('class', 'button-style')
//     $li.append(deleteButton)
//     patternList.append($li)
//     deleteButton.addEventListener('click', removePattern)
// }


// function createCard() {
//     const center = document.createElement('div')
//     center.classList.add('bottleBackgroundCenter')

//     const bestPriceBackground = document.createElement('div')
//     bestPriceBackground.classList.add('bestPriceBackground')
//     center.appendChild(bestPriceBackground)

//     const bestPriceBanner = document.createElement('div')
//     bestPriceBanner.classList.add('bestPriceBanner')
//     bestPriceBackground.appendChild(bestPriceBanner)
    

//     const bottlePositionCenter = document.createElement('div')
//     bottlePositionCenter.classList.add('bottlePositionCenter')
//     center.appendChild(bottlePositionCenter)

//     return center
    
// }

// function cardHandler() {
//     const cardContainer = document.querySelector('.cardContainer')
//     cardContainer.appendChild(createCard())
//     cardContainer.appendChild(createCard())
//     cardContainer.appendChild(createCard())
// }