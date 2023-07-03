import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesHomeComponent } from './modules-home.component';

describe('ModulesHomeComponent', () => {
  let component: ModulesHomeComponent;
  let fixture: ComponentFixture<ModulesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesHomeComponent]
    });
    fixture = TestBed.createComponent(ModulesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
