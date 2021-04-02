import { ElementRef } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private el: ElementRef){}

  ngAfterViewInit(): void {
    this.el.nativeElement.ownerDocument.body.style.backgroundColor = '#303030'
  }
  title = 'assina-saude';
}
