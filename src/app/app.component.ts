import { Component, Query } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compprime';

  titulo:any;
 suggestions:any[] = [];
 selectedItem: any;
 items:any[] = [];
 date: Date = new Date();

  upper() {
    this.titulo = this.titulo.toUpperCase();
  }

  

  search(event:any) {
    this.suggestions = [...Array(11).keys()].map(item => event.query + '-' + item);
}


}
