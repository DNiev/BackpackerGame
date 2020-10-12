const prompt = require('readline-sync');
const colors = require('colors');
function runGame (){


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
continent = continent.toLowerCase();
switch(continent) {
    case "africa":
        console.log( "You've just finished some backpacking through Europe, and you've decided to check the flights from airports near you. There's a deal on tickets to Egypt! You hop on a connecting flight through Athens and shortly find yourself walking out of the front doors of the Cairo airport! As you look around, you notice things here are VERY different from anywhere you've traveled so far! The first thing you need to do is get to your hotel, so you need to find transportation. You notice a taxi driver to your left who will probaly be able to take you there, but it will be expensive, and you're on a backpacker's budget. On the other hand there's a local to your right who has a camel to ride. He probably knows the area and may be able to take you there for less money. OR you could walk! Walking is free and it's only about 3 miles from the airport! Which will you choose?");
        let questionTaxi = prompt.question("Taxi🚖 , camel🐪, or walk?\n");
        questionTaxi = questionTaxi.toLowerCase()
        switch(questionTaxi) {
            case "taxi": 
                console.log("Right, let's take a taxi. It's better to be safe than sorry! Unfortunately your taxi driver doesn't speak much English at all. After a bit of struggling to communicate, you realize the meter in this cab is going up very quickly and this cab driver seems to be going in circles. He ducks into a side alley and holds you up at gunpoint! To add insult to injury, he takes your pants and your left shoe from you as well. Damn! You hobble your em-bare-assed self over to the embassy for help. Mission failed. Who flies to Egypt and doesn't ride the camel?! Nice.\n");
            break;

            case "camel": 
                console.log("I mean we're in Egypt, right? Why the hell wouldn't we take the camel?! Plus the local guiding you seems friendly enough. He starts leading you down the street and you get to see local vendors selling perfumes, papyrus, and roasted pidgeon. You finally make it to the hotel safe and sound. And best of all, you have all of your money left to enjoy yourself. The next morning you wake up to head straight to the Giza plateau. But first, breakfast! Do you want to eat at the hotel or do you want to head out and find a restaurant on the way?\n");
                let questionBreakfast = prompt.question("Eat on the way or eat at the hotel?\n");
                questionBreakfast = questionBreakfast.toLowerCase()
                switch(questionBreakfast) {
                    case "eat on the way":
                        console.log("Not wanting to waste any time, you decide the best thing to do is to grab something to eat on the go. You get to try a nice bowl of fresh made foul mudammas and some delicious fresh baked bread. Full stomach, and feeling accomplished, you head off to the Giza plateau to see the pyramids. Congratulations! You've backpacked Egypt!");
                        console.log("                .,aadd''    `'bbaa,.".yellow);
                        console.log("            ,ad8888P'          `Y8888ba,".yellow);
                        console.log("         ,a88888888              88888888a,".yellow);
                        console.log("       a88888888888              88888888888a".yellow);
                        console.log("     a8888888888888b,          ,d8888888888888a".yellow);
                        console.log("    d8888888888888888b,_    _,d8888888888888888b".yellow);
                        console.log("   d88888888888888888888888888888888888888888888b".yellow);
                        console.log("  d8888888888888888888888888888888888888888888888b".yellow);
                        console.log(" I888888888888888888888888888888888888888888888888I".yellow);
                        console.log(",88888888888888888888888888888888888888888888888888,".yellow);
                        console.log("I8888888888888888PY8888888PY88888888888888888888888I".yellow);
                        console.log("8888888888888888'  '88888'  '88888888888888888888888".yellow);
                        console.log("8::::::::::::::'    `:::'    `:::::::::::::::::::::8".yellow);
                        console.log("Ib:::::::::::'        '        `::::::' `:::::::::dI".yellow);
                        console.log("`8888888888P            Y88888888888P     Y88888888'".yellow);
                        console.log(" Ib:::::::'              `:::::::::'       `:::::dI".yellow);
                        console.log("  Yb::::'                  ::::::'           ''::dP".yellow);
                        console.log("   Y88P                      Y8P              `P".yellow);
                        console.log("    Y'                        '".yellow);
                        console.log("                                `:::::::::::;8'".yellow);
                        console.log("       '888888888888888888888888888888888888'".yellow);
                        console.log("         `'8;::::::::::::::::::::::::::;8''".yellow);
                        console.log("            `'Ya;::::::::::::::::::;aP''".yellow);
                        console.log("                ``''YYbbaaaaddPP''''".yellow);
                    break;

                    case "eat at the hotel":
                        console.log("Good thing the hotel has a complimentary continental breakfast. You decide to indulge in a huge serving of fruits and yogurt in the cafe. Within a few moments, a server walks up and offers you some eggs. You don't know if it was the fruit or the dairy, but within a couple of hours Salmonella sets in and you're on your way to a clinic. It turns out hospital care in Egypt sucks and you die.\nFlies to Egypt. Never Leaves Hotel. Dies From Food Poisoning.\nYou're a Legend🏆\n");
                        console.log("        ██████████████        ".red);
                        console.log("    ██████          ██████    ".red);
                        console.log("  ████                  ████  ".red);
                        console.log("  ██                      ██  ".red);
                        console.log("████                      ████".red);
                        console.log("██                          ██".red);
                        console.log("██  ████████      ████████  ██".red);
                        console.log("██  ████████      ████████  ██".red);
                        console.log("██  ██████    ██    ██████  ██".red);
                        console.log("██          ██████          ██".red);
                        console.log("████        ██████        ████".red);
                        console.log("  ██████              ██████  ".red);
                        console.log("      ██              ██      ".red);
                        console.log("      ██  ██  ██  ██  ██      ".red);
                        console.log("      ██████████████████      ".red);
                    break;

                    default:
                        console.log(`Luckily the food stall down the street is serving just that! You decide to indulge in a huge serving of ${questionBreakfast}, not realizing how undercooked it is. Within a couple of hours Salmonella sets in and you're on your way to a clinic. It turns out hospital care in Egypt sucks and you die. Maybe you should be sure of what you want to eat next time.....`);
                        console.log("        ██████████████        ".red);
                        console.log("    ██████          ██████    ".red);
                        console.log("  ████                  ████  ".red);
                        console.log("  ██                      ██  ".red);
                        console.log("████                      ████".red);
                        console.log("██                          ██".red);
                        console.log("██  ████████      ████████  ██".red);
                        console.log("██  ████████      ████████  ██".red);
                        console.log("██  ██████    ██    ██████  ██".red);
                        console.log("██          ██████          ██".red);
                        console.log("████        ██████        ████".red);
                        console.log("  ██████              ██████  ".red);
                        console.log("      ██              ██      ".red);
                        console.log("      ██  ██  ██  ██  ██      ".red);
                        console.log("      ██████████████████      ".red);
                }    
            break;

            case "walk": 
                console.log("Let's get a little exercise in! You've just been sitting on aplane for a few hours. Time to get the blood moving again. As you walk you notice the sun start to go down. Maybe you shouldn't have started walking down the street at night in a 3rd world country. You continue walking through the dark, not realizing the hotel is over an hours walk away and there isn't a taxi in sight. Two thugs approach you from behind and beat the living hell out of you and take all of your things. Great. You finish limping to your hotel and call your embassy. Your trip is over. What a loser.\n");
            break;

            default: 
                console.log("Your response was lost in translation, and both the taxi and the camel have left with other tourists from your flight. Smooth move. Now you're gonna have to walk! I guess it's no big deal, except the sun is going down. You continue walking through the dark, not realizing the hotel is over an hours walk away and there isn't a taxi in sight. Two thugs approach you from behind and beat the living hell out of you and take all of your things. Great. You finish limping to your hotel and call your embassy. Your trip is over. Maybe backpacking isn't your thing? When you get home you take up knitting.\n");
            break;    

        }

    break;
    case "antarctica": 
        console.log( "You're so adventurous! You've just managed to find your way onto a ship bound for the coldest continent on Earth! Normally travel to Antarctica is extrememly restricted to tourists, but an old scientist friend of yours will be leading a research team there and invited you along. When you arrive you're blasted by a rush of cold, damp air that chills you to the bone. Good thing you have a thick jacket, because you won't last long outdoors in this climate! On your way to your lodging, you notice some of the local wildlife playing near the water. A seal! So cute! Should you walk over and try to pet him or should you just keep going for now and come back later?");
        let questionSeal = prompt.question("Pet the seal or find shelter?\n");
        questionSeal = questionSeal.toLowerCase
        switch (questionSeal) { 
            case "pet the seal": 
                console.log("Awwww, he's so cute! you approach slowly and reach out invitingly to pet him. The seal seems welcoming, then reaches out and latches onto your hand, pulling you into the icy cold water! You've just tried to pet a leopard seal, one of Antarctica's top predators. He still hasn't let go, and continues to drag you down to a depth of about 150 feet before releasing you. In the icy cold water your body goes into hypothermia and you die. You've sealed your fate.");
                console.log("        ██████████████        ".red);
                console.log("    ██████          ██████    ".red);
                console.log("  ████                  ████  ".red);
                console.log("  ██                      ██  ".red);
                console.log("████                      ████".red);
                console.log("██                          ██".red);
                console.log("██  ████████      ████████  ██".red);
                console.log("██  ████████      ████████  ██".red);
                console.log("██  ██████    ██    ██████  ██".red);
                console.log("██          ██████          ██".red);
                console.log("████        ██████        ████".red);
                console.log("  ██████              ██████  ".red);
                console.log("      ██              ██      ".red);
                console.log("      ██  ██  ██  ██  ██      ".red);
                console.log("      ██████████████████      ".red);
            break;
        }
    break;
    case "asia":
        console.log( "Sweet! Asia it is! Next stop Shanghai!" );
    break;
    case "australia": 
        console.log( "Australia and New Zealand have shut down their borders due to COVID-19 travel restrictions." );
    break;
    case "europe": 
        console.log( "Europe is currently closed due to COVID-19 travel restrictions!\n");
    break;
    case "north america": 
        console.log( "Aw Crap! We're on lockdown again! The super-spreader event at the Rose Garden has ifected all of the heads of government and the US has issued a mandatory lockdown order. No backapacking for us this summer. This sucks. Maybe you should just take a coding bootcamp or something...\n");
    break;
    case "south america": 
        console.log( "South America is currently closed due to COVID-19 travel restrictions!");
    break;
    default:
        console.log( `Where the hell is that?! I've never heard of ${continent}. Better check your spelling or Google Translate to make sure something didn't get lost in translation.`);
}
let playAgain = prompt.question(`Enter [p] to play again. Anything else to quit.\n`);
if (playAgain.toLowerCase() === 'p') {
   runGame();
} else {
    console.log("  @@@@@@@   @@@@@@  @@@@@@@@@@  @@@@@@@@       @@@@@@  @@@  @@@ @@@@@@@@ @@@@@@@".red);
    console.log(" !@@       @@!  @@@ @@! @@! @@! @@!           @@!  @@@ @@!  @@@ @@!      @@!  @@@".red);
    console.log(" !@! @!@!@ @!@!@!@! @!! !!@ @!@ @!!!:!        @!@  !@! @!@  !@! @!!!:!   @!@!!@!".red);
    console.log(" :!!   !!: !!:  !!! !!:     !!: !!:           !!:  !!!  !: .:!  !!:      !!: :!!".red);
    console.log("  :: :: :   :   : :  :      :   : :: :::       : :. :     ::    : :: :::  :   : :".red);
}
}
runGame();