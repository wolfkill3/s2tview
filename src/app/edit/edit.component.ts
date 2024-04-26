import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PudTableComponent} from "../util/pud-table/pud-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableAttributeComponent} from "../util/table-attribute/table-attribute.component";
import {HttpClient} from "@angular/common/http";
import {DdsViewComponent} from "../view/dds/dds-view/dds-view.component";
import {AbstractViewComponent} from "../view/abstract-view/abstract-view.component";
import {BASE_URL} from "../app.config";
import {DdsViewAttributeComponent} from "../view/dds/dds-view-attribute/dds-view-attribute.component";


export interface DdsView {
  table: DdsTable
  tableAttributes?: any[]
}

export interface DdsTable {
  tableName?: any
  description?: any
  dataLayer?: any
  schemaPud?: any
  pk?: String
  extraPartitionField?: any
  conversionExtraPartitionField?: any
  scdType?: any
  etlIdDev?: any
  createDirHdfsDev?: any
  ddlOnDev?: any
  registerOnOrchestratorDev?: any
  etlIdProd?: any
  registerOnOrchestratorProd?: any
  ddlOnProd?: any
  createDirHdfsProd?: any
  approved?: any
  conversionDepth?: any
  module?: any
  tableType?: any
  startDateFromCsv?: any
  incomingPudTables?: String
  startOdsConversionDate?: any
  etlParams?: any
  sparkSubmitParameters?: any
  etlIdWrk?: any
  createDirHdfsWrk?: any
  ddlOnWrk?: any
  registerOnOrchestratorWrk?: any
  attributes: DdsViewAttributeComponent[]
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    NgForOf,
    PudTableComponent,
    ReactiveFormsModule,
    TableAttributeComponent,
    FormsModule,
    AbstractViewComponent,
    DdsViewComponent,
    DdsViewAttributeComponent,

  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  table: DdsViewComponent = new DdsViewComponent()
  attributes: Array<DdsViewAttributeComponent> = []
  pudTables?: string[] | undefined
  dataLayer = ''
  tableName = ''
  hidden = true
  disable = true

  constructor(private client: HttpClient,
              private detector: ChangeDetectorRef,
              private ngZone: NgZone) {
  }
  public load() {
    this.client.get<Object>(BASE_URL + 's2t/' + this.dataLayer + '/JSON/' + this.tableName).subscribe(obj => {
        let view = obj as DdsView
        this.table.tableType = view.table.tableType || ''
        this.pudTables = view.table.incomingPudTables?.split(',') || []
        this.table.incomingPudTables = view.table.incomingPudTables?.split(',').join(', ').trim() || ''
        this.table.module = view.table.module || ''
        this.table.scdType = view.table.scdType || ''
        this.table.sparkSubmitParameters = view.table.sparkSubmitParameters || ''
        this.table.etlIdWrk = view.table.etlIdWrk || ''
        this.table.etlIdProd = view.table.etlIdProd || ''
        this.table.etlIdDev = view.table.etlIdDev || ''
        this.table.startOdsConversionDate = view.table.startOdsConversionDate || ''
        this.table.conversionDepth = view.table.conversionDepth || ''
        this.table.ddlOnWrk = view.table.ddlOnWrk || ''
        this.table.ddlOnDev = view.table.ddlOnDev || ''
        this.table.ddlOnProd = view.table.ddlOnProd || ''
        this.table.createDirHdfsWrk = view.table.createDirHdfsWrk || ''
        this.table.createDirHdfsDev = view.table.createDirHdfsDev || ''
        this.table.createDirHdfsProd = view.table.createDirHdfsProd || ''
        this.table.startDateFromCsv = view.table.startDateFromCsv || ''
        this.table.etlParams = view.table.etlParams || ''
        this.table.pk = view.table.pk?.split(',').join(', ').trim() || ''
        this.table.extraPartitionField = view.table.extraPartitionField || ''
        this.table.conversionExtraPartitionField = view.table.conversionExtraPartitionField || ''
        this.table.description = view.table.description || ''
        this.table.schemaPud = view.table.schemaPud || ''
        this.table.tableName = view.table.tableName || ''
        this.table.dataLayer = view.table.dataLayer || ''
        this.table.approved = view.table.approved || ''
        this.table.registerOnOrchestratorWrk = view.table.registerOnOrchestratorWrk || ''
        this.table.registerOnOrchestratorDev = view.table.registerOnOrchestratorDev || ''
        this.table.registerOnOrchestratorProd = view.table.registerOnOrchestratorProd || ''

        // console.log(view.tableAttributes)

        let attrs: DdsViewAttributeComponent[] = []
        view.tableAttributes?.forEach(a => {
          let attribute = new DdsViewAttributeComponent()
          attribute.attributeName = a.attributeName
          attribute.description = a.description
          attribute.note = a.note
          attribute.typeCheck = a.typeCheck
          attribute.attributeValueExpression = a.attributeValueExpression
          attribute.fk = a.fk
          attribute.conversionDataType = a.conversionDataType
          attribute.sourcesAsIs = a.sourcesAsIs
          attribute.suffix = a.suffix
          attribute.generatedDdl = a.generatedDdl
          attribute.pk = a.pk
          attribute.fkTableName = a.fkTableName
          attribute.selectQueryForSourceAsIs = a.selectQueryForSourceAsIs
          attribute.schemePud = a.schemePud
          attribute.attributeType = a.attributeType
          attrs.push(attribute)
        })

        this.table.attributes = []
        this.attributes = []
        this.ngZone.run(() => {
          attrs.forEach(a => {
            this.table.attributes.push(a)
            this.attributes.push(a)
          })
        })
      this.hidden = false
      }, error => {
      this.hidden = true
      }
    )
    this.detector.detectChanges()
  }
}

