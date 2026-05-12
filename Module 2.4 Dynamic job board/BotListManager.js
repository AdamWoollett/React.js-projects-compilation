import { useState } from 'react';

const BotListManager = () => {
    const [bots, setBots] = useState([{ id: 1, botName: "FileOrganiserBot", botStatus: "Online", class: "botGreen" }, { id: 2, botName: "TerminalBot", botStatus: "Idling", class: "botOrange" }, { id: 3, botName: "WebBrowserBot", botStatus: "Disabled", class: "botRed" }]);
    function triggerJob(id) {
        console.log(id);
        //.map takes in a function and runs on each array item
        //... breaks the boundaries of the array passed in (removes the [] of the array) so that you don't end up with [[]]
        //Objects can only have 1 copy of a named property
        const modifiedBots = bots.map((bot) => {
            if (bot.id === id) {
                if (bot.botStatus === "Online") {
                    return { ...bot, botStatus: "Idling", class: "botOrange" }
                }
                else if (bot.botStatus === "Idling") {
                    return { ...bot, botStatus: "Disabled", class: "botRed" }
                }
                else if (bot.botStatus === "Disabled") {
                    return { ...bot, botStatus: "Online", class: "botGreen" }
                }
            } else {
                return bot
            }
        })
        //Below overrides original bot array
        setBots(modifiedBots);

        /*const updatedBotsStatus = bots.map(bot=>{
        if(bot.status === "Online"){
            return{
                ...bot,
                botStatus:"Idling",
            };}});
            setBots(updatedBotsStatus);*/
        /*switch(bots.botStatus){
            case "Online": bots.id.botStatus="Idling"; break;
            case "Idling": bots.botStatus="Disabled";break;
            case "Disabled": bots.botStatus="Online";break;
            default: console.log("Error with state switching function");*/
    };
    return (
        <><div className="bot-list-manager">
            <h1>Bot List Manager</h1>
            <ul>
                {console.log(bots)}
                {bots.map((myBot) => <li key={myBot.id} className={myBot.class}>{myBot.id}-{myBot.botName}-{myBot.botStatus}<button onClick={() => triggerJob(myBot.id)}>Trigger Job</button></li>)}
            </ul>
        </div></>
    );
};

export default BotListManager