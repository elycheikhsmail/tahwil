import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaisseDeleteAllComponent } from './caisse-delete-all.component';

describe('CaisseDeleteAllComponent', () => {
  let component: CaisseDeleteAllComponent;
  let fixture: ComponentFixture<CaisseDeleteAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseDeleteAllComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaisseDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
