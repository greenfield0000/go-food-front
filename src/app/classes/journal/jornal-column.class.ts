/**
 * Класс-сущность "Кнопка журнала"
 */
export class JornalColumn {

    private headerName: string;
    private field: string;
    private sortable: boolean;
    private filter: boolean;
    private checkboxSelection: boolean;

    constructor(data?: any) {
        this.headerName = data && data.headerName || '';
        this.field = data && data.field || '';
        this.sortable = data && data.sortable || false;
        this.filter = data && data.filter || false;
        this.checkboxSelection = data && data.checkboxSelection || false;
    }

    /**
     * Getter $headerName
     * @return {string}
     */
    public get $headerName(): string {
        return this.headerName;
    }

    /**
     * Setter $headerName
     * @param {string} value
     */
    public set $headerName(value: string) {
        this.headerName = value;
    }

    /**
     * Getter $field
     * @return {string}
     */
    public get $field(): string {
        return this.field;
    }

    /**
     * Setter $field
     * @param {string} value
     */
    public set $field(value: string) {
        this.field = value;
    }

    /**
     * Getter $sortable
     * @return {boolean}
     */
    public get $sortable(): boolean {
        return this.sortable;
    }

    /**
     * Setter $sortable
     * @param {boolean} value
     */
    public set $sortable(value: boolean) {
        this.sortable = value;
    }

    /**
     * Getter $filter
     * @return {boolean}
     */
    public get $filter(): boolean {
        return this.filter;
    }

    /**
     * Setter $filter
     * @param {boolean} value
     */
    public set $filter(value: boolean) {
        this.filter = value;
    }

    /**
     * Getter $checkboxSelection
     * @return {boolean}
     */
    public get $checkboxSelection(): boolean {
        return this.checkboxSelection;
    }

    /**
     * Setter $checkboxSelection
     * @param {boolean} value
     */
    public set $checkboxSelection(value: boolean) {
        this.checkboxSelection = value;
    }

}
