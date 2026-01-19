import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelProdutoComponent } from './tabel-produto.component';

describe('TabelProdutoComponent', () => {
  let component: TabelProdutoComponent;
  let fixture: ComponentFixture<TabelProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
