import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { PlatformStore } from '@lab/platform';
@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h3>beta works with signal params:</h3>
    <pre>{{ q() }}</pre>
    <p>With data from platform store: {{ data().appName }}</p>
    <p>Events from platform store:</p>
    <pre>{{ events$ | async | json }}</pre>
  `,
})
export default class BetaPage {
  q = input<string>('no params');
  #platform = inject(PlatformStore);
  events$ = this.#platform.events$;
  data = this.#platform.data;
  constructor() {
    this.#platform.data = {
      appName: 'CHANGED on Beta page Lab Remote Two',
      shared: { clicked: false },
    };

    this.#platform.dispatch({
      type: 'INIT',
      payload: { source: 'Beta Page Remote two', date: new Date() },
    });
  }
}
