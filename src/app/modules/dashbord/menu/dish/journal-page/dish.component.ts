import {Component, Injector} from '@angular/core';
import {AbstractJournalMenu} from '../../abstract-journal-menu';
import {IJournal} from '../../../../../components/journal/journal.interface';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: ['./dish.component.scss']
})
export class DishComponent extends AbstractJournalMenu<DishComponent> {

    constructor(protected serviceInjector: Injector) {
        super(serviceInjector);
    }

    getJournalHeader(): string {
        return 'Журнал "Позиция меню"';
    }

    getJournalSysName(): string {
        return 'Dish-jrnl';
    }

    getComponentContext(): DishComponent {
        return this;
    }

    dishCreate(selectedRow: any, context: IJournal<DishComponent>) {
        const localContext: DishComponent = <DishComponent>context;
        localContext._appRouterService.goTo('dashboard/dish/add');
    }

    dishDelete(selectedRow: any, context: IJournal<DishComponent>) {
        alert('dish delete');
    }

    dishEdit(selectedRow: any, context: IJournal<DishComponent>) {
        const localContext: DishComponent = <DishComponent>context;
        localContext._appRouterService.goTo('dashboard/dish/edit');
    }

}
