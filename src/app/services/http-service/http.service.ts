import {environment} from '../../../environments/environment';
import {DialogComponent} from '../../components/modal-window/common/dialog/dialog.component';
import {ModalWindowService} from 'src/app/services/modal-window-service/modal-window.service';
import {IDialogType} from '../modal-window-service/idialog.type';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, switchMap} from 'rxjs/operators';

/**
 * Общий сервис
 */
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private defaultErrorMessage: string = `Произошла ошибка вызова сервиса. Сервис временно недоступен.
  Попробуйте выполнить данное действие через некоторое время.`;

    constructor(private http: HttpClient, private modalWindow: ModalWindowService) {
    }

    /**
     * POST-запрос с обработкой ответа
     * @param url адрес запроса
     * @param params параметры запроса
     * @param headers заголовок запроса
     */
    public post<T>(url: string, params: any = {}, headers: HttpHeaders = environment.headers): Observable<T> {
        const options = {
            headers: headers,
            withCredentials: true
        };
        return this.http.post<T>(url, params, options).pipe(
            switchMap((res) => this.handleResponse(res)),
            catchError(err => {
                console.log(err);
                this.modalWindow.openDialog(IDialogType.ERROR, DialogComponent, {
                    message: this.defaultErrorMessage
                });
                return of({});
            })
        );
    }

    /**
     * GET-запрос с обработкой ответа
     * @param url адрес запроса
     * @param params параметры запроса
     * @param headers заголовок запроса
     */
    public get<T>(url: string, params: any = {}, headers: HttpHeaders = environment.headers): Observable<T> {
        const options = {
            headers: headers
        };
        return this.http.get<T>(url, params).pipe(
            switchMap((res) => this.handleResponse(res)),
            catchError(err => {
                console.log(err);
                this.modalWindow.openDialog(IDialogType.ERROR, DialogComponent, {
                    message: this.defaultErrorMessage
                });
                return of({});
            })
        );
    }

    /**
     * PUT-запрос с обработкой ответа
     * @param url адрес запроса
     * @param params параметры запроса
     * @param headers заголовок запроса
     */
    public put<T>(url: string, params: any = {}, headers: HttpHeaders = environment.headers): Observable<T> {
        const options = {
            headers: headers
        };
        return this.http.put<T>(url, params, options).pipe(
            switchMap((res) => this.handleResponse(res)),
            catchError(err => {
                console.log(err);
                this.modalWindow.openDialog(IDialogType.ERROR, DialogComponent, {
                    message: this.defaultErrorMessage
                });
                return of({});
            })
        );
    }

    private handleResponse<T>(result: T): Observable<any> {
        const simpleResult: any = Object.assign({}, result);
        console.log('handleResponse = ', result);
        if ((!simpleResult) || ((simpleResult) && (simpleResult.status) && (simpleResult.status.toString() === 'ERROR'))) {
            const messageInfo: string = simpleResult && simpleResult.message || this.defaultErrorMessage;
            return this.modalWindow.openDialog(IDialogType.INFO, DialogComponent, {
                message: messageInfo
            });
        }
        return of(result);
    }
}
