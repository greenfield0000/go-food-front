import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalAddComponent} from './editor/personal-add/personal-add.component';
import {PersonalEditComponent} from './editor/personal-edit/personal-edit.component';
import {PersonalRoutingModule} from './personal-routing.module';
import {PersonalComponent} from './journal-page/personal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PersonInfoEditorComponent} from 'src/app/components/person-info-editor/person-info-editor.component';
import {AuthModule} from 'src/app/modules/auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonComponentModule} from '../../../../components/common-component.module';

@NgModule({
    declarations: [
        PersonalComponent,
        PersonalAddComponent,
        PersonalEditComponent,
        // person components
        PersonInfoEditorComponent,
    ],
    imports: [
        CommonModule,
        PersonalRoutingModule,

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

        AuthModule,
        CommonComponentModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class PersonalModule {
}
