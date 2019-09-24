var s1 = {
    label: 's1',
    borderColor: 'blue',
    data: [
      { x: '2017-01-06 18:39:30', y: 100 },
      { x: '2017-01-07 18:39:28', y: 101 },
    ]
  };
  
  var s2 = {
    label: 's2',
    borderColor: 'red',
    data: [
      { x: '2017-01-07 18:00:00', y: 90 },
      { x: '2017-01-08 18:00:00', y: 105 },
    ]
  };
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [s1, s2] },
    options: {
      scales: {
        xAxes: [{
          type: 'time'
        }]
      }
    }
  });