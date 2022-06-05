import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;






@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
user:any


  public ROUTES: RouteInfo[] = [ ];






  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems:RouteInfo[]=[];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // End open close
  ngOnInit() { 

  this.user=JSON.parse(localStorage.getItem("user")|| "[]")
  console.log(this.user.role);
  

if(this.user.role=="admin"){
   this.ROUTES=[
 
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
    }
  ]

} 
else if(this.user.role=="assistant")
{
  this.ROUTES=[
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
    }
  ]

} 
else{
  this.ROUTES=[
    
    {
      path: '/component/consulter-apprenant',
    title: 'Consulter mes etudiants',
      icon: 'bi bi-people',
   class: '',
    extralink: false,
      submenu: []
     },
     {
      path: '/component/examen',
    title: 'Gestion des examens',
      icon: 'bi bi-file-earmark-pdf',
   class: '',
    extralink: false,
      submenu: []
     },
  ]
}





    this.sidebarnavItems = this.ROUTES.filter(sidebarnavItem => sidebarnavItem);






  }
}
