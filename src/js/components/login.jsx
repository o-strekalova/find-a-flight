import React, {useState} from "react";
import PropTypes from "prop-types";

const AUTH_TOKEN = `wgHmgtWo4C11c3jCtxE1`;

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validPasswordRegex = RegExp(
  /^([a-zA-Z0-9@$!%*#?&]{8,})$/i
);

const Login = (props) => {
  const {onSubmit} = props;
  const [emailError, setEmailError] = useState(``);
  const [passwordError, setPasswordError] = useState(``);
  const [formDisabilityStatus, setformDisabilityStatus] = useState(true);

  const onChange = (evt) => {
    evt.preventDefault();
    setformDisabilityStatus(false);
    const {name, value} = evt.target;

    switch (name) {
      case `email`:
        setEmailError(validEmailRegex.test(value) ? `` : `Это не похоже на e-mail`);
        break;
      case `password`:
        setPasswordError(validPasswordRegex.test(value) ? `` : `Минимум 8 символов, без кириллицы`);
        break;
      default:
        break;
    }
  };

  return (
    <main className="page__main">
      <div className="page__bg-image"></div>
      <section className="page__login login">
        <h1 className="login__title">Simple Flight Check</h1>
        <form className="login__form form" method="post" action="#" noValidate
          onSubmit={(evt) => {
            evt.preventDefault();
            sessionStorage.setItem(`authToken`, AUTH_TOKEN);
            onSubmit();
          }}
        >
          <div className={emailError ? `form__input-wrapper form__input-wrapper--error` : `form__input-wrapper`}>
            <label className="form__label" htmlFor="email">Логин:</label>
            <input className="form__input" type="email" name="email" id="email" required noValidate onChange={onChange}/>
            <span className="form__input-error">{emailError}</span>
          </div>
          <div className={passwordError ? `form__input-wrapper form__input-wrapper--error` : `form__input-wrapper`}>
            <label className="form__label" htmlFor="password">Пароль:</label>
            <input className="form__input" type="password" name="password" id="password" required noValidate onChange={onChange}/>
            <span className="form__input-error">{passwordError}</span>
          </div>
          <button className="form__submit" type="submit" disabled={emailError || passwordError || formDisabilityStatus}>Войти</button>
        </form>
      </section>
    </main>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(Login);
