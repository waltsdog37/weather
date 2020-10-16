// Weather app using OpenWeather API

let apiKey = "&units=metric&appid=73f750c25d847cd31222725efab61589";
let apiCall = "https://api.openweathermap.org/data/2.5/weather?q=";

// Allow submit with "Enter key"
let cityInput = document.getElementById("city-name");
cityInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("city-submit").click();
    }
});

// use search input to call API
function search() {
    city = document.getElementById("city-name").value;
    let searchURL = apiCall + city + apiKey;

    console.log(city);
    console.log(searchURL);

    fetch(searchURL)
        .then(response => response.json())
        .then((data) => {
            nameData = data.name;
            tempData = data.main.temp;
            typeData = data.weather[0].main;
            tempHighData = data.main.temp_max;
            tempLowData = data.main.temp_min;
            result();
        });
};

// use API retrieved of selected city to output results on page
function result() {
    document.getElementById("initial-container").style.display = "none";
    document.getElementById("results").style.display = "content";

    let city = document.getElementById("city");
    city.textContent = nameData;

    let type = document.getElementById("type");
    type.textContent = "Current Weather: " + typeData;
    image = "url('images/" + typeData + ".jpg')";
    console.log(image);
    document.body.style.backgroundImage = image;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100%";

    
    let temp = document.getElementById("temp");
    temp.textContent = "Current Temperature: " + Math.round(tempData);    

    let tempHigh = document.getElementById("high");
    tempHigh.textContent = "High: " + Math.round(tempHighData);

    let tempLow = document.getElementById("low");
    tempLow.textContent = "Low: " + Math.round(tempLowData);
};

function reset() {
    window.location = "index.html";
}
