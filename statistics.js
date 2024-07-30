// Toggle the 'active' class on the navbar when the menu icon is clicked
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
/**
 * Activate header and go-top button when scrolling down 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});

// Smooth scroll to top when button is clicked
goTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/**
 * Navbar toggle functionality
 */

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");





//! Chart JS

const chartData = {
    labels: ['First Year', 'Second Year', 'Third Year'],
    data: [49,51,31],
  };
  
  const chart = document.getElementById("doughnut");
  const eventList = document.querySelector(".chart ul");
  
  new Chart(chart, {
    type: "doughnut",
    data: {
      labels: ['Second Year', 'Third Year', 'Fourth Year'],
      datasets: [
        {
          label: "# Members",
          data: [49,51,31],
          backgroundColor: ["#582bac", "#b31a4d", "#e48e2c", "#4a920f"],
          offset: 10,
          hoverOffset: 8,
          hoverBorderColor: "#9a999b",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#8b8a96",
            font: {
              size: 12,
              weight: 600,
            },
          },
        },
      },
      layout: {
        padding: {
          bottom: 10,
        },
      },
    },
  });
  
  
    // bar chart of the cities of all job seekers
          let xValues2 = ['Second Year', 'Third Year', 'Fourth Year'];
          xValues2 = xValues2.map(function(x){ return x.charAt(0).toUpperCase() + x.slice(1); });
          const yValues2 = [49,51,31];
          const barColors2 = ["#582bac", "#b31a4d", "#e48e2c", "#4a920f"];
  
          new Chart("chart2", {
          type: "bar",
          data: {
              labels: xValues2,
              datasets: [{
              label : "Total members",
              backgroundColor: barColors2,
              data: yValues2
              }]
          },
          options: {
            responsive:true,
           
              layout:{
                padding:{
                    top:70
                }
              },
              legend: {display: false},
              title: {
              display: true
              },
              scales: {
                  y:{
                      beginAtZero: true
                  }
              }
          }
          });
