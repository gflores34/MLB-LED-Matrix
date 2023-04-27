//let gameId = "718446";
//Used this game for testing

export async function getGames(){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1/schedule?sportId=1');
    const jsonData = await response.json();
    
    var result = new Array();

    for(let i = 0; i < jsonData.dates[0].games.length; i++){
        result.push(jsonData.dates[0].games[i].gamePk);
    }

    return result;

}

export async function gameOver(gamePk){
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();

    let result = jsonData.gameData.status.codedGameState;


    return result;
}

export async function getGameStartTime(gamePk){
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();

    let result = jsonData.gameData.datetime.time;


    return result;
}


export async function getInning(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();

    let result = jsonData.liveData.linescore.currentInning;


    return result;
}

export async function getInningFrame(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();

    if(jsonData.liveData.linescore.isTopInning === true){
        return true;
    } else {
        return false;
    }
}

export async function getTeamRuns(gamePk, team){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();

    if(team === "home"){
        return jsonData.liveData.linescore.teams.home.runs;
    } else {
        return jsonData.liveData.linescore.teams.away.runs;
    }
}

export async function getStrikes(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    return jsonData.liveData.linescore.strikes;
}

export async function getBalls(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    return jsonData.liveData.linescore.balls;
}

export async function getOuts(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    return jsonData.liveData.linescore.outs;
}

export async function getTeamName(gamePk, team){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    if(team === "home"){
        return jsonData.gameData.teams.home.abbreviation;
    } else {
        return jsonData.gameData.teams.away.abbreviation;
    }
}

export async function getTeamFullName(gamePk, team){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    if(team === "home"){
        return jsonData.gameData.teams.home.name;
    } else {
        return jsonData.gameData.teams.away.name;
    }
}

export async function getFirstBase(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();
    
    if(jsonData.liveData.linescore.offense.first !== undefined){
        return true;
    } else {
        return false;
    }
    
}

export async function getSecondBase(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    if(jsonData.liveData.linescore.offense.second !== undefined){
        return true;
    } else {
        return false;
    }
}

export async function getThirdBase(gamePk){
    
    const response = await fetch('https://statsapi.mlb.com//api/v1.1/game/' + gamePk + '/feed/live');
    const jsonData = await response.json();


    if(jsonData.liveData.linescore.offense.third !== undefined){
        return true;
    } else {
        return false;
    }
}



getGames();
