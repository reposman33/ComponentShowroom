import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullDownComponent } from './pull-down.component';

@NgModule({
	declarations: [PullDownComponent],
	exports: [PullDownComponent],
	imports: [CommonModule],
})
export class PullDownModule {}
