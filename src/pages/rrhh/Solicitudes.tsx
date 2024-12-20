import React from "react";
import AuthGuard from "../../components/guards/AuthGuard";
import CrearSolicitudes from "../../components/rrhh/Solicitudes/CrearSolicitudes";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";

const Solicitudes = () => {
    return (
        <AuthGuard requiredRoles={["CrearSolicitudes"]}>
            <React.Fragment>
                <Helmet title="Crear Solicitudes" />
                <Card>
                    <Card.Body>
                        <div className="m-sm-3">
                            <CrearSolicitudes />
                        </div>
                    </Card.Body>
                </Card>
            </React.Fragment>
        </AuthGuard>
    );
};

export default Solicitudes;