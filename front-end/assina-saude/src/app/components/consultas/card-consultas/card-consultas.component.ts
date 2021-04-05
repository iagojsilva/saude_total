import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConsultaService } from '../consultas.service';
import { AdiarDialog } from './adiar-dialog/adiar';

@Component({
  selector: 'as-card-consultas',
  templateUrl: './card-consultas.component.html',
  styleUrls: ['./card-consultas.component.css']
})
export class CardConsultasComponent implements OnInit{

  constructor(
    public dialog: MatDialog, 
    private consultaService: ConsultaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  @Input() profissional: string;
  @Input() especialidade: string;
  @Input() horario_disponiveis: string;
  @Input() data: string;
  @Input() crm: string;
  @Input() id: string;
  input;

  openDialog(id){
    let config = {
      data: {'id': id}
    }
    console.log(config)
    this.dialog.open(AdiarDialog, config)
  }

    delete(){
    this.consultaService.deleteConsulta(this.id).subscribe()
    alert('Consulta cancelada com sucesso!')
    location.reload();

  }

  
}

