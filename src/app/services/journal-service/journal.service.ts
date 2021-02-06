import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SimpleResult} from 'src/app/utils/simple-result.class';
import {JournalMetadata} from 'src/app/classes/journal/journal-metadata.class';
import {HttpService} from '../http-service/http.service';
import {IJournal} from 'src/app/components/journal/journal.interface';

@Injectable({
    providedIn: 'root'
})
export class JournalService {

    constructor(private http: HttpService) {
    }

    private _context: IJournal<any>;

    /**
     * Getter context
     * @return {IJournal}
     */
    public get context(): IJournal<any> {
        return this._context;
    }

    /**
     * Setter context
     * @param {IJournal} value
     */
    public set context(value: IJournal<any>) {
        this._context = value;
    }

    private _journalLoadData: Subject<SimpleResult<any>> = new Subject<SimpleResult<any>>();

    /**
     * Getter journalLoadData
     * @return {Subject<SimpleResult<any>> }
     */
    public get journalLoadData(): Subject<SimpleResult<any>> {
        return this._journalLoadData;
    }

    /**
     * Метод загрузки метаданных для построения журнала.
     * В него входит загрузка журнала, кнопок-обработчиков, параметров фильтрации,
     * пресеты (уникальные для каждого пользователя, именно поэтому передается uuid)
     *
     * @param journalSysName системное имя  журнала
     * @param uuid уникальный идентифкатор пользователя
     */
    public loadJournalMetadata(journalSysName: string, uuid: string): Observable<SimpleResult<JournalMetadata>> {
        const callParams = {
            journalSysName: journalSysName, uuid: uuid
        };
        return this.post<JournalMetadata>('load', callParams);
    }

    /**
     * Метод загрузки данных журнала
     *
     * @param journalSysName системное имя  журнала
     * @param uuid уникальный идентифкатор пользователя
     */
    public loadJournalData(journalSysName: string, pageNumber: number = 0): Observable<SimpleResult<any>> {
        const callParams = {
            journalSysName: journalSysName, pageNumber: pageNumber
        };
        return this.post('loadData', callParams);
    }

    /**
     * Метод по публикации события изменения данных журнала
     * @param data изененные данные
     */
    public refreshLoadData<T>(data?: SimpleResult<T>) {
        console.log('loaded journal data = ', data);
        if (data && data.result && data.result['rows']) {
            data.result['rows'].map((row: any, index: number) => row.rownum = index + 1);
        }
        this._journalLoadData.next(data);
    }

    /**
     * Общий метод для вызова сервисных функций журнала
     * @param methodName имя метода, который вызывается
     * @param postParams параметры вызова (у каждого метода могут быть свои)
     */
    private post<T>(methodName, postParams?: any): Observable<SimpleResult<T>> {
        if (!postParams) {
            postParams = {};
        }
        return this.http
            .post<SimpleResult<T>>(
                environment.gatePath.journal_location + '/' + methodName, postParams
            );
    }

}
