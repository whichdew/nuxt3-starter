/*
 * @Author: leoking
 * @Date: 2022-06-10 20:11:08
 * @LastEditTime: 2022-06-11 20:18:07
 * @LastEditors: your name
 * @Description: 
 */
export default (req, res) => {
  res.end('Legacy handler')
}
// import { useBody } from 'h3';
// import method from "~/service/sqlite-ex";
// export default async (req, res) => {
//   return { "code": 0, "data": "" };
//   let body = await useBody(req);
//   console.log(method());
//   return body;
//   // return descTable(body.table);
// };
