// 액션 타입
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

// [타입스크립트 타입 - 1] ReturnType 유틸을 사용하여 타입 가져오기
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

// [타입스크립트 타입 - 2]  직접 입력
type CounterAction =
  | { type: 'counter/INCREASE' }
  | { type: 'counter/DECREASE' }
  | { type: 'counter/INCREASE_BY'; payload: number };

// [상태 타입]
type CounterState = {
  count: number;
};

// [초기 값 설정]
const initialState: CounterState = {
  count: 0,
};

// [리듀서]
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
