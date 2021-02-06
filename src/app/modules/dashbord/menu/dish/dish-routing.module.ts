import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishComponent} from './journal-page/dish.component';
import {DishAddComponent} from './editor/dish-add/dish-add.component';
import {DishEditComponent} from './editor/dish-edit/dish-edit.component';

const routes: Routes = [

    {
        path: '', component: DishComponent
    },
    {
        path: 'add', component: DishAddComponent
    },
    {
        path: 'edit', component: DishEditComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DishRoutingModule {
}
