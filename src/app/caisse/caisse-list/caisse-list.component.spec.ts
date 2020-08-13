import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseListComponent } from './caisse-list.component';

describe('CaisseListComponent', () => {
  let component: CaisseListComponent;
  let fixture: ComponentFixture<CaisseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
