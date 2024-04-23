import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-table-attribute',
  templateUrl: './table-attribute.component.html',
  styleUrl: './table-attribute.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TableAttributeComponent {
  @Input() public attribute: TableAttributeComponent = this;
  @Output() public delete: EventEmitter<String> = new EventEmitter()
  public attributeName: string = '';
  public description: string = '';
  public note: string = '';
  public schemePud: string = '';
  public attributeType: string = '';
  public pk: boolean = false;
  public fk: boolean = false;
  public fkTableName: string = '';
  public attributeValueExpression: string = '';

  constructor() {
  }

  setAttributeName(value: string) {
    this.attribute.attributeName = value;
    this.attributeName = value;
  }

  setDescription(value: string) {
    this.attribute.description = value;
    this.description = value;
  }

  setNote(value: string) {
    this.attribute.note = value;
    this.note = value;
  }

  setSchemePud(value: string) {
    this.attribute.schemePud = value;
    this.schemePud = value;
  }

  setAttributeType(value: string) {
    this.attribute.attributeType = value;
    this.attributeType = value;
  }

  setPk() {
    this.pk = !this.pk;
    this.attribute.pk = this.pk;
  }

  setFk() {
    this.fk = !this.fk;
    this.attribute.fk = this.fk;

  }

  setFkTableName(value: string) {
    this.attribute.fkTableName = value;
    this.fkTableName = value;
  }

   setAttributeValueExpression(value: string) {
    this.attribute.attributeValueExpression = value;
    this.attributeValueExpression = value;
  }

  public getJson():Object {
    return {
      'attributeName': this.attributeName,
      'description': this.description,
      'note': this.note,
      'schemePud': this.schemePud,
      'attributeType': this.attributeType,
      'pk': this.pk,
      'fk': this.fk,
      'fkTableName': this.fkTableName,
      'attributeValueExpression': this.attributeValueExpression
    };
  }

  public deleteMe() {
    console.log('deletion ' + this.attributeName)
    this.delete.emit(this.attributeName);
  }
}
