import { NgModule } from '@angular/core';
import { CardConsultasComponent } from "./card-consultas/card-consultas.component";
import { AgendarConsultasComponent } from './agendar-consultas/agendar-consultas.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConsultasComponent } from './consultas.component';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

import {AdiarDialog } from './card-consultas/adiar-dialog/adiar';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        HttpClientModule,
        RouterModule,
        MatProgressBarModule,
        MatDialogModule
    ],
    exports: [
        ConsultasComponent
    ],
    declarations: [
        CardConsultasComponent,
        AgendarConsultasComponent,
        ConsultasComponent,
        ConfirmacaoComponent,
        AdiarDialog
    ]
})

export class ConsultasModule{}