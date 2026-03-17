import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionUsersComponent } from './organizacion-users';

describe('OrganizacionUsers', () => {
  let component: OrganizacionUsersComponent;
  let fixture: ComponentFixture<OrganizacionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizacionUsersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
