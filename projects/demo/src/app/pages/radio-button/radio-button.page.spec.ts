import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonPage } from './radio-button.page';

describe('RadioButtonComponent', () => {
	let component: RadioButtonPage;
	let fixture: ComponentFixture<RadioButtonPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RadioButtonPage],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RadioButtonPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
