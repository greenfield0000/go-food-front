import {AddressKladrComponent} from './../../components/address-kladr/address-kladr.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegistryComponent} from './registry/registry.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RegistryStepperComponent} from 'src/app/components/registy-stepper/registry-stepper.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistryComponent,
        RegistryStepperComponent,
        AddressKladrComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AuthRoutingModule,
        ReactiveFormsModule,

        // Material
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatStepperModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDatepickerModule,
        MatAutocompleteModule
    ],
    exports: [LoginComponent, RegistryComponent, AddressKladrComponent],
    providers: []
})
export class AuthModule {
}
