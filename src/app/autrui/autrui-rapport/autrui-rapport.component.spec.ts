import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutruiRapportComponent } from './autrui-rapport.component';

describe('AutruiRapportComponent', () => {
  let component: AutruiRapportComponent;
  let fixture: ComponentFixture<AutruiRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutruiRapportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutruiRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
