import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaPage } from './alfa.page';

describe('AlfaPage', () => {
  let component: AlfaPage;
  let fixture: ComponentFixture<AlfaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlfaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
