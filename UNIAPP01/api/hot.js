import request from '../utils/request';
//封装一个方法
export function getHotTabs(){
    return request({
        url:'/hot/tabs'
    });
}