import type { UsuarioRequest } from "../types/request/usuario.request";
import type { UsuarioResponse } from "../types/response/usuario.response";

export class UsuarioService {

    public static async listarUsuarios(): Promise<UsuarioResponse[]> {
        //await obtenerUsuarios();
        //return [];
    }

    public static async detalleUsuario(): Promise<UsuarioResponse> {

    }

    public static async crearUsuario(UsuarioRequest: UsuarioRequest): Promise<UsuarioResponse> {

    }

    public static async actualizarUsuario(id: number, UsuarioRequest: UsuarioRequest): Promise<UsuarioResponse> {

    }

    public static async eliminarUsuario(id: number) {
        
    }
}