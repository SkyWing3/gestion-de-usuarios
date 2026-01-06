import { UsuarioCard } from "../components/usuarios/UsuarioCard";
import { useUsuariosStore } from "../state/user.store";

export const UsuariosPage = () => {
    const {usuarios} = useUsuariosStore();

    return (
        <>
            {usuarios.map((usuario) => (
                <UsuarioCard key={usuario.id} usuario={usuario}/>
            ))}
        </>
    );
}