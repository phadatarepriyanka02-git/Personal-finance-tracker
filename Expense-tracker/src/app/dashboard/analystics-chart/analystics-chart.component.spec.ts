import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysticsChartComponent } from './analystics-chart.component';

describe('AnalysticsChartComponent', () => {
  let component: AnalysticsChartComponent;
  let fixture: ComponentFixture<AnalysticsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysticsChartComponent]
    });
    fixture = TestBed.createComponent(AnalysticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
