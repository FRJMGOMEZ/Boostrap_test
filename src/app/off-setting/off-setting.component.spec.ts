import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSettingComponent } from './off-setting.component';

describe('OffSettingComponent', () => {
  let component: OffSettingComponent;
  let fixture: ComponentFixture<OffSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
