import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-abstract-view',
  standalone: true,
  imports: [],
  templateUrl: './abstract-view.component.html',
  styleUrl: './abstract-view.component.css'
})
export class AbstractViewComponent {
  @Input() view: AbstractViewComponent = this
  tableName = ''
  description = ''
  dataLayer = ''
  schemaPud = ''
  pk:String = ''
  extraPartitionField = ''
  conversionExtraPartitionField = ''
  scdType = ''
  etlIdDev?: number | null
  createDirHdfsDev = ''
  ddlOnDev = ''
  registerOnOrchestratorDev = ''
  etlIdProd?: number | null
  registerOnOrchestratorProd = ''
  ddlOnProd = ''
  approved?: boolean | null
  createDirHdfsProd = ''
}
