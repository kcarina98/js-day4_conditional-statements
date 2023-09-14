// # Alter prüfen

function checkAge() {
  const age = Number(document.querySelector("#age").value);
  if (age >= 18) {
    document.querySelector(".outputAge").innerHTML = "Volljährig";
  } else {
    document.querySelector(".outputAge").innerHTML = "Minderjährig";
  }
}

// #Shisha

function checkShisha() {
  // const shishaTrue = Number(document.getElementById("shisha").value);

  if (document.getElementById("shisha").value >= 18) {
    document.querySelector(".outputShisha").innerHTML =
      "Du darfst Shisha rauchen";
  } else {
    document.querySelector(".outputShisha").innerHTML =
      "Du darfst noch keine Shisha rauchen, ist eh ungesund!";
  }
}

// #Differenz von 27

function getDifference() {
  const yourNum = Number(document.querySelector("#num").value);

  if (yourNum === 27) {
    document.querySelector(".outputDifference").innerHTML = 0;
  } else if (yourNum <= 27) {
    document.querySelector(".outputDifference").innerHTML = yourNum - 27;
  } else {
    document.querySelector(".outputDifference").innerHTML = (yourNum - 27) * 2;
  }
}

// # Luftqualität

function checkAirQuality() {
  const wert = Number(document.querySelector("#aqi").value);

  if (wert <= 50) {
    document.querySelector(".outputText1").innerHTML =
      "Level of health concern: Good ";
    document.querySelector(".outputText2").innerHTML =
      "Level of health effect: Little or no risk";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (wert > 50 && wert <= 100) {
    document.querySelector(".outputText1").innerHTML =
      "Level of health concern: Moderate ";
    document.querySelector(".outputText2").innerHTML =
      "Level of health effect: Acceptable quality";
    document.querySelector("body").style.backgroundColor = "yellow";
  } else {
    document.querySelector(".outputText1").innerHTML =
      "Level of health concern: Unhealthy for sensitive groups ";
    document.querySelector(".outputText2").innerHTML =
      "Level of health effect: Generable publics not likely affected";
    document.querySelector("body").style.backgroundColor = "darkorange";
  }
}
