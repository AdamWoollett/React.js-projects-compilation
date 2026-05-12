const ProfileCard = ({image, name, biomes, dateAdded, drops, id})=>{
    return(
        <div className="profile-card" key={id}>
            <img src={image} alt="Isometric mob profile"></img><p>{name}</p><h3>Biomes: {biomes}</h3><p><b>DateAdded:</b><br></br>{dateAdded}</p><p>Drops: {drops.join(", ")}</p>
        </div>
    )
};

export default ProfileCard;