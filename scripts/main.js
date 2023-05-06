window.onload = init;
function init() {
  document
    .getElementById("estimatetotalcost")
    .addEventListener("click", calculteResults);
}

//Result calculations
function calculteResults(e) {
  // bring in the ui variables
  const pickupdate = document.getElementById("pickupdate").value;
  const numberofdays = document.getElementById("numberofdays").value;
  const etolltag = document.getElementById("etolltag").checked;
  const gps = document.getElementById("gps").checked;
  const roadsideassist = document.getElementById("roadsideassist").checked;
  const above25 = document.getElementById("above25").checked;
  const under25 = document.getElementById("under25").checked;

  const carrental = 29.99;
  let surcharges = 00;
  let finaloptions = 00;
  let totaldue = 00;

  // calculate surcharges
  if (under25) {
    surcharges = carrental * 0.3; // 30% of base carrental
  } else {
    surcharges = 00;
  }

  // calculate options charges

  if (etolltag) {
    finaloptions = parseFloat(finaloptions) + 3.95;
  }
  if (gps) {
    finaloptions = parseFloat(finaloptions) + 2.95;
  }
  if (roadsideassist) {
    finaloptions = parseFloat(finaloptions) + 2.95;
  }

  //   calculate total due
  totaldue = (carrental + finaloptions + surcharges) * numberofdays;

  //   Display final Oputput to HTML
  document.getElementById("carrental").innerHTML = "$" + carrental;
  document.getElementById("finaloptions").innerHTML =
    "$" + finaloptions.toFixed(2);
  document.getElementById("surcharges").innerHTML = "$" + surcharges;
  document.getElementById("totaldue").innerHTML = "$" + totaldue;
}
