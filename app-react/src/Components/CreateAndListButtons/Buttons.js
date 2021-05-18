import './Buttons.css';

function Buttons() {
  return (
    <div className="buttons-nav">
      <div className="button-search">
        <a href="/search" onclick="search">Buscar CPF</a>
      </div>
      <div className="button-list">
        <a href="/list">Listar Usuários</a>
      </div>
    </div>
  );
}

export { Buttons };
