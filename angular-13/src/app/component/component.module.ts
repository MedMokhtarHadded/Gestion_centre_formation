import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { UsersComponent } from './users/users.component';


import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import { FormateursComponent } from './formateurs/formateurs.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { FormationsComponent } from './formations/formations.component';
import { SallesFormationsComponent } from './salles-formations/salles-formations.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AssistantsComponent } from './assistants/assistants.component';
import { ConsulterApprenantComponent } from './consulter-apprenant/consulter-apprenant.component';
import { ExamenComponent } from './examen/examen.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTableModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  declarations: [
    UsersComponent,
    FormateursComponent,
    ApprenantsComponent,
    FormationsComponent,
    SallesFormationsComponent,
    SignupComponent,
    AssistantsComponent,
    ConsulterApprenantComponent,
    ExamenComponent
  ]
})
export class ComponentsModule { }
