import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignIn from "../../components/auth/SignIn";

const SignInPage = () => (
  // <div className="sign-in-page">
    <React.Fragment>
      <Helmet title="Iniciar Sesión" />
      <div className="text-center mt-4">
        <h2>¡Bienvenido de nuevo!</h2>
        <p className="lead">Inicia sesión en tu cuenta para continuar</p>
      </div>
      <Card>
        <Card.Body>
          <div className="m-sm-3">
            <SignIn />
          </div>
        </Card.Body>
      </Card>
      {/* <div className="text-center mb-3">
        ¿No tienes una cuenta? <Link to="/auth/sign-up">Registrate</Link>
      </div> */}
    </React.Fragment>
  // </div>
);

export default SignInPage;
