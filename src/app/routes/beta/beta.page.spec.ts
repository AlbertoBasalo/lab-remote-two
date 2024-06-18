import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaPage } from './beta.page';

describe('BetaPage', () => {
  let component: BetaPage;
  let fixture: ComponentFixture<BetaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
