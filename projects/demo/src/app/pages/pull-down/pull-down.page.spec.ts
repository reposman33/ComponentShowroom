import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDownComponent } from './pull-down.page';

describe('PullDownComponent', () => {
	let component: PullDownComponent;
	let fixture: ComponentFixture<PullDownComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PullDownComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PullDownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
