import { useNavigate } from "react-router";

export const UsuarioDetallePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/usuarios")}>Volver</button>
            <div className="">
                <label>DATOS USUARIO</label>
                {/*<label>{usuario.nombre}</label>
                <label>{usuario.correo}</label>
                <label>{usuario.rol}</label>*/}
            </div>
        </>
    );
}