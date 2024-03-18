const { Events } = require('discord.js');
let keywordsBF1w = "cyberdine1988";
let keywordsBF4w = "cyberdine1988";
let keywords = "12monkeys";
let serverKey = "RC1";
let serverKeyOne = "8459736730833";
//let BF1urlStatsKeywords = [];
let bf1GameIdKey = "";

let json2;
let json3;
let json4;
let json5;

let storedNamesOneteam1 = [];
let storedNamesTwoteam2 = [];

let playerNamesOne = [];
let storedNamesOne = [];

let playerNamesTwo = [];
let storedNamesTwo = [];
let statsJoin = [];
let statsJoin2 = [];

let BanOneList = [];
let BanOneJson = [];
let BanTwoJson = [];


let statsNowJoined;
let statsNowJoined2;
let statsNowJoined3;
let statsNowJoined4;
let statsNowJoined5;
let statsNowJoined6;
let statsNowJoined7;
let statsNowJoined8;
let statsNowJoined9;
let statsNowJoined10;
let statsNowJoined11;
let statsNowJoined12;

let team1Ban = [];
let team2Ban = [];

let statsSlicedOne = [];
let statsSlicedTwo = [];

let banListOne = [];
let banListTwo = [];

let sliceOne = [];
let sliceTwo = [];
let sliceThree = [];
let sliceFour = [];
let iteratedStats = [];
let iteratedStats2 = [];
let iteratedStats3 = [];
let iteratedStats4 = [];
let iteratedStats5 = [];
let iteratedStats6 = [];
let iteratedStats7 = [];
let iteratedStats8 = [];
let iteratedStats9 = [];
let iteratedStats10 = [];
let iteratedStats11 = [];
let iteratedStats12 = [];

let jsonOne;
let jsonTwo;
//let responseOne;
//let BF1urlW;
let r = 0;
  
module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
		
		console.log(message + ` message create`);
		
//message.reply("huh");
let contentT = message.fetch()	

.then(gotData)

    .catch(gotErr);  
   
    async function gotData(data) {

      let tokens = data.content.split(" ");

		if(tokens[0] === "!choochoo") {
    //if(data.content == "Choo choo!" && data.channelId == "1138966803125645375") {
	//message.reply("choo choo is right!");
console.log(tokens);

let replies = [
'*Choo choo is right!',
'*The meaning of life is choo choo.',
'*Choo choo here comes the train!',
'*Choo choo, the future is whatever you make it!'
]

const index = Math.floor(Math.random() * replies.length);
console.log(index)
message.channel.send(replies[index]);

} else if (tokens[0] == "!gif") {


if (tokens.length > 1) {
keywords = tokens.slice(1, tokens.length).join(" ");
}
 
 ////////// Tenor URL ////////////////////////////////
 let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORAPIKEY}&${process.env.TENORCLIENTID}=my_test_app&limit=8`
 let response = await fetch(url);
 let json = await response.json();
 ////////////////////////////////////////////////////////


//message.channel.send(url);
console.log(json);
const index2 = Math.floor(Math.random() * json.results.length);

message.channel.send(json.results[index2].url)
message.channel.send("Gif from Tenor: " + keywords)
	//message.channel.send("choo choo is right!");
  } else if (tokens[0] === "!battlefieldone") {


    if (tokens.length > 2) {
      keywordsBF4w  = tokens[2];
      serverKeyOne = tokens[1];
 
     console.log(" 2 word "+keywordsBF1w);
     console.log(" 2 server "+serverKeyOne);

    } else if  (tokens.length > 1) {
      
      serverKeyOne = tokens[1];
     console.log(" 1 word "+keywordsBF1w);
     console.log(" 1 server "+serverKeyOne);

    }


////////////// Battlefield 1 weapons URL ///////////////////////
var BF1urlW = `https://api.gametools.network/bf1/weapons/?format_values=true&name=${keywordsBF1w}&platform=pc&skip_battlelog=false&lang=en-us`;
let response2 = await fetch(BF1urlW);
json2 = await response2.json(); 

 for(let i = 0; i < json2.weapons.length; i++) {
  //console.log(json2.weapons[i].weaponName + " Accuracy: " + json2.weapons[i].accuracy);

  statsJoin[i] =  "[" + json2.weapons[i].weaponName  + " Kills: " + json2.weapons[i].kills + " Accuracy: " + json2.weapons[i].accuracy + "]";
  
}


if (tokens.length > 2) {

///// iter one ////
for (let j = 0; j < 40; j++) {
 if(json2.weapons[j].kills !== 0) {
    iteratedStats[j] = statsJoin[j];  
 }
   }

   //////iter two /////
for (let j = 40; j < 80; j++) {
    if(json2.weapons[j].kills !== 0) {
        iteratedStats2[j] = statsJoin[j];  
    }
      }  
///////iter three////
      for (let j = 80; j < 120; j++) {
        if(json2.weapons[j].kills !== 0) {
            iteratedStats3[j] = statsJoin[j];  
        }
          }  
////////iterfour ////////
          for (let j = 120; j < 160; j++) {
            if(json2.weapons[j].kills !== 0) {
                iteratedStats4[j] = statsJoin[j];  
            }
              }  
////////////iter five//////
              for (let j = 160; j < 200; j++) {
                if(json2.weapons[j].kills !== 0) {
                    iteratedStats5[j] = statsJoin[j];  
                }
                  }  
/////// iter six ////////
                  for (let j = 200; j < 240; j++) {
                    if(json2.weapons[j].kills !== 0) {
                        iteratedStats6[j] = statsJoin[j];  
                    }
                      }  
///////iter seven ////////
                      // for (let j = 200; j < 240; j++) {
                      //   if(json2.weapons[j].kills !== 0) {
                      //       iteratedStats7[j] = statsJoin[j];  
                      //   }
                      //     }  
////////// iter eight ///////////
                          // for (let j = 240; j < 280; j++) {
                          //   if(json2.weapons[j].kills !== 0) {
                          //       iteratedStats8[j] = statsJoin[j];  
                          //   }
                          //     }  
    
statsNowJoined = iteratedStats.join(' ');
statsNowJoined2 = iteratedStats2.join(' ');
statsNowJoined3 = iteratedStats3.join(' ');
statsNowJoined4 = iteratedStats4.join(' ');
statsNowJoined5 = iteratedStats5.join(' ');
statsNowJoined6 = iteratedStats6.join(' ');
statsNowJoined7 = iteratedStats7.join(' ');
statsNowJoined8 = iteratedStats8.join(' ');

//console.log(statsJoin[10])
console.log(statsNowJoined + "statsNowJoined");
console.log(statsNowJoined2 + "statsNowJoined");
console.log(statsNowJoined3 + "statsNowJoined");
console.log(statsNowJoined4 + "statsNowJoined");
console.log(statsNowJoined5 + "statsNowJoined");
console.log(statsNowJoined6 + "statsNowJoined");
console.log(statsNowJoined7 + "statsNowJoined");
console.log(statsNowJoined8 + "statsNowJoined");
//console.log(statsNowJoined2);
//console.log(statsNowJoined2);

 message.channel.send("* "+statsNowJoined);
 message.channel.send("* "+statsNowJoined2);
 message.channel.send("* "+statsNowJoined3);
 message.channel.send("* "+statsNowJoined4);
 message.channel.send("* "+statsNowJoined5);
 message.channel.send("* "+statsNowJoined6);
 message.channel.send("* "+statsNowJoined7);
 message.channel.send("* "+statsNowJoined8);

}
///////////////////////////////////////////////////////////////

//////////// Battlefield 1 Teams ////////////////////////////
//let BF1teams = `https://api.gametools.network/bf1/detailedserver/?name=${serverKeyOne}&platform=pc&lang=en-us`
//let BF1teams = `https://api.gametools.network/bf1/players/?name=BoB&gameid=8459736730833`
let BF1teams = `https://api.gametools.network/bf1/players/?name=${keywordsBF1w}&gameid=${serverKeyOne}`
//let BF1teams = `https://api.gametools.network/bf1/players/?name=BoB&gameid=8460734210372`
//let BF1teams = `https://api.gametools.network/bf1/players/?name=BoB&gameid=8459736090801`

let response3 = await fetch(BF1teams);
json3 = await response3.json(); 

console.log(json3.teams[0])
/////Team1 /////
for (let j = 0; j < json3.teams[0].players.length; j++) {
  playerNamesOne = json3.teams[0].players[j];
storedNamesOne[j] = playerNamesOne; 
}
///////////////

/////Team 2 //////
for (let l = 0; l < json3.teams[1].players.length; l++) {
  playerNamesTwo = json3.teams[1].players[l];
storedNamesTwo[l] = playerNamesTwo; 
}
/////////////////

console.log("TEAM ONE");
for (let k = 0; k < storedNamesOne.length; k++) {
console.log(storedNamesOne[k].name);
storedNamesOneteam1[k] = "["+storedNamesOne[k].name+" user_id: "+storedNamesOne[k].user_id+"]";


}

for (let h = 0; h < storedNamesOne.length; h++) {
 // usersTeam  = storedNamesOne[k].name
  let BanKeyOne = storedNamesOne[h].user_id;
  let BanOne = `https://api.gametools.network/bfban/checkban/?userids=${BanKeyOne}`;
  let BanOneRes = await fetch(BanOne);

  BanOneJson[h] = await BanOneRes.json();

//let oj1 = 
 
  let obj1 = BanOneJson[h].userids[BanKeyOne].hacker;

 if(obj1 == false) {

  banListOne[h] = " ["+storedNamesOne[h].name+"] ";
 } else if (obj1 == true) {

  banListOne[h] = " ["+storedNamesOne[h].name+"!!! ban: "+obj1+"] ";
  //+BanOneJson[h].userids[BanKeyOne].url
 }


}
let team1Ban = banListOne.join(" ");


console.log("   ")
console.log("TEAM TWO");
for (let m = 0; m < storedNamesTwo.length; m++) {
  console.log(storedNamesTwo[m].name);
  storedNamesTwoteam2[m] = "["+storedNamesTwo[m].name+" user_id: "+storedNamesOne[m].user_id+"]";
  }

  for (let h = 0; h < storedNamesTwo.length; h++) {
    // usersTeam  = storedNamesOne[k].name
     let BanKeyTwo = storedNamesTwo[h].user_id;
     let BanTwo = `https://api.gametools.network/bfban/checkban/?userids=${BanKeyTwo}`;
     let BanTwoRes = await fetch(BanTwo);
   
     BanTwoJson[h] = await BanTwoRes.json();
    
     let obj2 = BanTwoJson[h].userids[BanKeyTwo].hacker;
     

     if(obj2 == false) {

      banListTwo[h] = " ["+storedNamesTwo[h].name+"] ";
     } else if (obj2 == true) {
      
      banListTwo[h] = " ["+storedNamesTwo[h].name+"!!! ban: "+obj2+"] ";
      //+BanTwoJson[h].userids[BanKeyTwo].url
     }
       
   }
    team2Ban = banListTwo.join(" ");

  //team1 = storedNamesOneteam1.join(" ");
  //team2 = storedNamesTwoteam2.join(" ");


message.channel.send("team 1:     "+team1Ban);
message.channel.send("team 2:     "+team2Ban);
/////////////////////////////////////////////////////////////

//////////////////// Stats Iteration ////////////////////////

//for (let p = 0; p < 2; p++) {
 for (let p = 0; p < storedNamesOne.length; p++) {

  let BF1urlStatsKeywords = storedNamesOne[p].name;
  let BF1urlStats = `https://api.gametools.network/bf1/weapons/?format_values=true&name=${BF1urlStatsKeywords}&platform=pc&skip_battlelog=false&lang=en-us`;
  

let responseOne = await fetch(BF1urlStats);
jsonOne = await responseOne.json(); 


for(let b = 0; b < jsonOne.weapons.length; b++) {

let accuracySplit = jsonOne.weapons[b].accuracy.split(/\D+/);

//console.log(accuracySplit[0])
//if(jsonTwo.weapons[b].type !== 'Shotguns' && jsonTwo.weapons[b].type !== 'Hand Grenades' && jsonTwo.weapons[b].type !== 'Gadget' && jsonTwo.weapons[b].type !== 'Tanker/pilot' && jsonTwo.weapons[b].type !== 'Underslung Launchers' && jsonTwo.weapons[b].type !== 'Rocket Launchers' && jsonTwo.weapons[b].weaponName !== 'phantom') {

 if(accuracySplit[0] > 99 && jsonOne.weapons[b].kills > 50) {

console.log("      ")
console.log(" RIGHT HERE!!!  name: " + BF1urlStatsKeywords );
console.log(jsonOne.weapons[b].weaponName + " Accuracy: " + jsonOne.weapons[b].accuracy);
console.log("Kills:  " + jsonOne.weapons[b].kills);
console.log(jsonOne.weapons[b]);


if(jsonOne.weapons[b].type !== 'Shotgun' && jsonOne.weapons[b].type !== 'Grenade' && jsonOne.weapons[b].type !== 'Gadget' && jsonOne.weapons[b].type !== 'Tanker/pilot') {

message.channel.send(jsonOne.weapons[b].image + " RIGHT HERE!!!  name: " + BF1urlStatsKeywords + "  " + jsonOne.weapons[b].weaponName + " accuracy: " + jsonOne.weapons[b].accuracy + "  kills:  " + jsonOne.weapons[b].kills);
}


}
 } 
 }


  } else if (tokens[0] == "!battlefieldfour") {

    if (tokens.length > 2) {
      keywordsBF4w  = tokens[2];
      serverKey = tokens[1];

     console.log(" 2 word "+keywordsBF4w);
     console.log(" 2 server "+serverKey);

    } else if  (tokens.length > 1) {
      
      serverKey = tokens[1];
     console.log(" 1 word "+keywordsBF4w);
     console.log(" 1 server "+serverKey);

    }

////////////// Battlefield 4 URL /////////////////////
let BF4urlW = `https://api.gametools.network/bf4/weapons/?format_values=true&name=${keywordsBF4w}&platform=pc`;
let response4 = await fetch(BF4urlW);
let json4 = await response4.json();
/////////////////////////////////////////////////////


 for(let i = 0; i < json4.weapons.length; i++) {

statsJoin2[i] =  "[" + json4.weapons[i].weaponName  + " Kills: " + json4.weapons[i].kills + " Accuracy: " + json4.weapons[i].accuracy + "]";

}


if (tokens.length > 2) {

///// iter one ////
for (let j = 0; j < 40; j++) {
 if(json4.weapons[j].kills !== 0) {
    iteratedStats7[j] = statsJoin2[j];  
 }
   }

   //////iter two /////
for (let j = 40; j < 80; j++) {
    if(json4.weapons[j].kills !== 0) {
        iteratedStats8[j] = statsJoin2[j];  
    }
      }  
///////iter three////
      for (let j = 80; j < 120; j++) {
        if(json4.weapons[j].kills !== 0) {
            iteratedStats9[j] = statsJoin2[j];  
        }
          }  
////////iterfour ////////
          for (let j = 120; j < 160; j++) {
            if(json4.weapons[j].kills !== 0) {
                iteratedStats10[j] = statsJoin2[j];  
            }
              }  
////////////iter five//////
//               for (let j = 160; j < 200; j++) {
//                 if(json4.weapons[j].kills !== 0) {
//                     iteratedStats11[j] = statsJoin2[j];  
//                 }
//                   }  
// /////// iter six ////////
//                   for (let j = 200; j < 240; j++) {
//                     if(json4.weapons[j].kills !== 0) {
//                         iteratedStats12[j] = statsJoin2[j];  
//                     }
//                       }  
///////iter seven ////////
                      // for (let j = 200; j < 240; j++) {
                      //   if(json2.weapons[j].kills !== 0) {
                      //       iteratedStats7[j] = statsJoin[j];  
                      //   }
                      //     }  
////////// iter eight ///////////
                          // for (let j = 240; j < 280; j++) {
                          //   if(json2.weapons[j].kills !== 0) {
                          //       iteratedStats8[j] = statsJoin[j];  
                          //   }
                          //     }  
    
statsNowJoined7 = iteratedStats7.join(' ');
statsNowJoined8 = iteratedStats8.join(' ');
statsNowJoined9 = iteratedStats9.join(' ');
statsNowJoined10 = iteratedStats10.join(' ');
statsNowJoined11 = iteratedStats11.join(' ');
statsNowJoined12 = iteratedStats12.join(' ');
//statsNowJoined7 = iteratedStats7.join(' ');
//statsNowJoined8 = iteratedStats8.join(' ');

//console.log(statsJoin[10])
console.log(statsNowJoined7);
console.log(statsNowJoined8);
console.log(statsNowJoined9);
console.log(statsNowJoined10);
//console.log(statsNowJoined11);
//console.log(statsNowJoined12);
//console.log(statsNowJoined2);
//console.log(statsNowJoined2);


 message.channel.send("* " + statsNowJoined7);
 message.channel.send("* "+statsNowJoined8);
 message.channel.send("* "+statsNowJoined9);
 message.channel.send("* "+statsNowJoined10);
//message.channel.send(statsNowJoined11);
//message.channel.send(statsNowJoined12);
//message.channel.send(statsNowJoined7);
//message.channel.send(statsNowJoined8);

}
///////////////////////////////////////////////////////////////

//////////////// Battlefield 4 //////////////////////

//let BF4teams = 'https://api.gametools.network/bf4/detailedserver/?name=bZ4&platform=pc&lang=en-us';
let BF4teams = `https://api.gametools.network/bf4/detailedserver/?name=${serverKey}&platform=pc&lang=en-us`;
//let BF4teams = 'https://api.gametools.network/bf4/detailedserver/?gameid=18014398529305134&platform=pc&lang=en-us';
//let BF4teams = 'https://api.gametools.network/bf4/detailedserver/?gameid=18014398529305134&platform=pc&lang=en-us';

let response3 = await fetch(BF4teams);
json5 = await response3.json(); 

//console.log(json5.gameId)

  /////Team1 /////
  for (let j = 0; j < json5.teams[0].players.length; j++) {
    playerNamesOne = json5.teams[0].players[j];
  storedNamesOne[j] = playerNamesOne; 
  }
  ///////////////

  /////Team 2 //////
  for (let l = 0; l < json5.teams[1].players.length; l++) {
    playerNamesTwo = json5.teams[1].players[l];
  storedNamesTwo[l] = playerNamesTwo; 
  }
// // /////////////////

 console.log("TEAM ONE");
 for (let k = 0; k < storedNamesOne.length; k++) {
 console.log(storedNamesOne[k].name);
 storedNamesOneteam1[k] = "["+storedNamesOne[k].name+"]";

 for (let h = 0; h < storedNamesOne.length; h++) {
  // usersTeam  = storedNamesOne[k].name
   let BanKeyOne = storedNamesOne[h].user_id;
   let BanOne = `https://api.gametools.network/bfban/checkban/?userids=${BanKeyOne}`;
   let BanOneRes = await fetch(BanOne);
 
   BanOneJson[h] = await BanOneRes.json();
 
 //let oj1 = 
  
   let obj1 = BanOneJson[h].userids[BanKeyOne].hacker;
 
  if(obj1 == false) {

   banListOne[h] = " ["+storedNamesOne[h].name+"] ";
   
  } else if (obj1 == true) {
 
   banListOne[h] = " ["+storedNamesOne[h].name+"!!! ban: "+obj1+"] ";
   //+BanOneJson[h].userids[BanKeyOne].url
  }
 
 
 }
  team1Ban = banListOne.join(" ");
 


 }

 console.log("   ")
 console.log("TEAM TWO");
 for (let m = 0; m < storedNamesTwo.length; m++) {
   console.log(storedNamesTwo[m].name);
   storedNamesTwoteam2[m] = "["+storedNamesTwo[m].name+"]";
   }

   for (let h = 0; h < storedNamesTwo.length; h++) {
    // usersTeam  = storedNamesOne[k].name
     let BanKeyTwo = storedNamesTwo[h].user_id;
     let BanTwo = `https://api.gametools.network/bfban/checkban/?userids=${BanKeyTwo}`;
     let BanTwoRes = await fetch(BanTwo);
   
     BanTwoJson[h] = await BanTwoRes.json();
   
   //let oj1 = 
    
     let obj2 = BanTwoJson[h].userids[BanKeyTwo].hacker;
   
    if(obj2 == false) {
  
     banListTwo[h] = " ["+storedNamesTwo[h].name+"] ";
     
    } else if (obj2 == true) {
   
     banListTwo[h] = " ["+storedNamesTwo[h].name+"!!! ban: "+obj2+"] ";
     //+BanOneJson[h].userids[BanKeyOne].url
    }
   
   
   }
    team2Ban = banListTwo.join(" ");

    message.channel.send("team 1:     "+team1Ban);
    message.channel.send("team 2:     "+team2Ban);
//    team1 = storedNamesOneteam1.join(" ");
//    team2 = storedNamesTwoteam2.join(" ");


   
//    message.channel.send("* Game prefix:  "+ json5.prefix +"   Game id: " + json5.gameId);
// message.channel.send("* "+ team1);
// message.channel.send("* "+ team2);
///////////////////////////////////////////////////////////////

////////////////////// Stats Iteration ////////////////////////

// //for (let p = 0; p < 2; p++) {
  for (let p = 0; p < storedNamesOne.length; p++) {

   keywordsBF4w = storedNamesOne[p].name;
   //let BF1urlStats = `https://api.gametools.network/bf1/weapons/?format_values=true&name=${BF1urlStatsKeywords}&platform=pc&skip_battlelog=false&lang=en-us`;
   let BF4urlWstats = `https://api.gametools.network/bf4/weapons/?format_values=true&name=${keywordsBF4w}&platform=pc`;

 let responseOne = await fetch(BF4urlWstats);
 jsonTwo = await responseOne.json(); 


 for(let b = 0; b < jsonTwo.weapons.length; b++) {

 let accuracySplit = jsonTwo.weapons[b].accuracy.split(/\D+/);

 //console.log(accuracySplit[0])
 if(accuracySplit[0] > 99 && jsonTwo.weapons[b].kills > 50) {

 console.log("      ")
 console.log(" RIGHT HERE!!!  name: " + keywordsBF4w );
console.log(jsonTwo.weapons[b].weaponName + " Accuracy: " + jsonTwo.weapons[b].accuracy);
 console.log("Kills:  " + jsonTwo.weapons[b].kills);
 console.log(jsonTwo.weapons[b]); 

 if(jsonTwo.weapons[b].type !== 'Shotguns' && jsonTwo.weapons[b].type !== 'Hand Grenades' && jsonTwo.weapons[b].type !== 'Gadget' && jsonTwo.weapons[b].type !== 'Tanker/pilot' && jsonTwo.weapons[b].type !== 'Underslung Launchers' && jsonTwo.weapons[b].type !== 'Rocket Launchers' && jsonTwo.weapons[b].weaponName !== 'phantom') {

  console.log(jsonTwo.weapons[b].image + " RIGHT HERE!!!  name: " + keywordsBF4w + "  " + jsonTwo.weapons[b].weaponName + " accuracy: " + jsonTwo.weapons[b].accuracy + "  kills:  " + jsonTwo.weapons[b].kills)
  message.channel.send(jsonTwo.weapons[b].image + " RIGHT HERE!!!  name: " + keywordsBF4w + "  " + jsonTwo.weapons[b].weaponName + " accuracy: " + jsonTwo.weapons[b].accuracy + "  kills:  " + jsonTwo.weapons[b].kills);
 }


 }
  } 
  }
// ////////////////////////////////////////////////////////////


  } else if (tokens[0] === "!help") {

    message.channel.send("* !battlefieldone gameid username (for user stats) ex. !battlefieldone 8459736730833 cyberine1988 * !battlefieldone gameid ( find all player stats ovr %100 accurate / get teams / ban status). this must be gameid, is number on top of battlefieldtracker.com url.  ex. !battlefieldone 8459736730833");
    message.channel.send("* !battlefieldfour search username (for user stats) ex. !battlefieldfour RC1 cyberine1988 * !battlefieldone search ( find all player stats ovr %100 accurate / get teams/ get gameid / ban status). just a unique word of title of server is fine. ex. !battlefieldfour RC1");
    message.channel.send("* !bf1gameid gameid search servers and get a gameId number ex. !bf1gameid Salty");
    
  } else if (tokens[0] === "!bf1gameid") {
    
    bf1GameIdKey = tokens[1];

   let  bf1GameId = `https://api.gametools.network/bf1/detailedserver/?name=${bf1GameIdKey}&platform=pc&lang=en-us`;
   let response2GameId = await fetch(bf1GameId);
   GameIdjson = await response2GameId.json(); 

   console.log(GameIdjson);
   message.channel.send("* prefix:  "+GameIdjson.prefix+"  gameId:  "+GameIdjson.gameId);
  }

 
 // console.log(BF1urlW)
 // console.log(keywordsBF1w);

  console.log("Content: "+data.content);
	// console.log(data);  
    }
   
    function gotErr(Err2) {
     console.log(Err2);     
    }
	
	},
};
