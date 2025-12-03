import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  if (!character) return null;

  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        loading="lazy"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{character.name}</h5>

        <div className="mb-2">
          <span className="badge bg-primary">
            {character.race || "Unknown"}
          </span>

          <span className="badge bg-warning text-dark ms-2">
            {character.gender || "?"}
          </span>
        </div>

        <p className="card-text text-muted small flex-grow-1">
          <strong>Ki:</strong> {character.ki}  
          <br />
          <strong>Max Ki:</strong> {character.maxKi}
        </p>

        <Link to={`/characters/${character.id}`} className="btn btn-outline-primary w-100">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
