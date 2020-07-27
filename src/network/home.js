import {request} from "./request";
// 二次封装
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}
