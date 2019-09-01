var errorMessage = document.getElementById("erred");
var count = 0;
window.setInterval(function () {
  if (count == 0) {
    errorMessage.style.color = "1e1e1e";
    count = 1;
  } else if (count == 1) {
    errorMessage.style.color = "CB511D";
    count = 0;
  }
}, 500);

var ctx = document.getElementById('myChart');

var data = {
  datasets: [{
    label: "Testing it out",
    data: [80, 10],
    backgroundColor: [
      '#C1FDFF',
      '#1e1e1e'
    ],
    borderColor: [
      '#C1FDFF',
      '#1e1e1e'
    ],
    borderWidth: 1
  }]
}

var options = {
  cutoutPercentage: 70,
  maintainAspectRatio: false,
  responsive: true
}

var myDoughNutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

var ctx = document.getElementById('otroChart');

data = {
  datasets: [{
    label: "Testing it out",
    data: [60, 40],
    backgroundColor: [
      '#C1FDFF',
      '#1e1e1e'
    ],
    borderColor: [
      '#C1FDFF',
      '#1e1e1e'
    ],
    borderWidth: 1
  }]
}

options = {
  cutoutPercentage: 70,
  maintainAspectRatio: false,
  responsive: true
}

var myDoughNutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
