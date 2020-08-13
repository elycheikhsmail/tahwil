import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateSearshComponent } from './date-searsh.component';

describe('DateSearshComponent', () => {
  let component: DateSearshComponent;
  let fixture: ComponentFixture<DateSearshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSearshComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSearshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
