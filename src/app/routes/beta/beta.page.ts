import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <h3>beta works with params:</h3>
    <pre>{{ param }}</pre>
  `,
})
export default class BetaPage {
  #route = inject(ActivatedRoute);
  param = this.#route.snapshot.queryParams['q'] || 'No params';
}
