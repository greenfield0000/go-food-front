import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RowNumberRenderer} from '../../../../components/journal/cell-renders/rownumber-renderer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AgGridModule} from 'ag-grid-angular';
import {AuthModule} from '../../../auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DishComponent} from './journal-page/dish.component';
import {DishAddComponent} from './editor/dish-add/dish-add.component';
import {DishEditComponent} from './editor/dish-edit/dish-edit.component';
import {CommonComponentModule} from '../../../../components/common-component.module';
import {DishRoutingModule} from './dish-routing.module';


@NgModule({
    declarations: [
        DishComponent,
        DishAddComponent,
        DishEditComponent,

    ],
    imports: [
        CommonModule,
        CommonComponentModule,
        DishRoutingModule,

        // Material
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatSelectModule,

        // Angular Ag-grid
        AgGridModule.withComponents([RowNumberRenderer]),

        AuthModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class DishModule {
}
