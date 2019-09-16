import * as React from "react";
import UserApi from "../apis/UserApi";
import UserViewModel from "../models/viewModels/UserViewModel";
import { AxiosResponse } from "axios";

export interface IUserState {
    userInfoList: Array<UserViewModel>;
}

export default class User extends React.Component<any, IUserState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userInfoList: new Array<UserViewModel>()
        };
    }
    componentDidMount() {
        const userApi = new UserApi();
        userApi.getAllUserInfo().then((response: AxiosResponse) => {
            this.setState({
                userInfoList: response.data
            });
        });
    }
    public render() {
        const userInfoList = this.state.userInfoList;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>编号</td>
                            <td>姓名</td>
                            <td>密码</td>
                            <td>电话号码</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfoList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                                <td>{item.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
