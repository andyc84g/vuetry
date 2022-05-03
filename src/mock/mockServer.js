import Mock from "mockjs";
import {BASEURL} from '@/api/config'
const user = {
  code: 200,
  userInfo: {
    name: "@First @First @Last",
    "age|1-100": 1,
    "isNew|1-2": true,
  },
};
const user2 = {
  code: 200,
};

/**
 * 'name|count': array

    通过重复属性值 array 生成一个新数组，重复次数为 count。
 */
const arr = [
  {
    name: "@First @First @Last",
    "age|1-100": 1,
    'id|+1': 1,
  }
];

const ob ={
    'arr|10': arr
}

const baseURL = BASEURL;

Mock.mock(`${baseURL}/mock/user`, "get", user);
Mock.mock(`${baseURL}/mock/user2`, "get", user2);

Mock.mock(`${baseURL}/mock/datalist`, "get", ob);
