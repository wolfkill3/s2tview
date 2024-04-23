import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-pud-table',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pud-table.component.html',
  styleUrl: './pud-table.component.css',
  providers:[PudTableComponent]
})
export class PudTableComponent implements OnInit {
  @Input() public name:String = '';
  @Output() public delete: EventEmitter<String> = new EventEmitter()

  constructor() {
  }
  ngOnInit() {}

  public deleteMe() {
    console.log('deletion')
    this.delete.emit(this.name);
  }
}
