import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConsultaModel } from './models/consulta.model'


@Injectable({
    providedIn: 'root',
})

export class ConsultaService {
    constructor(private http: HttpClient){}

    url: string = 'http://localhost:8000/paciente/1/consultas/'

    getConsultas(){
        return this.http.get<ConsultaModel>(this.url);
    }

    agendarConsultas(consulta: ConsultaModel){
        const body: ConsultaModel = {
        especialidade: consulta.especialidade,
        profissional: consulta.profissional,
        data: consulta.data,
        horario: consulta.horario,
        crm: consulta.crm
        }

        return this.http.post(this.url, body)

    }
}