import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutruiAddComponent } from './autrui-add.component';

describe('AutruiAddComponent', () => {
  let component: AutruiAddComponent;
  let fixture: ComponentFixture<AutruiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutruiAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutruiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
