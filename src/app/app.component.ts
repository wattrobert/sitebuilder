import { Component } from '@angular/core';
import { SbJumbotronComponent, SbPreComponent } from './models/component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  test = new SbJumbotronComponent('testjumbo');
  test2 = new SbPreComponent('testpre');
}
