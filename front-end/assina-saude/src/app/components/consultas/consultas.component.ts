import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { ConsultaService } from './consultas.service';
import { ConsultaModel } from './models/consulta.model';



@Component({
  selector: 'as-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{
  
  constructor(private consultaService : ConsultaService) { }

  consultas: ConsultaModel;

  ngOnInit(): void {
    this.getConsultas()
  }

  getConsultas(){
    this.consultaService.getConsultas().subscribe(data => {
      console.log(data)
      this.consultas = data
    })
  }

}
    
  
  

