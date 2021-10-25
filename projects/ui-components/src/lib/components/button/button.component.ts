import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ui-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	@Input() active: boolean = false;
	@Input() formAction: 'save' | 'submit' | '' = '';

	public buttonClass: string = 'button';

	constructor() {}

	ngOnInit(): void {
		this.buttonClass +=
			this.formAction === ''
				? this.active
					? ' button-active'
					: ' button-inactive'
				: this.formAction === 'submit'
				? ' button--submit'
				: ' button--save';
	}
}
