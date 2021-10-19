import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNaamComponent } from './my-naam.component';

describe('MyNaamComponent', () => {
  let component: MyNaamComponent;
  let fixture: ComponentFixture<MyNaamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNaamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
