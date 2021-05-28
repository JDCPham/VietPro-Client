/* Angular Imports */
import { CommonModule } from '@angular/common'
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

/* Material Imports */

/* Module Imports */
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './components/footer/footer.component';

/* Component Imports */

/* Service Imports */


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CollapseModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        CommonModule,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
    ],
    entryComponents: [
    ],
})
export class SharedModule {

    constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
        if (parentModule) throw new Error('SharedModule is already loaded.')
    }

    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }

}
