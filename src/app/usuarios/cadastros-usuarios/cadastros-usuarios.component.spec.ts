import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosUsuariosComponent } from './cadastros-usuarios.component';

describe('CadastrosUsuariosComponent', () => {
  let component: CadastrosUsuariosComponent;
  let fixture: ComponentFixture<CadastrosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrosUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
