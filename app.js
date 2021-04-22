

// https://cors-anywhere.herokuapp.com/
      

// Create dynamic dropdown menu from GET all countries (from dogs-code-along)
      // https://dog.ceo/api/breeds/list/all






//get location value on click submit; the call get data function
const gun = document.querySelector('button')
gun.addEventListener('click', () => {
  // e.preventDefault()
  // removeCountry()
  var myobj = document.getElementById("country-data")
  myobj.remove()
  const location = document.querySelector('select').value
  getGunDeaths(location)
  getGunDeathRate(location)
  getGunsOwned(location)
  getGunsOwnedRate(location)
})


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


function showDeathData(data) {


  let gunData = `
  <h1 id="country-name">${data.location}</h1>
  // <p> Number of total gun deaths, by year: ${data.columnValue} </p>
  `
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

function showDeathRate(data) {
  let gunData = `
  <p> Rate of All Gun Deaths per 100,000 People: ${data.columnValue} </p>
  `
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

function showGunsOwned(data) {
  let gunData = `<p>The estimated total number of guns (both licit and illicit) held by civilians is: ${data.columnValue}</p>`
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}

function showGunsOwnedRate(data) {
  let gunData = `<p>The estimated rate of private gun ownership (both licit and illicit) per 100 people is: ${data.columnValue}</p>`
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', gunData)
  return gunData
}



// console.log(gunDeathObject)
    // console.log(gunDeathObject.location_id)
    // console.log(gunDeathObject.location)
    // console.log(gunDeathObject.columnValue)
    // console.log(gunDeathObject.columnPreamble)
 // console.log(preamble)
    // console.log(Object.keys(response))
    // let gunDeathsList = Object.keys(response.data[0])
    // console.log(gunDeathsList)
    // setOptions(countryList)
    // return countryList
    // console.log(countryList)

    // function removeCountry() {
    //   // write code here
    //   // Make sure to call this function???
    //    const removeElememt = document.querySelector('#country-data')
    //    while (removeElememt.lastChild) {
    //      removeElememt.removeChild(removeElememt.lastChild)
    //    }
    //  }