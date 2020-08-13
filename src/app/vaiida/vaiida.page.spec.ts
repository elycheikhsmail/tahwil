import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaiidaPage } from './vaiida.page';

describe('VaiidaPage', () => {
  let component: VaiidaPage;
  let fixture: ComponentFixture<VaiidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaiidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaiidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
