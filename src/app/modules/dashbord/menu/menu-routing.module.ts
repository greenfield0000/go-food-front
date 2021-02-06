import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkScheduleComponent} from './work-schedule/work-schedule.component';
import {PersonalModule} from './personal/personal.module';
import {MenuComponent} from './menu/menu.component';
import {DishModule} from './dish/dish.module';
import {DashbordComponent} from '../dashbord.component';

const routes: Routes = [

    {
        path: '', component: DashbordComponent
    },
    {path: 'personal', loadChildren: () => PersonalModule},
    {path: 'dish', loadChildren: () => DishModule},
    {path: 'menu', component: MenuComponent},
    {path: 'work-schedule', component: WorkScheduleComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {
}
