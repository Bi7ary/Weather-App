var city="cairo"
var data;
var searchInput=document.getElementById("weather-search");
var cities;
var temp;
var condition;
var tempSecondDay;
var conditionSecondDay;
var tempThirdDay;
var condationThirdDay;
var rainChance;
var wind;
var windDiraction;
var date;
var dateSecondDay;
var dateThirdDay;
var rowData=document.getElementById("rowData")



async function search(cityName) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cityName}&days=3`);

    data=await response.json();
  
    getData()
    
    display()

}
search(city)

function getData() {
    cities=data.location.name;
    temp=data.current.temp_c;
    condition=data.forecast.forecastday[0].day.condition.text;
    tempSecondDay=data.forecast.forecastday[1].day.avgtemp_c;
    conditionSecondDay=data.forecast.forecastday[1].day.condition.text;
    tempThirdDay=data.forecast.forecastday[2].day.avgtemp_c;
    condationThirdDay=data.forecast.forecastday[2].day.condition.text;
    rainChance=data.forecast.forecastday[0].day.daily_chance_of_rain;
    wind=data.current.wind_kph;
    windDiraction=data.current.wind_dir
    date=data.forecast.forecastday[0].date;
    dateSecondDay=data.forecast.forecastday[1].date;
    dateThirdDay=data.forecast.forecastday[2].date;
}

searchInput.addEventListener("input",function(){
    city=searchInput.value;
    search(city);
})

function display(){
    
    rowData.innerHTML=`
    <div class="col-md-4 p-0 mb-5 rounded-3">
    <div class="weather-inner bg-dark text-white rounded-3 ">
      <div class="weather-head d-flex justify-content-center px-3 pt-2 bg-black rounded-top-3 ">
        <p>${date}</p>
      </div>
      <div class="weather-body rounded-3 p-4">
        <p class="text-secondary fs-4">${cities}</p>
        <p id="temp">${temp} ℃</p>
        <p class="text-info">${condition}</p>
      </div>
      <div class="d-flex justify-content-around weather-footer rounded-bottom-3">
        <div class="d-flex flex-column justify-content-center">
          <img src="images/icon-umberella.png" alt="">
          <p>${rainChance}%</p>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <img src="images/icon-wind.png" alt="">
          <p>${wind} km/h</p>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <img src="images/icon-compass.png" alt="">
          <p>${windDiraction}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 p-0 mb-5 rounded-bottom-3  ">
    <div class="weather-inner  text-white ">
      <div class="weather-head d-flex justify-content-center px-3 pt-2 bg-black  ">
        <p>${dateSecondDay}</p>
      </div>
      <div class="weather-body mt-5 d-flex flex-column align-items-center justify-content-center align-content-center rounded-bottom-3 p-4 ">
        <p class="text-secondary fs-3 mb-4">${cities}</p>
        <p class="mb-4 fs-3">${tempSecondDay} ℃</p>
        <p class="text-info mb-4">${conditionSecondDay}</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 p-0 mb-5 rounded-3 ">
    <div class="weather-inner text-white  rounded-3 ">
      <div class="weather-head d-flex justify-content-center px-3 pt-2 bg-black rounded-top-3 ">
        <p>${dateThirdDay}</p>
      </div>
      <div class="weather-body mt-5 d-flex flex-column align-items-center justify-content-center align-content-center rounded-bottom-3 p-4">
        <p class="text-secondary fs-3 mb-4">${cities}</p>
        <p class="mb-4 fs-3">${tempThirdDay} ℃</p>
        <p class="text-info mb-4">${condationThirdDay}</p>
      </div>
    </div>
  </div>
    `

}

