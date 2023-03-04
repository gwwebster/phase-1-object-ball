function gameObject () {
    let game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1
                },
                'Reggie Evans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'Brook Lopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15,
                },
                'Mason Plumlee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'Jason Terry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    'number': 4, 
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'DeSagna Diop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'Ben Gordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'Brendan Haywood': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                }
            }
        }
    }
    return game
};

console.log(gameObject());

function numPointsScored(name) {
    let game = gameObject();
    let foundPlayer
    let allPlayers = {...game.home.players, ...game.away.players}
    for (let specificPlayer in allPlayers) {
        if (name === specificPlayer) {
            foundPlayer = allPlayers[specificPlayer]['points']
        }
    }
    return foundPlayer
}
console.log(numPointsScored('Jeff Adrien'));

function shoeSize(name) {
    let game = gameObject();
    let foundPlayer
    let allPlayers = {...game.home.players, ...game.away.players}
    for (let specificPlayer in allPlayers) {
        if (name === specificPlayer) {
            foundPlayer = allPlayers[specificPlayer]['shoe']
        }
    }
    return foundPlayer
}

console.log(shoeSize('Mason Plumlee'));

function teamColors(team) {
    let game = gameObject();
    let homeName = game.home.teamName
    let awayName = game.away.teamName
    if (team === homeName) {
        return game.home.colors
    } else if (team === awayName) {
        return game.away.colors
    }
}

console.log(teamColors('Charlotte Hornets'));

function teamNames() {
    let game = gameObject();
    let homeName = game.home.teamName
    let awayName = game.away.teamName
    let bothTeams = [homeName, awayName]
    return bothTeams
}

console.log(teamNames());

function playerNumbers(team) {
    let game = gameObject()
    let homeName = game.home.teamName
    let awayName = game.away.teamName
    let homePlayers = {...game.home.players}
    let awayPlayers = {...game.away.players}
    let homeNumbers = []
    if (team === homeName) {
        for (let specificPlayer in game.home.players) {
            let specificNumbers = homePlayers[specificPlayer]['number']
            homeNumbers.push(specificNumbers)
        }
        return homeNumbers
    } else if (team === awayName) {
        for (let specificPlayer in game.away.players) {
            let specificNumbers = awayPlayers[specificPlayer]['number']
            homeNumbers.push(specificNumbers)
        }
        return homeNumbers
    }
}

console.log(playerNumbers('Brooklyn Nets'))

function playerStats(name) {
    let game = gameObject();
    let foundPlayer
    let allPlayers = {...game.home.players, ...game.away.players}
    for (specificPlayer in allPlayers) {
        if (name === specificPlayer) {
            return allPlayers[specificPlayer]
        }
    }
}

console.log(playerStats('Jeff Adrien'))

function bigShoeRebounds() {
    let game = gameObject();
    let shoeSizes = []
    let biggestShoeSize = 0
    let bigShoePlayer
    let allPlayers = {...game.home.players, ...game.away.players}
    for (specificPlayer in allPlayers) {
        let eachShoeSize = allPlayers[specificPlayer]['shoe']
        shoeSizes.push(eachShoeSize)
    }
    for (let shoeSize of shoeSizes) {
        if (shoeSize > biggestShoeSize) {
            biggestShoeSize = shoeSize
        }
    }
    for (specificPlayer in allPlayers) {
        if (allPlayers[specificPlayer]['shoe'] === biggestShoeSize) {
            bigShoePlayer = specificPlayer
        }
    }
    return allPlayers[bigShoePlayer]['rebounds']
}
console.log(bigShoeRebounds())

function mostPointsScored() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players}
    let pointsList = []
    let mostPoints = 0
    for (specificPlayer in allPlayers) {
        let pointsByPlayer = allPlayers[specificPlayer]['points']
        pointsList.push(pointsByPlayer)
    }
    for (let points of pointsList) {
        if (points > mostPoints) {
            mostPoints = points
        }
    }
    return mostPoints
}

console.log(mostPointsScored())

function winningTeam() {
    let game = gameObject();
    let homePlayers = {...game.home.players}
    let homePoints = []
    let awayPlayers = {...game.away.players}
    let awayPoints = []
    let homeTotal = 0
    let awayTotal = 0
    let homeTeam = {...game.home}
    let awayTeam = {...game.away.teamName}
    for (specificPlayer in homePlayers) {
        let homePlayerPoints = homePlayers[specificPlayer]['points']
        homePoints.push(homePlayerPoints)
    }
    for (specificPlayer in awayPlayers) {
        let awayPlayerPoints = awayPlayers[specificPlayer]['points']
        awayPoints.push(awayPlayerPoints)
    }
    for (number of homePoints){
        homeTotal = homeTotal + number
    }
    for (number of awayPoints){
        awayTotal = awayTotal + number
    }
    if (homeTotal > awayTotal) {
        return homeTeam['teamName']
    } else {
        return awayTeam['teamName']
    }
}
console.log(winningTeam())

function playerWithLongestName() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players}
    let nameList = []
    let eachPlayerName = Object.keys(allPlayers)
    let charCounter = 0
    let longestName 
    for (specificPlayerArray of eachPlayerName) {
        nameList.push(specificPlayerArray)
    }
    for (specificPlayer of nameList) {
            if (specificPlayer.length > charCounter) {
                charCounter = specificPlayer.length
                longestName = specificPlayer
            }
    }
    return longestName
}

console.log(playerWithLongestName())

function doesLongNameStealATon() {
    let game = gameObject();
    let longName = playerWithLongestName()
    let allPlayers = {...game.home.players, ...game.away.players}
    let mostSteals = 0
    for (specificPlayer in allPlayers) {
        if (allPlayers[specificPlayer]['steals'] > mostSteals) {
            mostSteals = allPlayers[specificPlayer]['steals']
        }
    }
    for (specificPlayer in allPlayers) {
        if (longName === specificPlayer && allPlayers[longName]['steals'] === mostSteals) {
            return true
        }
    }
}

console.log(doesLongNameStealATon())

    // (alternative approach to numPointsScored() w/ more iteration)
    //for (let gameKey in game) {
    //     let teamObj = game[gameKey];
    //     let teamPlayers = teamObj.players;
    //     for (let specificPlayer in teamPlayers) {
    //         if (name === specificPlayer) {
    //             foundPlayer = teamPlayers[specificPlayer]['points']
    //         }
    //     }
    // }