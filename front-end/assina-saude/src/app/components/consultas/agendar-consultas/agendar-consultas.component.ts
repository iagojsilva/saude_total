import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'as-agendar-consultas',
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.css']
})



export class AgendarConsultasComponent implements OnInit{

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this._adapter.setLocale('br')
  }

  validDate(event:any){

    console.log(event)
  }
  

}
