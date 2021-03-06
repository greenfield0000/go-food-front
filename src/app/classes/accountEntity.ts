import {User} from './user';

/**
 * Класс - описывающий данные учетной записи
 */
export class AccountEntity {

    private id: number = null;
    private uuid: string = null;
    private login: string = '';
    private password: string = '';
    private nickName: string = '';
    private user: User = new User();

    constructor(obj?: any) {
        if (obj) {
            this.id = obj && obj.id;
            this.login = obj && obj.login;
            this.password = obj && obj.password;
            this.nickName = obj && obj.nickName;
            this.uuid = obj && obj.uuid;
            this.user = obj && obj.user;
        }
    }

    /**
     * Getter $id
     * @return {number }
     */
    public get $id(): number {
        return this.id;
    }

    /**
     * Setter $id
     * @param {number } value
     */
    public set $id(value: number) {
        this.id = value;
    }

    /**
     * Getter $uuid
     * @return {string }
     */
    public get $uuid(): string {
        return this.uuid;
    }

    /**
     * Setter $uuid
     * @param {string } value
     */
    public set $uuid(value: string) {
        this.uuid = value;
    }

    /**
     * Getter $login
     * @return {string }
     */
    public get $login(): string {
        return this.login;
    }

    /**
     * Setter $login
     * @param {string } value
     */
    public set $login(value: string) {
        this.login = value;
    }

    /**
     * Getter $password
     * @return {string }
     */
    public get $password(): string {
        return this.password;
    }

    /**
     * Setter $password
     * @param {string } value
     */
    public set $password(value: string) {
        this.password = value;
    }

    /**
     * Getter $nickName
     * @return {string }
     */
    public get $nickName(): string {
        return this.nickName;
    }

    /**
     * Setter $nickName
     * @param {string } value
     */
    public set $nickName(value: string) {
        this.nickName = value;
    }

    /**
     * Getter $user
     * @return {User }
     */
    public get $user(): User {
        return this.user;
    }

    /**
     * Setter $user
     * @param {User } value
     */
    public set $user(value: User) {
        this.user = value;
    }

}
