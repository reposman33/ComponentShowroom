import { Component, OnInit } from '@angular/core';

type Link = {
	title: string;
	url: string;
};

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	public links: Link[] = [
		{ title: 'Button', url: 'button' },
		{ title: 'Checkbox', url: 'checkbox' },
		{ title: 'Header', url: 'header' },
		{ title: 'Input', url: 'input' },
		{ title: 'List', url: 'list' },
		{ title: 'Modal', url: 'modal' },
		{ title: 'Pulldown', url: 'pulldown' },
		{ title: 'Radiobutton', url: 'radiobutton' },
	];
	constructor() {}

	ngOnInit(): void {}
}
