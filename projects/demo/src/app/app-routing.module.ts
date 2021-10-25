import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './layout/components/layout.component';
import { ButtonPage } from './pages/button/button.page';
import { CheckboxPage } from './pages/checkbox/checkbox.page';
import { HeaderPage } from './pages/header/header.page';
import { InputPage } from './pages/input/input.page';
import { ListPage } from './pages/list/list.page';
import { ModalPage } from './pages/modal/modal.page';
import { PullDownPage } from './pages/pull-down/pull-down.page';
import { RadioButtonPage } from './pages/radio-button/radio-button.page';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'button', component: ButtonPage },
			{ path: 'checkbox', component: CheckboxPage },
			{ path: 'header', component: HeaderPage },
			{ path: 'input', component: InputPage },
			{ path: 'list', component: ListPage },
			{ path: 'modal', component: ModalPage },
			{ path: 'pulldown', component: PullDownPage },
			{ path: 'radiobutton', component: RadioButtonPage },
		],
	},
];
@NgModule({
	imports: [LayoutModule, PagesModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
