import {FullCalendarModule} from '@fullcalendar/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuRoutingModule} from './menu-routing.module';
import {WorkScheduleComponent} from './work-schedule/work-schedule.component';
import {MenuComponent} from './menu/menu.component';
import {PersonalModule} from './personal/personal.module';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DishModule} from './dish/dish.module';
import {DashbordComponent} from '../dashbord.component';
import {CommonComponentModule} from '../../../components/common-component.module';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    declarations: [
        // menu (menu pages) component
        DashbordComponent,
        WorkScheduleComponent,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        RouterModule,
        // JournalsModule
        PersonalModule,
        DishModule,
        FullCalendarModule,
        CommonComponentModule
    ],
    exports: []
})
export class MenuModule {
}
