const fetch = require("node-fetch");
const fs = require('fs')

//------------------ URL parameters and arguments ---------------------

const steamID = 'steamid=76561198124854597';
const brawlhallaId = '10191763';
const myKey = 'myKey';
const bracket = '1v1';
const page = 1;
const region = 'us-e';
const name = 'Jusa';

//------------------ Parsing through Stats JSON -----------------------

const stats = require('./playerStats.json'); //Reading in -Static- Stats JSON file 
const { listenerCount } = require("process");

const userName = stats['name']


//------------------ Win Percentage -----------------------

const games = stats['games']
const wins = stats['wins']

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const legendDataArray = (givenLegendArray) => {
    let legendsArray = [];

    for (i = 0; i < givenLegendArray.length;  i++) {
        
        let legendLevel = givenLegendArray[i]['level'];
        let legendName = capitalize(givenLegendArray[i]['legend_name_key']);
        let damageDealt = givenLegendArray[i]['damagedealt'];
        let damageTaken = givenLegendArray[i]['damagetaken'];
        let damageWeaponOne = givenLegendArray[i]['damageweaponone'];
        let damageWeaponTwo = givenLegendArray[i]['damageweapontwo'];
        let kos = givenLegendArray[i]['kos'];
        let falls = givenLegendArray[i]['falls'];
        let games = givenLegendArray[i]['games'];
        let wins = givenLegendArray[i]['wins'];
        
        //let suicides = givenLegendArray[i]['suicides'];
        //falls = falls + suicides; 
       
        let kdRatio = Math.round(kos / falls * 100) / 100
        let winRatio = Math.round(wins / games * 100) / 100
        let damageRatio = Math.round(damageDealt / damageTaken * 100) / 100

        if (legendLevel > 5){
            legendsArray.push({
                'legendName': legendName,
                'level': legendLevel,
                'damageDealt': damageDealt,
                'damageTaken': damageTaken,
                'damageRatio': damageRatio,
                'kos': kos,
                'falls': falls,
                'kdRatio': kdRatio,
                'damageWeaponOne': damageWeaponOne,
                'damageWeaponTwo': damageWeaponTwo,
                'games': games,
                'wins': wins,
                'winRatio': winRatio,
            });
        };
    };
    return legendsArray;
};

const sortArrayOnLevel = (arr) => {
    arr.sort((a, b) => {
        if (a.level < b.level) {
            return 1
        } else {
            return -1
        }
    });
}

const sortArrayOnKos = (arr) => {
    arr.sort((a, b) => {
        if (a.kos > b.kos) {
            return 1
        } else {
            return -1
        }
    });
}

const sortArrayOnkdRatio = (arr) => {
    arr.sort((a, b) => {
        if (a.kdRatio < b.kdRatio) {
            return 1
        } else {
            return -1
        }
    });
}

let legendsArray = legendDataArray(stats['legends'])
sortArrayOnLevel(legendsArray);
console.log(legendsArray)

//------------------ fullPlayerStats ---------------------------

// const fullPlayerStats = () => fetch(`https://api.brawlhalla.com/player/${brawlhallaId}/stats${myKey}`)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
    
//     // Work with JSON data here
//     data = JSON.stringify(data, null, 2);

//     console.log('it must have called');
//     fs.writeFile('playerStatsPractice.json', data, function(err) {
//         if (err) {
//            return console.error(err);
//         }
//     });
//     console.log('wrotee')
//   })

//   .catch(err => {
//      
//   })

// fullPlayerStats();


//------------------ ID FINDER ---------------------------


// const brawlhallaIdFinder = () => fetch(`https://api.brawlhalla.com/search?${steamID}${myKey}`)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//    //console.log(data)
//   })
//   .catch(err => {
//    console.log(err)
//   })