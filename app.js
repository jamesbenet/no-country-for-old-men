
//get location value from select/option/button on click submit; the call get data function


const gun = document.querySelector('button')

////////////////////////////////////////////
// - WHEN USER CHOOSES A COUNTRY, CLICK EVENT TRIGGERS THIS FUNCTION.
// - FOUR OTHER FUNCTIONS ARE CONTAINED WITHIN, EACH ONE IS INVOKED 
///////SEQUENTIALLY TO GETS DATA FROM A DIFFERENT ENDPOINT OF THE API I'M USING
///////////////////////////////////////////



gun.addEventListener('click', (e) => {
  e.preventDefault()
  removeUserChoice()
  
  const location = document.querySelector('select').value
  getGunDeaths(location)
  getGunDeathRate(location)
  getGunsOwned(location)
  getGunsOwnedRate(location)
})

////////////////////////////////////////////
// - THIS IS THE FIRST FUNCTION INVOKED ABOVE
// - IT GETS THE TOTAL GUN DEATHS IN SELECTED COUNTRY
// - IT ALSO INVOKES THE showDeathData() TO DISLPAY THE DATA 
// - THE THREE FUNCTIONS AFTER IT OPERATE THE SAME WAY
//////// EACH HAVE THEIR OWN UNIQUE SHOW DATA FUNCTION
///////////////////////////////////////////


const getGunDeaths = async (countryId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=${countryId}&format=raw` 
  try {
    const response = await axios.get(url)
    console.log(response)
    let gunDeaths = response.data.result 
    // display results on page 
    showDeathData(gunDeaths)
  }
  catch (error) {
    console.error(error)
  }
}

////////////////////////////////////////////
// - RATE OF GUN DEATHS (2nd endpoint)
///////////////////////////////////////////

const getGunDeathRate = async (countryId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=rate_of_all_gun_deaths_per_100_000_people&location_id=${countryId}&format=raw` 
  try {
    const response = await axios.get(url)
    // console.log(response)
    let gunDeathRate = response.data.result 
    //display results on page 
    showDeathRate(gunDeathRate)
  }
  catch (error) {
    console.error(error)
  }
}

////////////////////////////////////////////
// - CIVILIAN GUNS OWNED(3rd endpoint)
///////////////////////////////////////////

const getGunsOwned = async (countryId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=number_of_privately_owned_firearms&location_id=${countryId}&format=raw` 
  try {
    const response = await axios.get(url)
    console.log(response)
    let gunsOwned = response.data.result
    console.log(gunsOwned)
    //display results on page 
    showGunsOwned(gunsOwned)
  }
  catch (error) {
    console.error(error)
  }
}

////////////////////////////////////////////
// - CIVILIAN GUNS OWNED(4th endpoint)
///////////////////////////////////////////

const getGunsOwnedRate = async (countryId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=rate_of_civilian_firearm_possession&location_id=${countryId}&format=raw` 
  try {
    const response = await axios.get(url)
    console.log(response)
    let gunsOwnedRate = response.data.result 
    console.log(gunsOwnedRate)
    //display results on page 
    showGunsOwnedRate(gunsOwnedRate)
  }
  catch (error) {
    console.error(error)
  }
}

////////////////////////////////////////////
// -  THE FOUR FUNCTIONS BELOW DISPLAY DATA 
// -  TO EMPTY DIV ON WEBPAGE
// -  EACH ARE UNIQUE TO THE FUNCTION THAT INVOKES THEM
///////////////////////////////////////////

function showDeathData(data) {
  let gunData = `
  <h1 id="country-name">${data.location}</h1>
  <p> <h4>Number of total gun deaths, by year:</h4> ${data.columnValue} </p>
  `
  document.querySelector('#country-data').insertAdjacentHTML('afterbegin', gunData)
  return gunData
}

function showDeathRate(data) {
  let gunData = `
  <p> <h4>Rate of All Gun Deaths per 100,000 People:</h4> ${data.columnValue} </p>
  `
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

function showGunsOwned(data) {
  let gunData = `<p><h4>The estimated total number of guns (both licit and illicit) held by civilians is:</h4> ${data.columnValue}</p>`
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

function showGunsOwnedRate(data) {
  let gunData = `<p><h4>The estimated rate of private gun ownership (both licit and illicit) per 100 people is:</h4> ${data.columnValue}</p>`
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

//////////////////////////////////////////////////////////////////
// - REMOVE USERS' PREVIOUS SELECTION BEFORE DISPLAYING NEW CHOICE
//////////////////////////////////////////////////////////////////

function removeUserChoice() {
  const oldChoice = document.querySelector('#country-data')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}
