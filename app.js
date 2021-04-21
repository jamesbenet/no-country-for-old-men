console.log("hello")


//ENDPOINT= TOTAL # OF GUN DEATHS BY LOCATION

      // https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=10&format=raw


// let id = 10

// async function gunDeathsByCountry(id) {
//   const url = `https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=${10}&format=raw'
//   `
  
//   try {
//     const results = await axios.get(url)
//     const info = results.data.drinks

//     info.forEach((info) => {
//       searchByDrinkId(info.idDrink)
//     })

//   }
//   catch (error) { 
//     console.log(error)
//   }
// }

      // Create dynamic dropdown menu from GET all countries (from dogs-code-along)
      // https://dog.ceo/api/breeds/list/all

const getOptions = async () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getlocations&format=raw' 
  try {
    const response = await axios.get(url)
    let countryList = Object.keys(response.data.message)
    // setOptions(countryList)
    // return countryList
    console.log(countryList)
  }
  catch (error) {
    console.error(error)
  }
}

getOptions()







      //ajax intro starter code solution--using country list URL

// const getData = () => {
  // Remove old element's
  // removePeople()

//   const url = 'https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=10&format=raw'

//   axios.get(url)
//     .then((res) => {
//       // console.log(res.data.results)
//       const response = res.data.results
//       console.log(response)
//     })
  
//   .catch((error) => {
//     console.error(error)
//   })


// }

// getData()









// https://www.freecodecamp.org/news/how-to-create-a-dropdown-menu-with-css-and-javascript/
//CLICKING ON DROPDOWN ELEMENT
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}
//SELECTING DROPDOWN OPTIONS
function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//trigger custom event
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout is used so transition is properly shown
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}
//CHANGING THE CURRENTLY SELECTED OPTION
function handleTitleChange(e){
	const result = document.getElementById('result');

	result.innerHTML = 'The result is: ' + e.target.textContent;
}

//MAIN CODE
//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);