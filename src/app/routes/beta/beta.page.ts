import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h3>beta works with signal params:</h3>
    <pre>{{ q() }}</pre>
  `,
})
export default class BetaPage {
  q = input<string>('no params');
}
