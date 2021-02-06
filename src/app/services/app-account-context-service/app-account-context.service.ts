import { AuthServiceImpl } from '../auth-service/auth-service-impl.service';
import { AppRouteService } from '../app-route-service/app-route.service';
import { AccountEntity } from '../../classes/accountEntity';
import { Injectable } from '@angular/core';
import { SimpleResult } from 'src/app/utils/simple-result.class';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AppAccountContextService {

    // сущность на контекст приложения
    private _account: AccountEntity = new AccountEntity();

    constructor(
        private _authService: AuthServiceImpl,
        private temp: AppRouteService,
        private cookieService: CookieService
    ) {
    }

    regitry(): Observable<SimpleResult<AccountEntity>> {
        return this._authService.registry(this._account);
    }

    login(loginData: any) {
        this._authService.signIn(loginData)
            .subscribe((account: AccountEntity) => {
                this._account = account;
                this.temp.goTo('/dashboard');
            });
    }

    logOut() {
        this._authService.signOut(this._account)
            .subscribe((simpleResult: SimpleResult<AccountEntity>) => {
                this.cookieService.deleteAll();
                this._account = (simpleResult && simpleResult.result) ? new AccountEntity(simpleResult.result) : new AccountEntity();
                this.temp.goTo('/');
            });
    }

    getAccount(): AccountEntity {
        return this._account || new AccountEntity();
    }

    setAccount(account: AccountEntity) {
        this._account = account;
    }

    /**
     * Метод проверяет авторизован ли пользователь или нет
     */
    isAuthtorised(): boolean {
        const token = this.cookieService.get('token');
        return (token && token !== '') || false;
    }
}
