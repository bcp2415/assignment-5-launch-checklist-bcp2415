// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  if (testInput.trim() === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const launchStatus = document.getElementById("launchStatus");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    launchStatus.style.color = "rgb(65, 159, 106)";
  }
  return document;
}

 function  myFetch() {
  //let planetsReturned = 
  return fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then(
    function (result) {
      console.log(result);
      return result.json()
   .then(function (json) {
         console.log(json);
         return json;
      });
    }
  );
// return planetsReturned.then(function (result) {
//   return result;
// });
}

function pickPlanet(planets) {
  const chosenPlanet = planets[Math.floor(Math.random() * planets.length)];
  return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
