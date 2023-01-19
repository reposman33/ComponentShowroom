import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/components/layout.component';
import { ButtonPageComponent } from './pages/button/button.page';
import { CheckboxPageComponent } from './pages/checkbox/checkbox.page';
import { HeaderPageComponent } from './pages/header/header.page';
import { InputPageComponent } from './pages/input/input.page';
import { ListPageComponent } from './pages/list/list.page';
import { ModalPageComponent } from './pages/modal/modal.page';
import { PullDownPageComponent } from './pages/pull-down/pull-down.page';
import { RadioButtonPageComponent } from './pages/radio-button/radio-button.page';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'button', component: ButtonPageComponent },
			{ path: 'checkbox', component: CheckboxPageComponent },
			{ path: 'header', component: HeaderPageComponent },
			{ path: 'input', component: InputPageComponent },
			{ path: 'list', component: ListPageComponent },
			{ path: 'modal', component: ModalPageComponent },
			{ path: 'pulldown', component: PullDownPageComponent },
			{ path: 'radiobutton', component: RadioButtonPageComponent },
		],
	},
];
@NgModule({
	imports: [LayoutModule, PagesModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
