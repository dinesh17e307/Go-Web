import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  ngOnInit(): void {
  }

  opendialog() {
    this.dialog.open(LogoutComponent, {width: '500px', height: '450px'});
  }

}
