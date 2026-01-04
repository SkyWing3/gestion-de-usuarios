import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuario.response"

interface UsuarioDetalleProps {
    usuario: UsuarioResponse;
}

export const UsuarioCard = ({usuario}: UsuarioDetalleProps) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="" onClick={() => navigate("/usuarios/detalle")}>
                <label>{usuario.nombre}</label>
                <div>
                    <label>{usuario.correo}</label>
                    <label>{usuario.rol}</label>
                </div>
            </div>
        </>
    );
}