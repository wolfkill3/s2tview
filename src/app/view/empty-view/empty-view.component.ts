import { Component } from '@angular/core';
import {AbstractViewComponent} from "../abstract-view.component";

@Component({
  selector: 'app-empty-view',
  standalone: true,
  imports: [],
  templateUrl: './empty-view.component.html',
  styleUrl: './empty-view.component.css'
})
export class EmptyViewComponent extends AbstractViewComponent{

}
