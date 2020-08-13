import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskBeforeUseComponent } from './ask-before-use.component';

describe('AskBeforeUseComponent', () => {
  let component: AskBeforeUseComponent;
  let fixture: ComponentFixture<AskBeforeUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskBeforeUseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskBeforeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
