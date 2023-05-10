import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHovered: boolean = false;


  onTabHover() {
    this.isHovered = true;
  }

  onTabHoverEnd() {
    this.isHovered = false;
  }



}
