import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isDarkTheme: boolean;
  @HostBinding('class') className = '';
  constructor(private overlay: OverlayContainer) {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
    this.className = this.isDarkTheme ? 'dark-theme' : '';
  }

  changeTheme(): void {
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.className = this.isDarkTheme ? 'dark-theme' : '';
    if (this.isDarkTheme) {
      this.overlay.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlay.getContainerElement().classList.remove('dark-theme');
    }
  }
}
