import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { CardConsultasComponent } from './card-consultas/card-consultas.component';

export interface ASTab {
  label: string;
  content: string;
}


@Component({
  selector: 'as-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent{
  
  asyncTabs : Observable<ASTab[]>;

  constructor() {}
   }

    
    
  
  

