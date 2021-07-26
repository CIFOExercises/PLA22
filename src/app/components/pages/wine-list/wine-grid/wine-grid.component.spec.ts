import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineGridComponent } from './wine-grid.component';

describe('WineGridComponent', () => {
  let component: WineGridComponent;
  let fixture: ComponentFixture<WineGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
