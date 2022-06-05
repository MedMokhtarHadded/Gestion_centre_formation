import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { FormationsComponent } from './formations/formations.component';
import { SallesFormationsComponent } from './salles-formations/salles-formations.component';
import { SignupComponent } from './signup/signup.component';
import { AssistantsComponent } from './assistants/assistants.component';
import { ConsulterApprenantComponent } from './consulter-apprenant/consulter-apprenant.component';
import { AuthGuardGuard } from '../core/guards/auth-guard/auth-guard.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { ExamenComponent } from './examen/examen.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: 'assistants',
				component: AssistantsComponent,
				canActivate: [RoleGuard],
				data: {roles: 'admin'}

			},
			{
				path: 'sallesFormations',
				component: SallesFormationsComponent,
			},
			{
				path: 'formations',
				component: FormationsComponent
			},
			{
				path: 'signup',
				component: SignupComponent
			},
		
			{
				path: 'formateurs',
				component: FormateursComponent
			},
			{
				path: 'apprenants',
				component: ApprenantsComponent
			},
			{
				path: 'users',
				component: UsersComponent
			},
			{
				path: 'consulter-apprenant',
				component: ConsulterApprenantComponent
			},
			{
				path: 'examen',
				component: ExamenComponent
			},
		]
	}
];
