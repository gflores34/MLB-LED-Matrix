import * as leds from "./led.js";
import * as atBat from "./atBat.js";
import * as inning from "./inning.js";
import * as score from "./score.js";
import * as mlbStats from "./mlbStats.js";
import * as game from './activeGames.js';



game.setActiveGames();


var games = document.getElementById('games');
games.onchange = changeHandler;



const interval = setInterval(function() {
    changeHandler();
}, 15000)



//Handler for selecting game        
function changeHandler(){
    
    var gamePk =  games.value;

    main(gamePk)

}


//Main controller for setting LEDs to the api info
async function main(gamePk){
  
    var ons = new Array();

    leds.clearM();

    //Get and Set inning
    const inningResponse = await mlbStats.getInning(gamePk);
    inning.inningNumber(ons, inningResponse);


    //Get and set inningFrame
    const inningFrameResponse = await mlbStats.getInningFrame(gamePk);
    inning.frame(ons, inningFrameResponse);


    //Get and set bases status
    const firstBaseResponse = await mlbStats.getFirstBase(gamePk);

    const secondBaseResponse = await mlbStats.getSecondBase(gamePk);

    const thirdBaseResponse = await mlbStats.getThirdBase(gamePk);

    inning.onBase(ons, firstBaseResponse, secondBaseResponse, thirdBaseResponse);


    //Get and set at bat info
    const outsResponse = await mlbStats.getOuts(gamePk);
    const strikesResponse = await mlbStats.getStrikes(gamePk);
    const ballsResponse = await mlbStats.getBalls(gamePk);

    atBat.current(ons, ballsResponse, strikesResponse, outsResponse);



    //Get and set home team score info
    const homeTeamNameResponse = await mlbStats.getTeamName(gamePk, "home");
    const homeTeamRuns = await mlbStats.getTeamRuns(gamePk, "home");
    
    score.homeTeam(ons, homeTeamNameResponse.charAt(0), homeTeamNameResponse.charAt(1), homeTeamNameResponse.charAt(2));
    score.homeScore(ons, homeTeamRuns);



    //Get and set away team score info
    const awayTeamNameResponse = await mlbStats.getTeamName(gamePk, "away");
    const awayTeamRuns = await mlbStats.getTeamRuns(gamePk, "away");

    score.awayTeam(ons, awayTeamNameResponse.charAt(0), awayTeamNameResponse.charAt(1), awayTeamNameResponse.charAt(2));
    score.awayScore(ons, awayTeamRuns);

    leds.write (ons);

}