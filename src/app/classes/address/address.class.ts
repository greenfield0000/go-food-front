import {AddressItem} from './address-item.class';

/**
 * Класс для хранения структуры информации о адресе
 */
export class Address {

    private region: AddressItem;
    private city: AddressItem;
    private street: AddressItem;
    private building: AddressItem;
    private appartment: string;

    /**
     * Getter $region
     * @return {AddressItem}
     */
    public get $region(): AddressItem {
        return this.region;
    }

    /**
     * Setter $region
     * @param {AddressItem} value
     */
    public set $region(value: AddressItem) {
        this.region = value;
    }

    /**
     * Getter $city
     * @return {AddressItem}
     */
    public get $city(): AddressItem {
        return this.city;
    }

    /**
     * Setter $city
     * @param {AddressItem} value
     */
    public set $city(value: AddressItem) {
        this.city = value;
    }

    /**
     * Getter $street
     * @return {AddressItem}
     */
    public get $street(): AddressItem {
        return this.street;
    }

    /**
     * Setter $street
     * @param {AddressItem} value
     */
    public set $street(value: AddressItem) {
        this.street = value;
    }

    /**
     * Getter $building
     * @return {AddressItem}
     */
    public get $building(): AddressItem {
        return this.building;
    }

    /**
     * Setter $building
     * @param {AddressItem} value
     */
    public set $building(value: AddressItem) {
        this.building = value;
    }

    /**
     * Getter $appartment
     * @return {string}
     */
    public get $appartment(): string {
        return this.appartment;
    }

    /**
     * Setter $appartment
     * @param {string} value
     */
    public set $appartment(value: string) {
        this.appartment = value;
    }


}
