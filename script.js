// Initialize Chart.js charts
const barCtx = document.getElementById("bar-chart").getContext("2d");
const pieCtx = document.getElementById("pie-chart").getContext("2d");

// Bar Chart Configuration
let barChart = new Chart(barCtx, {
    type: "bar",
    data: {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4"], // Sample regions
        datasets: [{
            label: "Total Crimes",
            data:  [300, 500, 700, 200], // Placeholder data
            backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#F44336"],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
        }
    }
});

// Pie Chart Configuration
let pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
        labels: ["Region 1", "Region 2", "Region 3", "gujrat 4"], // Sample regions
        datasets: [{
            label: "Crime Distribution",
            data: [300, 500, 700, 200], // Placeholder data
            backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#F44336"],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
        }
    }
});


// Handle Dropdown Change Event
document.getElementById("year-select").addEventListener("change", function() {
    const selectedYear = this.value;

    // Fetch new data (placeholder example)
    console.log(`Year selected: ${selectedYear}`);

    // Update the bar chart with new data
    barChart.data.datasets[0].data = [400, 600, 800, 300]; // Replace with fetched data
    barChart.update();

    // Update the pie chart with new data
    pieChart.data.datasets[0].data = [400, 600, 800, 300]; // Replace with fetched data
    pieChart.update();
});

