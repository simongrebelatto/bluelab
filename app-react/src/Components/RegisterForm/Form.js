import './Form.css';

function RegisterForm() {
  return (
    <div className="Form-Register-User">
      <form className="main-form" method="POST">
        <input type="text" placeholder="Nome *" name="name" />
        <input type="tel" placeholder="Telefone *" name="phone" />
        <input type="number" placeholder="CPF *" name="cpf" />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

export { RegisterForm };
