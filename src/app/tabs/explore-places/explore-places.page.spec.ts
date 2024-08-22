import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorePlacesPage } from './explore-places.page';

describe('ExplorePlacesPage', () => {
  let component: ExplorePlacesPage;
  let fixture: ComponentFixture<ExplorePlacesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExplorePlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
