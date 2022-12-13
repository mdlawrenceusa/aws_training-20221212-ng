import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemadeGoodsComponent } from './homemade-goods.component';

describe('HomemadeGoodsComponent', () => {
  let component: HomemadeGoodsComponent;
  let fixture: ComponentFixture<HomemadeGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemadeGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomemadeGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
