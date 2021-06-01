import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBrewerieComponent } from './single-brewerie.component';

describe('SingleBrewerieComponent', () => {
  let component: SingleBrewerieComponent;
  let fixture: ComponentFixture<SingleBrewerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBrewerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBrewerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
