function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  //let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do yyyy");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  /*losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
  "HH:mm:ss"
)} <small> ${losAngelesTime.format("A")} </small>`;*/

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do yyyy");
  parisTimeElement.innerHTML = parisTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
