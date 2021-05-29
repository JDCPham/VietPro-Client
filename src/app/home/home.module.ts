/* Angular Imports */
import { CommonModule } from '@angular/common'
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';

/* Module Imports */
import { SharedModule } from '../shared/shared.module';

/* Boostrap Imports */
import { CarouselModule } from 'ngx-bootstrap/carousel';

/* Component Imports */

/* Service Imports */

/* Router Imports */
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        CarouselModule.forRoot()
    ],
    declarations: [ 
        HomeComponent
    ],
    exports: [
        CommonModule,
        HomeComponent
    ],
    providers: [

    ],
    entryComponents: [
        
    ],
})
export class HomeModule {

    constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) throw new Error('HomeModule is already loaded.')
    }

    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: HomeModule,
            providers: []
        }
    }

}
