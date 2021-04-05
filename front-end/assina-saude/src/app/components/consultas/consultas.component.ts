import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { ConsultaService } from './consultas.service';
import { ConsultaModel } from './models/consulta.model';
import { EspecialidadeModel } from './models/especialidade.model';
import { ProfissionalModel } from './models/profissional.model';



@Component({
  selector: 'as-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{
  
  constructor(private consultaService : ConsultaService) { }

  consultas: ConsultaModel[];
  especialidades: EspecialidadeModel
  profissionais: ProfissionalModel

  ngOnInit(): void {
    this.getConsultas()
    this.getEspecialidades()
  }

  getConsultas(){
    this.consultaService.getConsultas().subscribe(dataConsulta => {
      this.consultas = dataConsulta
    })
  }

  getEspecialidades(){
    this.consultaService.getEspecialidades().subscribe(dataEsp=>{
    this.especialidades = dataEsp
    })
  }

  

}
    
  
  

