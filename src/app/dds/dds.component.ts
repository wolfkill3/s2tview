import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import {PudTableComponent} from "../util/pud-table/pud-table.component";
import {TableAttributeComponent} from "../util/table-attribute/table-attribute.component";
import {HttpClient} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BASE_URL} from "../app.config";

@Component({
  selector: 'app-dds',
  standalone: true,
  imports: [
    FormsModule, PudTableComponent, NgForOf, CommonModule, TableAttributeComponent, RouterLink, RouterLinkActive
  ],
  templateUrl: './dds.component.html',
  styleUrl: './dds.component.css',
  providers: [DatePipe]
})
export class DdsComponent {
  tableName = '';
  dataLayer = '';
  module = '';
  description = '';
  schemaPud = '';
  tableType = '';
  conversionDepth?: number | null;
  startDateFromCsv = ''; //TODO format
  startOdsConversionDate = ''; //TODO format
  extraPartitionField = '';
  conversionExtraPartitionField = '';
  incomingPudTables: String[] = [];
  currentPudTable = '';
  scdType = '';
  etlIdDev?: number | null;
  sparkSubmitParameters = ''
  pk = '';
  wrkEtlId?: number | null;
  prodEtlId?: number | null;
  attributes: TableAttributeComponent[] = [];


  constructor(private datePipe: DatePipe, private client: HttpClient) {
  }

  public send() {
    let requestBody = {
      'tableName': this.tableName,
      'dataLayer': this.dataLayer,
      'module': this.module,
      'description': this.description,
      'schemaPud': this.schemaPud,
      'tableType': this.tableType,
      'conversionDepth': this.conversionDepth,
      'startDateFromCsv': this.datePipe.transform(this.startDateFromCsv, "yyyy-MM-dd"),
      'startOdsConversionDate': this.datePipe.transform(this.startOdsConversionDate, "yyyy-MM-dd"),
      'extraPartitionField': this.extraPartitionField,
      'conversionExtraPartitionField': this.conversionExtraPartitionField,
      'incomingPudTables': this.incomingPudTables,
      'scdType': this.scdType,
      'etlIdDev': this.etlIdDev,
      'sparkSubmitParameters': this.sparkSubmitParameters,
      'pk': this.pk,
      'wrkEtlId': this.wrkEtlId,
      'prodEtlId': this.prodEtlId,
      'attributes': this.attributes.map(a => a.getJson())
    }

    this.client.post<any>(BASE_URL + 's2t/' + this.dataLayer + '/table', requestBody).subscribe(data => console.log(data))
    // console.log(requestBody)
  }

  public onEnter() {
    let names: String[] = this.currentPudTable.split(',')

    if (names.length > 1) {
      names.forEach(name => this.incomingPudTables.push(name))
    } else {
      this.incomingPudTables.push(this.currentPudTable)
    }

    this.currentPudTable = ''
    console.log(this.incomingPudTables)
  }

  public clearPudTable() {
    this.incomingPudTables = [];
  }

  deleteTable(name: String) {
    this.incomingPudTables = this.incomingPudTables.filter(x => x !== name);
  }

  deleteAttribute(name: String) {
    this.attributes = this.attributes.filter(x => x.attributeName !== name);
  }

  addAttribute() {
    console.log('test')
    this.attributes.push(new TableAttributeComponent())
  }
}
