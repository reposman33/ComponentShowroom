import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModulesComponent } from './data-modules.component';

describe('DataModulesComponent', () => {
  let component: DataModulesComponent;
  let fixture: ComponentFixture<DataModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
