import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import demo pages
import { ButtonPage } from './button/button.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { HeaderPage } from './header/header.page';
import { InputPage } from './input/input.page';
import { ListPage } from './list/list.page';
import { ModalPage } from './modal/modal.page';
import { PullDownPage } from './pull-down/pull-down.page';
import { RadioButtonPage } from './radio-button/radio-button.page';
// import ui-modules
import {
	ButtonModule,
	CheckboxModule,
	HeaderModule,
	InputModule,
	ListModule,
	ModalModule,
	PullDownModule,
	RadioButtonModule,
} from '@ui-components';

const UIMODULES = [
	ButtonModule,
	CheckboxModule,
	HeaderModule,
	InputModule,
	ListModule,
	ModalModule,
	PullDownModule,
	RadioButtonModule,
];

@NgModule({
	declarations: [
		ButtonPage,
		CheckboxPage,
		HeaderPage,
		InputPage,
		ListPage,
		ModalPage,
		PullDownPage,
		RadioButtonPage,
	],
	imports: [CommonModule, UIMODULES],
})
export class PagesModule {}
