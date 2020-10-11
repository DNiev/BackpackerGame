const prompt = require('readline-sync');
const colors = require('colors');

console.log("\n")
console.log("\n")
console.log(":::::::::::''  ''::'      '::::::  `:::::::::::::'.:::::::::::::::".blue);
console.log(":::::::::' :. :  :         ::::::  :::::::::::.:::':::::::::::::::".blue);
console.log("::::::::::  :   :::.       :::::::::::::..::::'     :::: : :::::::".blue);
console.log("::::::::    :':  '::'     ''::::::::::::: :'           '' ':::::::".blue);
console.log(":'        : '   :  ::    .::::::::'    '                        .:".blue);
console.log(":               :  .:: .::. ::::'                              :::".blue);
console.log(":. .,.        :::  ':::::::::::.: '                      .:...::::".blue);
console.log(":::::::.      '     .::::::: '''                         :: :::::.".blue);
console.log("::::::::            ':::::::::  '',            '    '   .:::::::::".blue);
console.log("::::::::.        :::::::::::: '':,:   '    :         ''' :::::::::".blue);
console.log("::::::::::      ::::::::::::'                        :::::::::::::".blue);
console.log(": .::::::::.   .:''::::::::    '         ::   :   '::.::::::::::::".blue);
console.log(":::::::::::::::. '  '::::::.  '  '     :::::.:.:.:.:.:::::::::::::".blue);
console.log(":::::::::::::::: :     ':::::::::   ' ,:::::::::: : :.:'::::::::::".blue);
console.log("::::::::::::::::: '     :::::::::   . :'::::::::::::::' ':::::::::".blue);
console.log("::::::::::::::::::''   :::::::::: :' : ,:::::::::::'      ':::::::".blue);
console.log(":::::::::::::::::'   .::::::::::::  ::::::::::::::::       :::::::".blue);
console.log(":::::::::::::::::. .::::::::::::::::::::::::::::::::::::.'::::::::".blue);
console.log(":::::::::::::::::' :::::::::::::::::::::::::::::::::::::::::::::::".blue);
console.log("::::::::::::::::::.:::::::::::::::::::::::::::::::::::::::::::::::".blue);
console.log("    █░█░█ █▀▀ █░░ █▀▀ █▀█ █▀▄▀█ █▀▀   ▀█▀ █▀█".rainbow);
console.log("    ▀▄▀▄▀ ██▄ █▄▄ █▄▄ █▄█ █░▀░█ ██▄   ░█░ █▄█ ".rainbow);
console.log("▀█▀ █░█ █▀▀   █▄▄ ▄▀█ █▀▀ █▄▀ █▀█ ▄▀█ █▀▀ █▄▀ █▀▀ █▀█ ".rainbow);
console.log("░█░ █▀█ ██▄   █▄█ █▀█ █▄▄ █░█ █▀▀ █▀█ █▄▄ █░█ ██▄ █▀▄".rainbow);
console.log("                █▀▀ ▄▀█ █▀▄▀█ █▀▀".rainbow);
console.log("                █▄█ █▀█ █░▀░█ ██▄-".rainbow);
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log("                                                     ");
console.log("Which continent would you like to visit?");
let continent = prompt.question("Africa, Antarctica, Asia, Australia, Europe, North America, or South America?\n");

switch(continent) {
case "Africa":
console.log( "You've just finished some backpacking through Europe, and you've decided to check the flights from airports near you. There's a deal on tickets to Egypt! You hop on a connecting flight through Athens and shortly find yourself walking out of the front doors of the Cairo airport! As you look around, you notice things here are VERY different from anywhere you've traveled so far! The first thing you need to do is get to your hotel, so you need to find transportation. You notice a taxi driver to your left who will probaly be able to take you there, but it will be expensive, and you're on a backpacker's budget. On the other hand there's a local to your right who has a camel to ride. He probably knows the area and may be able to take you there for less money. Whih will you choose? Taxi or Camel? 🚖 🐪");
break;
case "Antarctica":
console.log( "You're so adventurous! You've just managed to find your way onto a ship bound for the coldest continent on Earth! Normally travel to Antarctica is extrememly restricted to tourists, but an old scientist friend of yours will be leading a research team there and invited you along." );
break;
case "Asia":
console.log( "Let's explore the orient! We're off to Asia!" );
break;
case "Australia":
console.log( "G'day, Mate! Let's head down under!" );
break;
case "Europe":
console.log( "Eurotrip!");
break;
case "North America":
console.log( "Get ready to travel North America!");
break;
case "South America":
console.log( "Get ready to take an overland adventure in South America!" );
break;
default:
console.log( "Uh-oh! Looks like you got your languages mixed up again! Check your spelling to make sure something doesn't get lost in translation.");
}