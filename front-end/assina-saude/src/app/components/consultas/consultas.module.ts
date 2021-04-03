import { NgModule } from '@angular/core';
import { CardConsultasComponent } from "./card-consultas/card-consultas.component";
import { AgendarConsultasComponent } from './agendar-consultas/agendar-consultas.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConsultasComponent } from './consultas.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        HttpClientModule
    ],
    exports: [
        ConsultasComponent
    ],
    declarations: [
        CardConsultasComponent,
        AgendarConsultasComponent,
        ConsultasComponent
    ]
})

export class ConsultasModule{}