import { create } from "zustand";
import type { UsuarioRequest } from "../types/request/usuario.request";
import type { UsuarioResponse } from "../types/response/usuario.response";

interface UsuarioState {
    usuarios: UsuarioResponse[];
    usuarioSelected: UsuarioResponse | null;
}

interface UsuarioActions {
    createUsuario: (usuario: UsuarioRequest) => void;
    updateUsuario: (id: number, usuarioRequest: UsuarioRequest) => void;
    deleteUsuario: (id: number) => void;
    listarUsuario: () => UsuarioResponse[];
    getUsuarioById: (id: number) => UsuarioResponse | null;
    setUsuarioSelected: (usuarioResponse: UsuarioResponse) => void;
    getUsuarioSelected: () => UsuarioResponse | null;
}

type UsuarioStore = UsuarioState & UsuarioActions;

export const useUsuariosStore = create<UsuarioStore>((set, get) => ({
    // Estado inicial
    usuarios: [
            {id: 1, nombre: "usuario 1", correo: "corre1@test.com", rol: "ADMIN"},
            {id: 2, nombre: "usuario 2", correo: "corre2@test.com", rol: "SIMPLE"}
        ],

    createUsuario: (usuarioRequest) => {
        set((state) => ({
            usuarios: [...state.usuarios, {...usuarioRequest, id: state.usuarios.length + 1}]
        }))
    },
    usuarioSelected: null,
    updateUsuario: (id, usuarioRequest) => {
        set((state) => ({
            usuarios: state.usuarios.map((usuario) => 
                usuario.id === id ? {...usuario, ...usuarioRequest} : usuario
            )
        }))
    },
    deleteUsuario: (id) => {
        set((state) => ({
            usuarios: state.usuarios.filter((usuario) => usuario.id !== id)
        }))
    },
    listarUsuario: () => {
        return get().usuarios;
    },
    getUsuarioById(id) {
        const usuario = get().usuarios.find((usuario) => usuario.id === id);
        return usuario || null;
    },
    setUsuarioSelected: (usuarioResponse) => {
        set((state) => ({
            usuarioSelected: usuarioResponse
        }))
    },
    getUsuarioSelected: () => {
        return get().usuarioSelected || null;
    }
}));


// Queries // Consultas // Selectores
export const getSelectedUsuario = (state: UsuarioStore) => state.usuarioSelected;
export const selectUsuarioByRol = (rol: string) => (state: UsuarioStore) =>
    state.usuarios.filter((usuario) => usuario.rol === rol);