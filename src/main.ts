import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './comoponets/app.component';
import { appRouting } from "./comoponets/app.routing";

bootstrapApplication(AppComponent, {providers: [...appRouting]});