const api_key = "efa07c798f908491fa1f78219630df27";

let temperature = 0;
let data;

async function getWeather(){
 const city = document.getElementById("cityDropdown").value;

 if(city==""){
  alert("Please select a city");
  return;
 }
 console.log(city);
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

 const response = await fetch(url);
 data = await response.json();

 if (data.cod == 404){
  throw new Error(data.message);
 }
 console.log(data);
 
 document.getElementById("unitToggle").checked = false;

 temperature = data.main.temp;
 updateUI(temperature, "°C");
}

function updateUI(temp, unit) {
 document.getElementById("weatherResult").innerHTML =`
  <h2>${data.name}</h2>
  <h3>Temperature ${temp} ${unit}</h3>
  <h3>Humidity ${data.main.humidity}</h3>
  <h3>Wind Speed ${data.wind.speed}</h3>
 `;
}

function toggleUnit(){
 if (!data) return;

 const isFahrenheit = document.getElementById("unitToggle").checked;

 if (isFahrenheit){
  let fahrenheitTemp = ((temperature * 9/5) + 32).toFixed(1);
  updateUI(fahrenheitTemp, "°F");
 }
 else {
  updateUI(temperature.toFixed(1), "°C");
 }
}