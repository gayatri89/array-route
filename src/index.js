const trip = (routes) => {
  let countries = [];
  let source = "";
  let destination = "";

  for (let i = 0; i < routes.length; i++) {
    source = routes[i][0];
    destination = routes[i][1];

    let j = 0;
    while (j < routes.length && routes[j][1] !== source) {
      j++;
    }

    if (j >= routes.length) {
      countries.push(source);
      routes.splice(i, 1);
      break;
    }
  }

  while (routes.length !== 0) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === destination) {
        countries.push(routes[i][0]);
        destination = routes[i][1];
        routes.splice(i, 1);
        break;
      }
    }
  }
  countries.push(destination);
  return countries;
};

const tickets = [
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["USA", "BRA"],
  ["UAE", "JPN"]
];

const response = trip(tickets);
console.log(`result: "${response.join(",")}"`);
document.getElementById("app").innerHTML = `result: "${response}"`;
