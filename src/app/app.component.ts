import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <nav>
      <p><a routerLink="alfa">Local alfa</a></p>
      <p><a routerLink="beta">Local beta</a></p>
    </nav>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-remote-two';
}
