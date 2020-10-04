import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelaxationPage } from './relaxation.page';

describe('RelaxationPage', () => {
  let component: RelaxationPage;
  let fixture: ComponentFixture<RelaxationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaxationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelaxationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
