import { Component } from '@angular/core';

@Component({
  selector: 'app-abstract-view-attribute',
  standalone: true,
  imports: [],
  templateUrl: './abstract-view-attribute.component.html',
  styleUrl: './abstract-view-attribute.component.css'
})
export class AbstractViewAttributeComponent {
  attributeName = ''
  description = ''
  note = ''
  schemePud = ''
  attributeType = ''
  pk?: boolean | null
  generatedDdl = ''

}
