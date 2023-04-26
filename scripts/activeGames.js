import * as leds from "./led.js";
import * as numbers from "./numbers.js";
import * as atBat from "./atBat.js";
import * as base from "./base.js";
import * as inning from "./inning.js";
import * as letters from "./letters.js";
import * as score from "./score.js";
import * as mlbStats from "./mlbStats.js";


export async function setActiveGames(){
    const gamesResponse = await mlbStats.getGames();

    var select = document.getElementById('games');

    for(var i = 0; i < gamesResponse.length; i++){
        var opt = document.createElement('option');
        opt.value = gamesResponse[i];

        const homeResponse = await mlbStats.getTeamFullName(gamesResponse[i], "home");
        const awayResponse = await mlbStats.getTeamFullName(gamesResponse[i], "away");

        opt.innerHTML = awayResponse + " at " + homeResponse;
        select.appendChild(opt);
    }
}