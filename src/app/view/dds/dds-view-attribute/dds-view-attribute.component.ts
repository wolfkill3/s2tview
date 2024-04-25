import {Component, Input} from '@angular/core';
import {AbstractViewAttributeComponent} from "../../abstract-view-attribute/abstract-view-attribute.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dds-view-attribute',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dds-view-attribute.component.html',
  styleUrl: './dds-view-attribute.component.css'
})
export class DdsViewAttributeComponent extends AbstractViewAttributeComponent{
  attribute?:DdsViewAttributeComponent
  disable = true
  selectQueryForSourceAsIs = ''
  sourcesAsIs = ''
  fkTableName = ''
  typeCheck?: boolean | null
  suffix = ''
  conversionDataType = ''
  attributeValueExpression = ''
  fk?: boolean | null

  @Input() public set setAttribute(attribute: DdsViewAttributeComponent) {
    this.attributeName = attribute.attributeName || ''
    this.generatedDdl = attribute.generatedDdl || ''
    this.attributeType = attribute.attributeType || ''
    this.description = attribute.description || ''
    this.note = attribute.note || ''
    this.schemePud = attribute.schemePud || ''
    this.pk = attribute.pk || false
    this.disable = attribute.disable || true
    this.selectQueryForSourceAsIs = attribute.selectQueryForSourceAsIs || ''
    this.sourcesAsIs = attribute.sourcesAsIs || ''
    this.fkTableName = attribute.fkTableName || ''
    this.typeCheck = attribute.typeCheck || false
    this.suffix = attribute.suffix || ''
    this.conversionDataType = attribute.conversionDataType || ''
    this.attributeValueExpression = attribute.attributeValueExpression || ''
    this.fk = attribute.fk || false
    this.attribute = attribute
  }
}
