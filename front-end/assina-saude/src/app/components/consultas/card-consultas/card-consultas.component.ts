import { Component, Input, OnInit } from '@angular/core';
import { ConsultaModel } from '../models/consulta.model';
import { ConsultaService } from '../consultas.service';

@Component({
  selector: 'as-card-consultas',
  templateUrl: './card-consultas.component.html',
  styleUrls: ['./card-consultas.component.css']
})
export class CardConsultasComponent {

  constructor(private consultaService : ConsultaService) { }

  @Input() profissional: string;
  @Input() especialidade: string;
  @Input() horario_disponiveis: string;
  @Input() data: string;
  @Input() crm: string;
}
