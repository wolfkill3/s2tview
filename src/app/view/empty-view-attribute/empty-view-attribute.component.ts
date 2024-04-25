import { Component } from '@angular/core';
import {AbstractViewAttributeComponent} from "../abstract-view-attribute.component";

@Component({
  selector: 'app-empty-view-attribute',
  standalone: true,
  imports: [],
  templateUrl: './empty-view-attribute.component.html',
  styleUrl: './empty-view-attribute.component.css'
})
export class EmptyViewAttributeComponent extends AbstractViewAttributeComponent{

}
