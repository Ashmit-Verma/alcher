navigator.geolocation.getCurrentPosition(
  function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var userLatitude = latitude;
    var userLongitude = longitude;
    console.log("Latitude:", userLatitude);
    console.log("Longitude:", userLongitude);
    const apiKey = "2e343f0759f1e12c708eddf97a50bdce";
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=";
    async function checkWeather() {
      const response = await fetch(
        apiUrl + `${userLatitude}&lon=${userLongitude}&appid=${apiKey}`
      );
      var data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".hv").innerHTML = data.main.humidity + " %";
      document.querySelector(".temp").innerHTML = data.main.temp + " °C";
      document.querySelector(".press").innerHTML = data.main.pressure + " mb";
      document.querySelector(".speed").innerHTML = data.wind.speed + " kph";
      document.querySelector(".vd").innerHTML = data.visibility + " km";
      document.querySelector(".feels-like").innerHTML =
        data.main.feels_like + "°C";
      document.querySelector(".weather").innerHTML =
        data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const baseUrl = "https://openweathermap.org/img/wn/";
      const iconUrl = baseUrl + iconCode + ".png";
      const imgElement = document.getElementById("weather-icon");
      imgElement.src = iconUrl;

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const currentDate = new Date();

      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const date = currentDate.getDate();
      const month = monthsOfYear[currentDate.getMonth()];
      const formattedDate = `${dayOfWeek}, ${date} ${month}`;
      const currentDateElement = document.getElementById("date");
      currentDateElement.textContent = formattedDate;
    }
    checkWeather();
  },
  function (error) {
    console.error("Error:", error);
  }
);
