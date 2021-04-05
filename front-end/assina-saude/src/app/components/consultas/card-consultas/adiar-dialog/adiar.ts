import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConsultaService } from "../../consultas.service";

export interface DialogData {
    id: string;
}

@Component({
    selector: 'adiar',
    templateUrl: 'adiar.html',
  })
  
  export class AdiarDialog {

    constructor(
        public dialogRef: MatDialogRef<AdiarDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private consultaService: ConsultaService
        ){}

    input= true;
    novaData: string;


    saveDate(data: Date){
        let dataFormatada = (data.getFullYear()) + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() ); 

        this.novaData = dataFormatada
        console.log(dataFormatada, this.data)
    }

    update(){
        this.consultaService.updateConsulta(this.data.id, this.novaData).subscribe(data => console.log(data))
        this.dialogRef.close()
        alert('Consulta adiada com sucesso')
        location.reload()
    }
  }