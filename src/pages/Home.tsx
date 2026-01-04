import { useState } from "react";

export const HomePage = () => {

    const [titulo, setTitulo] = useState("MI APP USUARIOS");

    const modificarTitulo = () => {
        setTitulo("MI APP USUARIOS CRUD");
    }
    return (
        <>
            <h1>{titulo}</h1>
            <button onClick={() => modificarTitulo()}>CAMBIAR TITULO</button>
        </>
    );
}