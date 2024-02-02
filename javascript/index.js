function updateTime() {
  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");

  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
  sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
