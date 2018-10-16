import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theTitle = 'hello-cli';

  onNewDate(ts) {
    console.log('new ts event from child: ' + ts);
    this.theTitle = ts;
  }

  testMethod(e) {
    this.theTitle = (new Date()).toLocaleTimeString();
    console.log(e);
  }
}
