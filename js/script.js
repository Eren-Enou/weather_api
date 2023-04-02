const APIKey = "4ef62e41eaa84670ac6193749230204";

const form = document.querySelector('#weatherSearchForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    var city_name = document.querySelector('#city_name')
})




const getData = async (city_name) => {
    let response  = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city_name}&aqi=no`);
    if (response.ok) {
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
        return null;
    }
}

const loadData = async() => {
    clearData()
    let weather = await getData(city_name.value)
    console.log(weather);
    let weather_location = weather.location;
    let weather_current = weather.current;
    console.log(weather_location);
    console.log(weather_current);
    createList(weather_location.name, weather_current.temp_f, weather_current.feelslike_f, weather_current.humidity)
}

const DOM_Elements = {
    weather_list: '.weather-list',
    weather_image: '.weather-image'
}

const createList = (city, current, feels_like, humidity) => {
    const html = `<div class="card">
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><h2>${city} ${Math.floor(current)}°F</h2></li>
        <li class="list-group-item"><b>Feels like:</b> ${feels_like}</li>
        <li class="list-group-item"><b>Humidity:</b> ${humidity}%</li>
        </ul>
    </div>
    <br>`

    document.querySelector(DOM_Elements.weather_list).insertAdjacentHTML('beforeend', html)
}

const clearData = () => {
    document.querySelector(DOM_Elements.weather_list).innerHTML="";
}