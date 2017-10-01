import{NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import{BrowserModule}from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{FormsModule}from '@angular/forms';
import{AppComponent} from './app.component';

import{LoginComponent} from '../pages/login';
import {CreateAccountComponent} from '../pages/CreateAccount/create-account'
import {BossListComponent} from '../pages/BossList/boss-list'

import{HeaderComponent} from '../pages/Components/header';
import {UserFormComponent} from '../pages/Components/user-form'
import {TableListComponent} from '../pages/Components/table-list'
import {LeftNavComponent} from '../pages/Components/left-nav'
import {LoginService} from '../services/login.service';
import {AppRoutingModule} from './app-routing.module';


import {
  TreeModule, InputTextModule
  , PanelModule, MultiSelectModule, DropdownModule
  , InputTextareaModule, FileUploadModule, CheckboxModule
  , CalendarModule, ButtonModule, GrowlModule
  , TabViewModule, DialogModule, RadioButtonModule
  , SliderModule, DataTableModule, AutoCompleteModule, DataGridModule
  , ConfirmDialogModule, BlockUIModule, GalleriaModule, ChartModule
  , PaginatorModule, MessagesModule, MenuModule, TooltipModule, CarouselModule
  , DataListModule, StepsModule, TreeTableModule, FieldsetModule, MenubarModule, OverlayPanelModule, LightboxModule
} from 'primeng/primeng';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';

import{ConfigService} from '../services/config.service';

// import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    TreeModule,
    PanelModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    CheckboxModule,
    CalendarModule,
    ButtonModule,
    GrowlModule,
    TabViewModule,
    DialogModule,
    RadioButtonModule,
    SliderModule,
    DataTableModule,
    AutoCompleteModule,
    DataGridModule,
    ConfirmDialogModule,
    BlockUIModule,
    GalleriaModule,
    ChartModule,
    PaginatorModule,
    MessagesModule,
    MenuModule,
    TooltipModule,
    CarouselModule,
    DataListModule,
    StepsModule,
    TreeTableModule,
    FieldsetModule,
    AppRoutingModule,
    HttpModule,
    MenubarModule,
    OverlayPanelModule,
    LightboxModule,
    //MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    BossListComponent,
    HeaderComponent,
    UserFormComponent,
    TableListComponent,
    LeftNavComponent
  ],
  providers: [LoginService, ConfigService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
