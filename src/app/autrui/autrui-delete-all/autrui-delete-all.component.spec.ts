import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutruiDeleteAllComponent } from './autrui-delete-all.component';

describe('AutruiDeleteAllComponent', () => {
  let component: AutruiDeleteAllComponent;
  let fixture: ComponentFixture<AutruiDeleteAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutruiDeleteAllComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutruiDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
