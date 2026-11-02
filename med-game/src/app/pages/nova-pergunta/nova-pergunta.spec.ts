import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaPergunta } from './nova-pergunta';

describe('NovaPergunta', () => {
  let component: NovaPergunta;
  let fixture: ComponentFixture<NovaPergunta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPergunta],
    }).compileComponents();

    fixture = TestBed.createComponent(NovaPergunta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
