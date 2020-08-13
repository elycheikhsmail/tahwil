import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutruiSearchMonthComponent } from './autrui-search-month.component';

describe('AutruiSearchMonthComponent', () => {
  let component: AutruiSearchMonthComponent;
  let fixture: ComponentFixture<AutruiSearchMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutruiSearchMonthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutruiSearchMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
