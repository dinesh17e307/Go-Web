import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{FlexLayoutModule} from '@angular/flex-layout';
import { UpeventComponent } from './upevent/upevent.component';
import { MatCardModule } from '@angular/material/card';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpeventComponent,
    PlaceorderComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ProjectsComponent,
    LogoutComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSliderModule,MatButtonModule,MatGridListModule,
    MatListModule,MatIconModule,MatSidenavModule,MatToolbarModule,FlexLayoutModule,MatCardModule,MatInputModule,MatDialogModule
  ],
  providers: [],
  entryComponents: [
    DialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
