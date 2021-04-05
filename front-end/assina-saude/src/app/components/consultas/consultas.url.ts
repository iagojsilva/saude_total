import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
})


export class URLS {
    ConsultaByPacient: string = 'https://assina-saude.herokuapp.com/paciente/1/consultas/'
    Especialidade: string = 'https://assina-saude.herokuapp.com/especialidade/'
    Consultas : string = 'https://assina-saude.herokuapp.com/consultas/'
    Profissionais: string = 'https://assina-saude.herokuapp.com/profissional/'
    ProfissionalByEspecialty: Array<string> = [
        'https://assina-saude.herokuapp.com/especialidade/',
        '/profissionais'
        ]
}