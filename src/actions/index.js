// 작업에 대한 정보를 지니고 있는 객체
// 액션 생성자 만드는 파일
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color: color
    }
}