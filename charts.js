//import { legendsArray } from './brawlhallaApi';

let kdRatioChartPosition = document.getElementById('kdRatio')
let damageRatioChartPosition = document.getElementById('damageRatio')
let levelChartPosition = document.getElementById('level')
let winRatioChartPosition = document.getElementById('winRatio')

//------------------Bringing in filtered player Stats from Brawlhalla API ----------------------------------------
const playerStats = [
    {
      legendName: 'Hattori',    
      level: 51,
      damageDealt: '1027465',   
      damageTaken: '982132',    
      damageRatio: 1.05,        
      kos: 5181,
      falls: 5031,
      kdRatio: 1.03,
      damageWeaponOne: '359425',
      damageWeaponTwo: '440958',
      games: 2254,
      wins: 1167,
      winRatio: 0.52
    },
    {
      legendName: 'Teros',      
      level: 26,
      damageDealt: '229049',    
      damageTaken: '231039',    
      damageRatio: 0.99,        
      kos: 1236,
      falls: 1212,
      kdRatio: 1.02,
      damageWeaponOne: '108356',
      damageWeaponTwo: '65643', 
      games: 549,
      wins: 285,
      winRatio: 0.52
    },
    {
      legendName: 'Asuri',
      level: 13,
      damageDealt: '48089',
      damageTaken: '49128',
      damageRatio: 0.98,
      kos: 262,
      falls: 253,
      kdRatio: 1.04,
      damageWeaponOne: '18307',
      damageWeaponTwo: '16936',
      games: 109,
      wins: 53,
      winRatio: 0.49
    },
    {
      legendName: 'Koji',
      level: 11,
      damageDealt: '31567',
      damageTaken: '34691',
      damageRatio: 0.91,
      kos: 164,
      falls: 179,
      kdRatio: 0.92,
      damageWeaponOne: '10721',
      damageWeaponTwo: '10590',
      games: 74,
      wins: 36,
      winRatio: 0.49
    },
    {
      legendName: 'Bodvar',
      level: 11,
      damageDealt: '32579',
      damageTaken: '35623',
      damageRatio: 0.91,
      kos: 164,
      falls: 189,
      kdRatio: 0.87,
      damageWeaponOne: '14275',
      damageWeaponTwo: '10623',
      games: 79,
      wins: 35,
      winRatio: 0.44
    },
    {
      legendName: 'Xull',
      level: 9,
      damageDealt: '20655',
      damageTaken: '20246',
      damageRatio: 1.02,
      kos: 91,
      falls: 115,
      kdRatio: 0.79,
      damageWeaponOne: '6915',
      damageWeaponTwo: '8006',
      games: 49,
      wins: 19,
      winRatio: 0.39
    },
    {
      legendName: 'Ember',
      level: 8,
      damageDealt: '19213',
      damageTaken: '20277',
      damageRatio: 0.95,
      kos: 105,
      falls: 109,
      kdRatio: 0.96,
      damageWeaponOne: '8765',
      damageWeaponTwo: '5655',
      games: 46,
      wins: 19,
      winRatio: 0.41
    },
    {
      legendName: 'Wu shang',
      level: 6,
      damageDealt: '10521',
      damageTaken: '8512',
      damageRatio: 1.24,
      kos: 67,
      falls: 56,
      kdRatio: 1.2,
      damageWeaponOne: '2347',
      damageWeaponTwo: '4616',
      games: 17,
      wins: 13,
      winRatio: 0.76
    }
  ]

let propertyArray = [];

const sortArrayOnProperty = (arr, property, ascending=true) => {
    arr.sort((a, b) => {
        if (ascending==true) {
            if (a[property] < b[property]) {
                return 1
            } else {
                return -1
            }
        } else {
            if (a[property] > b[property]) {
                return 1
            } else {
                return -1
            }
        }
    });
}


// -----------------Property Splitter-------------------

const propertySplitter = (playerStatsArr, stat) => {
    propertyArray = [];
    for (i = 0; i < playerStatsArr.length; i++) {
        let individualPropertyValues = playerStatsArr[i][stat];
        propertyArray.push(individualPropertyValues);
    }
    
    return propertyArray;
}

//-----------------Chart Creator------------------------

//Individual Chart options, should be configured with each graph
let axisFontSize = 16;
let titleText = '';
let fontColor = 'white'; 
let yAxisLabel = '';
//
Chart.defaults.global.defaultFontFamily = 'Noto Sans';
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;

let chartCreator = (position, playerStatsArr, property) => {
    new Chart(position, {
    
        type: 'bar',
        data: {
            labels: propertySplitter(playerStatsArr, 'legendName'),    
            datasets: [{
                data: propertySplitter(playerStatsArr, property),
                backgroundColor: [
                    'rgba(255, 89, 90 , 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            },
            responsive: false,
            title: {
                display: true,
                text: titleText,
                fontSize: axisFontSize + 16,
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: 'Legends',
                        fontSize: axisFontSize + 4,
                        fontColor: 'white'
                    },
                    ticks: {
                        fontSize: axisFontSize,
                        fontColor: 'white'
                    }
                }],
                yAxes: [{
                    scaleLabel:{
                        display: true,
                        labelString: yAxisLabel,
                        fontSize: axisFontSize + 4,
                        fontColor: 'white',
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: axisFontSize,
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
} 

//----------------------Creating K/D Ratio at kdRatioChartPosition --------------------------------------
titleText = 'K / D Ratio'
yAxisLabel = 'K/D Ratio'
sortArrayOnProperty(playerStats, 'kdRatio', true)
chartCreator(kdRatioChartPosition, playerStats, 'kdRatio')

//----------------------Creating Damage Ratio at damageRatioChartPosition --------------------------------------

titleText = 'Damage Ratio'
yAxisLabel = 'Damage Ratio'
sortArrayOnProperty(playerStats, 'damageRatio', true)
chartCreator(damageRatioChartPosition, playerStats, 'damageRatio')

//----------------------Creating Level Ratio at levelChartPosition --------------------------------------

titleText = 'Level'
yAxisLabel = 'Level'
sortArrayOnProperty(playerStats, 'level', true)
chartCreator(levelChartPosition, playerStats, 'level')

//----------------------Creating Win Ratio at levelChartPosition --------------------------------------

titleText = 'Win Ratio'
yAxisLabel = 'Win Ratio'
sortArrayOnProperty(playerStats, 'winRatio', true)
chartCreator(winRatioChartPosition, playerStats, 'winRatio')

