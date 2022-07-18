// alert

const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
`
<div id='alert'>
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-close">X</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-close'))
    alertBanner.style.display = 'none';
});


// notifications

const notificationBell = document.getElementsByClassName('bell-icon')[0];
const dropdown = document.getElementById('notifications-dropdown');
const greenCircle = document.getElementsByClassName('green-circle')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

notificationBell.addEventListener('click', () => {
    if(dropdown.style.display = 'none'){
        dropdown.style.display = 'block';
    }
    greenCircle.style.display = 'none';
})

closeBtn.addEventListener('click', ()=> {
    dropdown.style.display = 'none';
})



// traffic charts

const trafficCanvas = document.getElementById('traffic-chart');
const trafficNav = document.querySelector('.traffic-nav');
const trafficNavLink = document.getElementsByClassName('traffic-nav-link');

trafficNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('hourly')) {
        trafficChart.data = trafficDataHourly;
        trafficChart.update();
    }
    if (e.target.classList.contains('daily')) {
        trafficChart.data = trafficDataDaily;
        trafficChart.update();
    }
    if (e.target.classList.contains('weekly')) {
        trafficChart.data = trafficDataWeekly;
        trafficChart.update();
    }
    if (e.target.classList.contains('monthly')) {
        trafficChart.data = trafficDataMonthly;
        trafficChart.update();
    }
  });


// traffic-hourly

let trafficDataHourly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

let trafficDataDaily = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [650, 1150, 900, 800, 700, 1650, 1150, 1750, 2150, 1400,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };

let trafficDataWeekly = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [550, 1050, 800, 1800, 1300, 1550, 1050, 1650, 2050, 1300,
        2300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };

let trafficDataMonthly = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
            data: [450, 9500, 700, 1700, 1200, 1350, 950, 1350, 1950, 1200,
            2200],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
            }]
            };

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        };

        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficDataDaily,
            options: trafficOptions
            });
            
            
// Daily-Traffic Chart -- Bar Chart

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });

// Mobile Chart -- Doughnut

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }

        let mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            });


// message user

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });


// setting local storage 

const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const email = document.getElementById('email');
const profile = document.getElementById('public-profile');
const timezone = document.getElementById('time-zone');
const selected = document.getElementById('selected')

saveBtn.addEventListener('click', () => {
    localStorage.setItem('emailPreference', email.checked);
    localStorage.setItem('profilePreference', profile.checked)
    localStorage.setItem('timezonePreference', timezone.value)
    alert('Settings saved')
});

if(window.localStorage.getItem('emailPreference') === 'true'){
   setItem('email.checked', true);
} else {
    email.checked = false;
};

if(window.localStorage.getItem('profilePreference') === 'true'){
    profile.checked = true;
} else {
    profile.checked = false;
};

if(window.localStorage.getItem('timezonePreference') !== null){
    timezone.value = window.localStorage.getItem('timezonePreference')
};

cancelBtn.addEventListener('click', () => {
    localStorage.clear();
    email.checked = false;
    profile.checked =false;
    timezone.value = null;
    timezone.value= selected.value
});


