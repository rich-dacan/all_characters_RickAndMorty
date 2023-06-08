import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ listCharacters }) => {
  return (
    <>
      <h1>Characters from </h1>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        alt="Open - Rick And Morty Svg Free Clipart@pikpng.com"
      />

      <ul>
        {listCharacters.map(
          ({
            name,
            image,
            id,
            status,
            species,
            gender,
            type,
            origin,
            location,
            episode,
          }) => (
            <CharCard
              key={id}
              name={name}
              image={image}
              status={status}
              species={species}
              gender={gender}
              type={type || "Unknown"}
              origin={origin.name}
              location={location.name}
              episode={episode}
            />
          )
        )}
      </ul>
    </>
  );
};

export default Characters;
