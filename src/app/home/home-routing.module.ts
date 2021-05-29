/* Angular Imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Component Imports */
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'home',
                redirectTo: ''
            },
            {
                path: '',
                component: HomeComponent
            }
        ]),
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
