import { Component  } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen=false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSidenavClose(isOpen: boolean) {
    this.isOpen = isOpen;
  }

}
