import { RouteConfigLoadEnd } from '@angular/router';
import { RouteInfo } from './sidebar.metadata';



export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/assistants',
    title: 'Gestion assistants',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/formateurs',
    title: 'Gestion formateurs',
    icon: 'bi-file-earmark-person',
    class: '',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/component/apprenants',
    title: 'Gestion apprenants',
    icon: 'bi bi-person-workspace',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/formations',
    title: 'Gestion formations',
    icon: 'bi bi-book',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/sallesFormations',
    title: 'Gestion salles de formations',
    icon: 'bi bi-door-open',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/component/consulter-apprenant',
  //   title: 'Consulter mes etudiants',
  //   icon: 'bi bi-people',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
];
