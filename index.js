const ctx = document.getElementById('mychart');

new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1200', '1300', '1400', '1500', '1600'], 
      datasets: [{
        label: 'power consumption in Watts',
        data: [10, 20, 40, 23, 56, 100, 34],
        fill: false,
        tension: 0
        //borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });