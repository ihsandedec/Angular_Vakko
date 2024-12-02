import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements OnInit {

  isLargeScreen: boolean = false

  ngOnInit() {
    this.checkScreenSize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('onResize called');
    this.checkScreenSize();
  }

  checkScreenSize() {
    const currentWidth = window.innerWidth;
    this.isLargeScreen = currentWidth > 991;
  }
  
}
