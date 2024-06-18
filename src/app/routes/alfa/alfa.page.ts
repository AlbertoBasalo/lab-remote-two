import { Component, inject } from '@angular/core';
import { PlatformStore } from '@lab/platform';

@Component({
  standalone: true,
  template: `
    <p>alfa works!</p>
    <button (click)="onChangeClick()">Change data</button>
    <button (click)="onDispatchClick()">Dispatch Event</button>
  `,
})
export default class AlfaPage {
  #platform = inject(PlatformStore);
  onChangeClick() {
    this.#platform.data = {
      appName: 'CHANGED on Alfa Click Lab Remote Two',
      shared: { clicked: true },
    };
  }
  onDispatchClick() {
    this.#platform.dispatch({
      type: 'CLICKED',
      payload: { source: 'Alfa Page Remote two', date: new Date() },
    });
  }
}
