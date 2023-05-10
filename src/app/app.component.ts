import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  /*styleUrls: ['./app.component.scss']*/
})
export class AppComponent {
  title = 'Projet_Sersi';
  showContent = true;

  ngOnInit() {
    this.showContent = false;
  }


}
