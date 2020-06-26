import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraStocksComponent } from './extra-stocks.component';

describe('ExtraStocksComponent', () => {
  let component: ExtraStocksComponent;
  let fixture: ComponentFixture<ExtraStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
