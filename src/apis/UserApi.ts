import Axios from 'axios';
//** 这是一些关于User 的 api*/
export default class UserApi{
    getAllUserInfo = async ()=>{
      return await Axios.get('http://5bd30967c8f9e400130cb86b.mockapi.io/user')
    }
}