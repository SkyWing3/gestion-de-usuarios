import { useNavigate } from "react-router";
import { getSelectedUsuario, useUsuariosStore } from "../state/user.store";
import { useEffect, useState } from "react";
import type { UsuarioResponse } from "../types/response/usuario.response";

export const UsuarioDetallePage = () => {

    const navigate = useNavigate();
    //const [usuario, setUsuario] = useState<UsuarioResponse | null>(null);
    //const {getUsuarioSelected} = useUsuariosStore();
    const usuario = useUsuariosStore(getSelectedUsuario);

    /*
    useEffect(() => {
        setUsuario(getUsuarioSelected());
    }, []);
    */
   
    return (
        <>
            <button onClick={() => navigate("/usuarios")}>Volver</button>
            {usuario && (
                <div className="">
                    <label>DATOS USUARIO</label>
                    <label>{usuario.nombre}</label>
                    <label>{usuario.correo}</label>
                    <label>{usuario.rol}</label>
                </div>
            )}
        </>
    );
}