import {AddressItemType} from 'src/app/components/address-kladr/model/address-emiter.model';
import {AddressModel} from '../../components/address-kladr/model/address.model';

export class AddressItem {
    private cadnum: string;
    private contentType: AddressItemType;
    private guid: string;
    private id: string;
    private ifnsfl: string;
    private ifnsul: string;
    private name: string;
    private okato: string;
    private oktmo: string;
    private parentGuid: string;
    private type: string;
    private typeShort: string;
    private zip: number;

    constructor(data?: AddressModel) {
        if (data) {
            this.cadnum = data.cadnum;
            this.contentType = data.contentType;
            this.guid = data.guid;
            this.id = data.id;
            this.ifnsfl = data.ifnsfl;
            this.ifnsul = data.ifnsul;
            this.name = data.name;
            this.okato = data.okato;
            this.oktmo = data.oktmo;
            this.parentGuid = data.parentGuid;
            this.type = data.type;
            this.typeShort = data.typeShort;
            this.zip = data.zip;
        }
    }


    /**
     * Getter $cadnum
     * @return {string}
     */
    public get $cadnum(): string {
        return this.cadnum;
    }

    /**
     * Setter $cadnum
     * @param {string} value
     */
    public set $cadnum(value: string) {
        this.cadnum = value;
    }

    /**
     * Getter $contentType
     * @return {AddressItemType}
     */
    public get $contentType(): AddressItemType {
        return this.contentType;
    }

    /**
     * Setter $contentType
     * @param {AddressItemType} value
     */
    public set $contentType(value: AddressItemType) {
        this.contentType = value;
    }

    /**
     * Getter $guid
     * @return {string}
     */
    public get $guid(): string {
        return this.guid;
    }

    /**
     * Setter $guid
     * @param {string} value
     */
    public set $guid(value: string) {
        this.guid = value;
    }

    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
        return this.id;
    }

    /**
     * Setter $id
     * @param {string} value
     */
    public set $id(value: string) {
        this.id = value;
    }

    /**
     * Getter $ifnsfl
     * @return {string}
     */
    public get $ifnsfl(): string {
        return this.ifnsfl;
    }

    /**
     * Setter $ifnsfl
     * @param {string} value
     */
    public set $ifnsfl(value: string) {
        this.ifnsfl = value;
    }

    /**
     * Getter $ifnsul
     * @return {string}
     */
    public get $ifnsul(): string {
        return this.ifnsul;
    }

    /**
     * Setter $ifnsul
     * @param {string} value
     */
    public set $ifnsul(value: string) {
        this.ifnsul = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Getter $okato
     * @return {string}
     */
    public get $okato(): string {
        return this.okato;
    }

    /**
     * Setter $okato
     * @param {string} value
     */
    public set $okato(value: string) {
        this.okato = value;
    }

    /**
     * Getter $oktmo
     * @return {string}
     */
    public get $oktmo(): string {
        return this.oktmo;
    }

    /**
     * Setter $oktmo
     * @param {string} value
     */
    public set $oktmo(value: string) {
        this.oktmo = value;
    }

    /**
     * Getter $parentGuid
     * @return {string}
     */
    public get $parentGuid(): string {
        return this.parentGuid;
    }

    /**
     * Setter $parentGuid
     * @param {string} value
     */
    public set $parentGuid(value: string) {
        this.parentGuid = value;
    }

    /**
     * Getter $type
     * @return {string}
     */
    public get $type(): string {
        return this.type;
    }

    /**
     * Setter $type
     * @param {string} value
     */
    public set $type(value: string) {
        this.type = value;
    }

    /**
     * Getter $typeShort
     * @return {string}
     */
    public get $typeShort(): string {
        return this.typeShort;
    }

    /**
     * Setter $typeShort
     * @param {string} value
     */
    public set $typeShort(value: string) {
        this.typeShort = value;
    }

    /**
     * Getter $zip
     * @return {number}
     */
    public get $zip(): number {
        return this.zip;
    }

    /**
     * Setter $zip
     * @param {number} value
     */
    public set $zip(value: number) {
        this.zip = value;
    }

}
