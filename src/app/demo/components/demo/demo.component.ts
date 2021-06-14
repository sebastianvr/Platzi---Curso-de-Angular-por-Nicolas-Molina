import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'claudio'];

  power = 10;


  addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    // splice cambia el contenido de un array eliminando o agregando elementos.
    // this.items.splice(index, 1); quiere decir que Elimina 1 elemento desde el índice "index".
    this.items.splice(index, 1);
  }
}
