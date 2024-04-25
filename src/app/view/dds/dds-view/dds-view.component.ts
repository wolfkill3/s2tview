import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {PudTableComponent} from "../../../util/pud-table/pud-table.component";
import {TableAttributeComponent} from "../../../util/table-attribute/table-attribute.component";
import {DdsViewAttributeComponent} from "../dds-view-attribute/dds-view-attribute.component";
import {AbstractViewComponent} from "../../abstract-view/abstract-view.component";

@Component({
  selector: 'app-dds-view',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    PudTableComponent,
    TableAttributeComponent,
    DdsViewAttributeComponent
  ],
  templateUrl: './dds-view.component.html',
  styleUrl: './dds-view.component.css'
})
export class DdsViewComponent extends AbstractViewComponent {
  conversionDepth?: number | null
  module = ''
  tableType = ''
  startDateFromCsv = ''
  incomingPudTables?:String | undefined = ''
  startOdsConversionDate = ''
  etlParams = ''
  sparkSubmitParameters = ''
  etlIdWrk?: number | null
  createDirHdfsWrk = ''
  ddlOnWrk = ''
  registerOnOrchestratorWrk = ''
  attributes: DdsViewAttributeComponent[] = []
}
