import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsCatComponent } from './liste-produits-cat.component';

describe('ListeProduitsCatComponent', () => {
  let component: ListeProduitsCatComponent;
  let fixture: ComponentFixture<ListeProduitsCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProduitsCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProduitsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
