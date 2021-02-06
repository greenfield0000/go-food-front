import {Component, Injector, OnInit} from '@angular/core';
import {DishComponent} from '../../journal-page/dish.component';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html',
    styleUrls: ['./dish-add.component.scss']
})
export class DishAddComponent extends DishComponent implements OnInit {

    constructor(protected serviceInjector: Injector) {
        super(serviceInjector);
    }

    ngOnInit(): void {
    }

}
