import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DataTablesModule } from 'angular-datatables';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {format} from './dynamic/format.pipe';
import {Routes,RouterModule} from '@angular/router';
import { SeperatorPipe } from './seperator.pipe';
import {AlertModule } from './_alert';
import {HttpClientModule} from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import {ChartsModule} from 'ng2-charts';
import { SavePdfComponent } from './charts/save-pdf/save-pdf.component';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DialogLabelComponent } from './dialog-label/dialog-label.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DynamicComponent } from './dynamic/dynamic.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BarchartComponent} from './charts/barchart/barchart.component';
import {DoughnutComponent} from './charts/doughnut/doughnut.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { EquListComponent } from './equ-list/equ-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { FilterColumnPipe } from './pipe/filter-column.pipe';
import { FieldDialogComponent } from './dialog/field-dialog/field-dialog.component';
import { AddFieldDialogComponent } from './dialog/add-field-dialog/add-field-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { FilterDialogComponent } from './dialog/filter-dialog/filter-dialog.component';
import { ConditionalFormattingDialogComponent } from './dialog/conditional-formatting-dialog/conditional-formatting-dialog.component';
import { EquChartComponent } from './equ-chart/equ-chart.component';
import { MatMenuModule} from '@angular/material/menu';
import { ExportAsModule } from 'ngx-export-as';

const appRoutes:Routes=[
  { path : '', component:DynamicComponent } ,
  {path:'charts',component:ChartsComponent},
  {path:'charts/bar-chart',component:BarchartComponent},
  {path:'charts/pie-chart',component:PiechartComponent},
  {path:'charts/line-chart',component:LinechartComponent},
  {path:'charts/doughnut-chart',component:DoughnutComponent},
  {path:'charts/save-pdf',component: SavePdfComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'dialog',component:DynamicComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SeperatorPipe,
    ChartsComponent,
    BarchartComponent,
    PiechartComponent,
    DoughnutComponent,
    LinechartComponent,
    format,
    SavePdfComponent,
    CourseDialogComponent,
    DialogLabelComponent,
    CalculatorComponent,
    DynamicComponent,
    LinechartComponent,
    PiechartComponent,
    EquListComponent,
    SearchPipe,
    FilterColumnPipe,
    FieldDialogComponent,
    AddFieldDialogComponent,
    FilterDialogComponent,
    ConditionalFormattingDialogComponent,
    EquChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule, DataTablesModule,MatCheckboxModule,
MatSortModule,MatMenuModule, ScrollDispatchModule,
A11yModule,ScrollingModule, MatIconModule,
CdkTableModule,
CdkTreeModule,
DragDropModule,
MatSelectModule,
MatInputModule,
MatButtonModule,
ExportAsModule,
    AlertModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [CourseDialogComponent,DialogLabelComponent,
    FieldDialogComponent,AddFieldDialogComponent,FilterDialogComponent,
  ConditionalFormattingDialogComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
