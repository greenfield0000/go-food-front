import {Component, Injector, OnInit} from '@angular/core';
import {DishComponent} from '../../journal-page/dish.component';

@Component({
    selector: 'dish-edit',
    templateUrl: './dish-edit.component.html',
    styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent extends DishComponent implements OnInit {

    constructor(protected serviceInjector: Injector) {
        super(serviceInjector);
    }

    ngOnInit(): void {
    }

}
