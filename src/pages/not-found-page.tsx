import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe.</p>
        <Link to="/">Página Inicial</Link>
      </div>
    </div>
  );
};
