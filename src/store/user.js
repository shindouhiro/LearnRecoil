// recoilState.js
import { atom, selector } from 'recoil';

// 创建一个Atom，存储用户数据的状态
export const userState = atom({
  key: 'userState',
  default: null,
});

// 创建一个Selector，用于执行异步请求并获取用户数据
export const userSelector = selector({
  key: 'userSelector',
  get: async () => {
    try {
      const response = await fetch('http://localhost:8000/user?current=1&pageSize=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});
