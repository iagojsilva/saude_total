import { NgModule } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    exports: [
        MatTabsModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
    ],
    imports: [
        BrowserAnimationsModule,
    ],
})

export class AngularMaterialModule{}