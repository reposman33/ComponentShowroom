import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { PagesModule } from '../pages/pages.module';
import { DemoComponentsModule } from '../components/components.module';

@NgModule({
	declarations: [LayoutComponent],
	exports: [LayoutComponent],
	imports: [CommonModule, DemoComponentsModule, PagesModule, RouterModule],
})
export class LayoutModule {}
