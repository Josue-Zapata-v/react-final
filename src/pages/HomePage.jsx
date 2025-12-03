import { Link } from 'react-router';

const HomePage = () => {
  return (
    <article className="py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold">
            DragonBallApi
          </h1>
          <p className="lead text-muted">
            Explora personajes
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-5">
                <div className="text-primary">
                  <i className="bi bi-people-fill" style={{ fontSize: '4rem' }}></i>
                </div>
                <h5 className="card-title fw-bold">Ver Personajes</h5>
                <p className="card-text text-muted">
                  Explora todos los personajes
                </p>
                <Link to="/characters" className="btn btn-primary btn-lg">
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  Explorar
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-5">
                <div className="text-success">
                  <i className="bi bi-chat-dots-fill" style={{ fontSize: '4rem' }}></i>
                </div>
                <h5 className="card-title fw-bold">Chat con IA</h5>
                <p className="card-text text-muted">
                  Pregunta sobre personajes y te ayudaré a encontrarlos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomePage;
