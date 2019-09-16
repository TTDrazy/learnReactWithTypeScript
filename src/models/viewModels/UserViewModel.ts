
export default class UserViewModel {
    public id: string;
    public name: string;
    public password: string;
    public tel: number;
    /**
     * 用户视图模型
     * @param id 用户id
     * @param name 用户姓名
     * @param password 用户密码
     * @param tel 用户电话号码
     */
    constructor(id: string, name: string, password: string, tel: number) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.tel = tel;
    }
}
