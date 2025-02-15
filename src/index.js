function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let miami = document.querySelector("#miami");
  let miamiDateElement = miami.querySelector(".date");
  let miamiTimeElement = miami.querySelector(".time");
  let miamiTime = moment().tz("US/Eastern");
  miamiDateElement.innerHTML = miamiTime.format("dddd, MMMM Do YYYY");
  miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");

  let sydney = document.querySelector("#sydney");
  let sydneyDateElement = sydney.querySelector(".date");
  let sydneyTimeElement = sydney.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let rome = document.querySelector("#rome");
  let romeDate = rome.querySelector(".date");
  let romeTimeElement = rome.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDate.innerHTML = romeTime.format("dddd, MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}<small></small></div>
        </div>
         <a href="index.html">Back to all cities</a>`;
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
