import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tianliang';
  menuTrigger!: MatMenuTrigger
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  openDialog(
    enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginComponent, {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  openProductComponent() {
    this.router.navigate(['./product']);
  }

  judgeMouseEvent(event: string){
    if (event == 'click') {
      this.router.navigate(['./product']);
    }
    else {
      this.openProductMenu(this.menuTrigger);
    }
  }

  openProductMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }


}
