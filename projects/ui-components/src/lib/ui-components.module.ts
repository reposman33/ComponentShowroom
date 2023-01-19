import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { PullDownComponent } from './components/pull-down/pull-down.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

const UiComponents = [
	ButtonComponent,
	CheckboxComponent,
	HeaderComponent,
	InputComponent,
	ListComponent,
	ModalComponent,
	PullDownComponent,
	RadioButtonComponent,
];
@NgModule({
	declarations: [UiComponents],
	exports: [UiComponents],
	imports: [CommonModule],
})
export class UiModule {}
