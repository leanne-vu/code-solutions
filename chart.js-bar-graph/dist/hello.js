
var myChart = document.getElementById('myChart').getContext('2d');
// Global Options
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';
function build() {
  var hello = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'N', 'O', 'D'],
      datasets: [{
        label: 'Workouts',
        data: [
          123,
          546,
          212,
          390,
          80
        ],
        backgroundColor: ['yellow'],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 2,
        hoverBorderColor: 'red'
      }]
    },
    options: {}
  });
  return hello;
}
build();
