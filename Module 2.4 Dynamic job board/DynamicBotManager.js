import { useState } from 'react';

/*Create component*/
const DynamicBotManager=()=>{
    /*Create useState hooks for list of bots and new bot object to hold data for new bot*/
    const[bots,setBots]=useState([
        {id:1,botName:"E-mail Generator",status:"Online"},
        {id:2,botName:"Excel Sheet Maker",status:"Idling"},
        {id:3,botName:"Word Writer",status:"Offline"}]);
    const[newBot,setNewBot]=useState({id:"",botName:"",status:""});
    /*Function to remove a bot */
    function deleteBot(id){
        console.log(id)
        setBots(bots.filter(bot=>id!==bot.id))
    };
    /*Function to add a bot */
    const addBotToList=()=>{
        /*First check none of the input boxes are blank */
        if(newBot.id.trim()!=="" && newBot.botName.trim()!=="" && newBot.status.trim()!==""){
            setBots([...bots,newBot])
            /*Clear data in newBot to make space for new input */
            setNewBot({id:"",botName:"",status:""})
        }
    };
    /*The HTML returned by the JSX to display the bot list outputs */
    return(
        <div className="dynamicBotManager">
            <h1>Dynamic Bot List Manager</h1>
            <ul>
                {bots.map((myBot) => <li key={myBot.id}>{myBot.id}-{myBot.botName}-{myBot.status}<button onClick={() => deleteBot(myBot.id)}>Delete Bot</button></li>)}
            </ul>
            <h3>Add a new bot to the list:</h3>
            <input type="text" value={newBot.id} onChange={(e)=>setNewBot({...newBot,id:e.target.value})} placeholder="Enter bot ID"></input>
            <input type="text" value={newBot.botName} onChange={(e)=>setNewBot({...newBot,botName:e.target.value})} placeholder="Enter bot name"></input>
            <input type="text" value={newBot.status} onChange={(e)=>setNewBot({...newBot,status:e.target.value})} placeholder="Enter bot status"></input>
            <button onClick={addBotToList}>Add Bot</button>
        </div>
    )
};

export default DynamicBotManager