// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [27, 23, 22, 18, 15,15,12],
    name: "Facilities",
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1",
    "#808080",
    "#ff0000"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Kiharu", "Gatanga", "Kandara", "Kangema", "Murang'a South","Kigumo","Mathioya"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Kiharu',
    data: [269310, 254968, 356694]
  }, {
    name: 'Gatanga',
    data: [192841,	219071,	270326]
  }, {
    name: 'Kandara',
    data: [260163,	248029,	285628]
  }, {
    name: 'Kangema',
    data: [185353,	176264,	184576]
  }, {
    name: 'Muranga South',
    data: [279505,	232923,	259618]
  }, {
    name: 'Kigumo',
    data: [178964,	176701,	185241]
  }, {
    name: 'Mathioya',
    data: [120457,	122879,	125409]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1",
    "#808080",
    "#ff0000"
  ],

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["2011","2012","2013"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Count',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Count',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();