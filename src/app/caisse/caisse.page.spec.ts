import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaissePage } from './caisse.page';

describe('CaissePage', () => {
  let component: CaissePage;
  let fixture: ComponentFixture<CaissePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaissePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
