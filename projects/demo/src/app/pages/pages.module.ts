import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import demo pages
import { ButtonPageComponent } from './button/button.page';
import { CheckboxPageComponent } from './checkbox/checkbox.page';
import { HeaderPageComponent } from './header/header.page';
import { InputPageComponent } from './input/input.page';
import { ListPageComponent } from './list/list.page';
import { ModalPageComponent } from './modal/modal.page';
import { PullDownPageComponent } from './pull-down/pull-down.page';
import { RadioButtonPageComponent } from './radio-button/radio-button.page';
import { UiModule } from '@ui-components';

const PagesComponents = [
	ButtonPageComponent,
	CheckboxPageComponent,
	HeaderPageComponent,
	InputPageComponent,
	ListPageComponent,
	ModalPageComponent,
	PullDownPageComponent,
	RadioButtonPageComponent,
];

@NgModule({
	declarations: [PagesComponents],
	exports: [PagesComponents],
	imports: [CommonModule, UiModule],
})
export class PagesModule {}
