import { useState } from "react"
import type { UsuarioResponse } from "../types/response/usuario.response";
import { UsuarioCard } from "../components/usuarios/UsuarioCard";

export const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState<UsuarioResponse[]>(
        [
            {id: 1, nombre: "usuario 1", correo: "corre1@test.com", rol: "ADMIN"},
            {id: 2, nombre: "usuario 2", correo: "corre2@test.com", rol: "SIMPLE"}
        ]
    );

    return (
        <>
            {usuarios.map((usuario) => (
                <UsuarioCard key={usuario.id} usuario={usuario}/>
            ))}
        </>
    );
}