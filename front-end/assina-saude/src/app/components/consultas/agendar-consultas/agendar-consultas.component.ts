import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ConsultaService } from '../consultas.service';
import { ConsultaModel } from '../models/consulta.model';
import { EspecialidadeModel } from '../models/especialidade.model';



@Component({
  selector: 'as-agendar-consultas',
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.css'],
  encapsulation: ViewEncapsulation.None,

})



export class AgendarConsultasComponent implements OnInit{
  constructor(
    private _adapter: DateAdapter<any>, 
    private consultaService: ConsultaService,
    private router: Router,
    ) { }

    datas;
    

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      
      return (cellDate.toJSON() === new Date(this.datas[0]).toJSON() || 
      cellDate.toJSON() === new Date(this.datas[1]).toJSON() ||
      cellDate.toJSON() === new Date(this.datas[2]).toJSON()
      ) ? 'example-custom-date-class' : '';
      // Highlight the 1st and 20th day of each month. 
    }
    return '';
   
  }



  @Input() especialidades: Array<EspecialidadeModel>
  
  profissionaisId;
  profissionaisData: any = [];
  profissionalEscolhido = null;
  especialidadeEscolhida= null;
  dataEscolhida = null;
  horarioEscolhido= null;
  dias = [];
  request = false;
  input = true;

  ngOnInit(): void {
    this._adapter.setLocale('br')
  }

  validDate(value: Date){

    this.dataEscolhida = value
    for (let data of this.datas){
      if (new Date(data).toJSON() === value.toJSON()){
        this.input = false
        return true
      }
    }
    alert('Data invalida, escolha outra data')
    this.input = true
  }

  especialidadeSetter(value){
    this.especialidadeEscolhida = value;
    this.getProfissionaisByEspecialty(value)
  }

  profissionalSetter(value){
    this.profissionalEscolhido = value
    this.handleDate()
  }

  horarioSetter(value){
    this.horarioEscolhido = value
  }
  
  getProfissionaisByEspecialty(id: string){
    this.consultaService.getProfissionalByEspecialty(id).subscribe(data=>{
      this.profissionaisId = data
      if(this.profissionaisId.length >= 1){
        let dataPro = []
        this.profissionaisId.forEach(element => {
          this.consultaService.getProfissional(element['id']).subscribe(data=>{
            data['horario_disponiveis'] = data['horario_disponiveis'].split(',')
            dataPro.push(data)
          })
        });
        this.profissionaisData = dataPro
      }
    })
  }


  async createNewConsulta(){
    await this.sleep(2000)
    this.consultaService.getProfissional(this.profissionalEscolhido).subscribe(data=>{
      let dataFormatada = (this.dataEscolhida.getFullYear()) + "-" + ((this.dataEscolhida.getMonth() + 1)) + "-" + (this.dataEscolhida.getDate() ); 
      let body: ConsultaModel ={
        paciente: '1',
        profissional: data.id,
        especialidade: this.especialidadeEscolhida,
        horario_disponiveis: this.horarioEscolhido.slice(1,),
        data: dataFormatada,
      }
      this.consultaService.agendarConsultas(body).subscribe()
    }).unsubscribe
    
  }
  
  handleDate(){
    this.datas = this.profissionaisData[0].data_disponiveis.replaceAll('-',',').split(', ')

  }


  goToconfirmation(id: string){
    this.router.navigate(['/confirmation/', id])
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
