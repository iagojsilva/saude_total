import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { URLS } from './consultas.url'
import { ConsultaModel } from './models/consulta.model'
import { EspecialidadeModel } from './models/especialidade.model'
import { ProfissionalModel } from './models/profissional.model'


@Injectable({
    providedIn: 'root',
})

export class ConsultaService {
    constructor(private http: HttpClient, private urls: URLS){}

    

    getConsultas(){
        return this.http.get<ConsultaModel[]>(this.urls.ConsultaByPacient);
    }

    agendarConsultas(consulta: ConsultaModel){
        const body: ConsultaModel = {
            paciente: consulta.paciente,   
            especialidade: consulta.especialidade,
            profissional: consulta.profissional,
            data: consulta.data,
            horario_disponiveis: consulta.horario_disponiveis,
        }

        return this.http.post(this.urls.Consultas, body)

    }

    getEspecialidades(){
        return this.http.get<EspecialidadeModel>(this.urls.Especialidade)
    }

    getProfissionalByEspecialty(id: string){
        const url = this.urls.ProfissionalByEspecialty[0] + id + this.urls.ProfissionalByEspecialty[1]
        return this.http.get(url)
    }

    getProfissional(id: string){
        return this.http.get<ProfissionalModel>(this.urls.Profissionais+id)
    }

    deleteConsulta(id){
        return this.http.delete(this.urls.Consultas + id+'/')
    }

    updateConsulta(id, data){
        let body = {
            'data': data
        }
        return this.http.patch(this.urls.Consultas+id+'/', body)
    }
}