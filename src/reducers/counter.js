import * as types from '../actions/ActionTypes';

// 초기 상태를 상수 형태의 객체로 설정
const initialState = {
    number: 0
};

export default function counter(state = initialState, action){
    switch(action.type) {
        case types.INCREMENT:
            return {...state, number: state.number + 1}; // 복사 후 해당되는 것을 덮어씌워주는 문법
        case types.DECREMENT:
            return {...state, number: state.number - 1};
        default:
            return state;
    }
}