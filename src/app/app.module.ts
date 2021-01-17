import '../polyfills';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatCardModule, MatIconModule, MatTreeModule, MatInputModule, MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatBadgeModule } from '@angular/material';
import { TreeFlatOverviewComponent } from './components/tree-flat-overview/tree-flat-overview.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatStepperModule } from '@angular/material/stepper';
import { DialogComponent } from './components/modal-window/common/dialog/dialog.component';
import { JwtTokenInterceptor } from './interceptors/jwt.token-interceptor';
import { AuthModule } from './modules/auth/auth.module';


const modules = [
  BrowserModule,
  RouterModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  // Material
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatCheckboxModule,
  MatBadgeModule,

];

@NgModule({
  declarations: [
    AppComponent,
    TreeFlatOverviewComponent,
    DialogComponent
  ],
  imports: modules,
  exports: [
    modules,
    AuthModule
  ],
  providers: [
    AgGridModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    },
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: MethodInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }