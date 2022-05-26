
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cellText:string="";
  constructor() { }
  ngOnInit(): void {
    
  }

}

export class Cell{
  text:string;
  constructor(text:string){
    this.text=text;
  }
}
