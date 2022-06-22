import {Component, OnInit} from '@angular/core';
import {animationsClick} from "../../shared/animations/animations";
import {arrayNav} from "../../shared/utils/utils";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  animations: [animationsClick]
})
export class HeaderComponent implements OnInit {
  arrayNav = arrayNav;
  isAnimation = 'start';
  isActive = false;
  isModal = false;
  active = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onBurgerClicked() {
    this.active = !this.active;
  }


  openInput(): void {
    this.isActive = true;
    this.isAnimation = 'end';
  }

  openModal(): void {
    this.isModal = true;
  }

  close(event: any): void {
    if (event.target.id !== 'searchId') {
      setTimeout(() => {
        this.isActive = false;
      }, 700)
      this.isAnimation = 'start';
      this.isModal = false;
    }
  }
}
