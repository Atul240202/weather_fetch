let weather = {
    apikey: "816ace19d4e54437905a90cf5607c2d5",
     fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=metric&appid=" 
         + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, pressure } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,pressure,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description; 
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure;
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"

    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document
 .querySelector(".search button").addEventListener("click", function(){
     weather.search();
 });

 document .querySelector(".search-bar").addEventListener("keyup", function (event){
     if (event.key == "Enter") {
         weather.search();
     }
 });
 weather.fetchweather("Mumbai");
