import { MainOutletComponent } from 'src/app/outlets/main-outlet/main-outlet.component';
import { RouterModule } from '@angular/router';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOutletComponent } from 'src/app/outlets/header-outlet/header-outlet.component';
import { FooterOutletComponent } from 'src/app/outlets/footer-outlet/footer-outlet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [MainOutletComponent, HeaderOutletComponent, FooterOutletComponent],
    imports: [
        CommonModule,
        DashbordRoutingModule,
        RouterModule,
        // Material
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTooltipModule,
        MatMenuModule
    ],
    exports: [
        MainOutletComponent, HeaderOutletComponent, FooterOutletComponent
    ],
    bootstrap: [MainOutletComponent, HeaderOutletComponent, FooterOutletComponent]
})
export class DashbordModule {
}
