import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ColivingRoutingModule } from './coliving-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCountryComponent } from './countries/create-country/create-country.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [CountriesComponent, StatesComponent, CreateCountryComponent, UsersComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    ColivingRoutingModule,
    NgbModule
  ]
})
export class ColivingModule { }
