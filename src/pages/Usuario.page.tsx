import { useState } from "react"
import type { UsuarioResponse } from "../types/response/usuario.response";

export const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState<UsuarioResponse[]>(
        [
            {id: 1, nombre: "usuario 1", correo: "corre1@test.com", rol: "ADMIN"},
            {id: 1, nombre: "usuario 2", correo: "corre2@test.com", rol: "SIMPLE"}
        ]
    );

    return (
        <>
            {usuarios.map((usuario, index) => (
                <div key={index}>
                    {JSON.stringify(usuario)}
                </div>
            ))}
        </>
    );
}