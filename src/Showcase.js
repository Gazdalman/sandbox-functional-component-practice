import sylveon from "./images/700.png";
import "./Showcase.css";

const Showcase = () => {
  const favPokemon = "Silveon";
  const pokeCharacteristics = {
    type: "fairy/normal",
    move: "Dazzling Beam"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={sylveon}
        alt={favPokemon}
        style={{
          height: "50%",
          width: "50%",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "100%"
        }}
      ></img>
      <h2>
        Sylveon's type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of the
        moves it uses is{" "}
        <span className="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
};

export default Showcase;
