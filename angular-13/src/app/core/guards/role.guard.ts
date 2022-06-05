import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let user = JSON.parse( localStorage.getItem("user")|| "{}")

      if(route.data.roles.includes(user.role)){
return true
      }
      else{
        this.router.navigate(['']);
        return false;
      }



    return true;
  }
  // const isAuthorised(route: ActivatedRouteSnapshot): boolean{
  //   const roles=["admin", "formateur", "assistant"]
  // }
}
