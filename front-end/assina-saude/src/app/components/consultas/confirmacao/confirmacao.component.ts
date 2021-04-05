import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaService } from '../consultas.service';
import { ConsultaModel } from '../models/consulta.model';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  constructor(
    private consultaService: ConsultaService,
    ) { }
  
  ngOnInit(): void {
    this.getInfo()

  }

  infos: ConsultaModel[] = [];


  async getInfo(){
    await this.sleep(2000)
    this.consultaService.getConsultas().subscribe(consulta => this.infos = [consulta[consulta.length-1]])
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
