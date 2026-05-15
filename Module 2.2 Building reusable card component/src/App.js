import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const profiles = [{id:1, image:"https://minecraft.wiki/images/thumb/Cow_JE7_BE4.png/800px-Cow_JE7_BE4.png?3de94", name: "Cow", biomes: "Most grassy Biomes", dateAdded:"July 19 2010", drops:["Steak", "Leather", "Experience"]},
    {id:2, image:"https://minecraft.wiki/images/Temperate_Pig_JE4_BE2.png?c550c" ,name:"Pig" , biomes:"Most grassy biomes" , dateAdded:"September 1 2009", drops:["Porkchop", "Experience"]},
    {id:3, image:"https://minecraft.wiki/images/White_Sheep_JE4_BE7.png?5062a", name:"Sheep", biomes:"Most grassy biomes except pale garden", dateAdded:"October 27 2009", drops:["Wool", "Mutton", "Experience"]},
  ];
  return (
    <div className="App">
      <h1>Minecraft Mob Profiles:</h1>
      <div className="profilesDiv">
        {profiles.map(ProfileCard)}
      </div>
    </div>
  );
}

export default App;
