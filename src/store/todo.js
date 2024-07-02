import {
  atom,
  selector
} from 'recoil';
import { textState } from './count';
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});


export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
    const count = get(textState)

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      count
    };
  },
});


export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
