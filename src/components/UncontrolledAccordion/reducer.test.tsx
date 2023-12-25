import {ActionType, reducer, StateType, TOGGLE_CONSTANT} from "./reducer";


test('reducer should change value to opposite', () => {
    //data

    const state: StateType = {
        collapsed: true
    }
    const action: ActionType = {
        type: TOGGLE_CONSTANT
    }
    //action
    const newState = reducer(state, action)

    //expectation
    expect(newState.collapsed).toBe(!state.collapsed)
})
test('reducer should change value to opposite2', () => {
    //data

    const state: StateType = {
        collapsed: false
    }
    const action: ActionType = {
        type: TOGGLE_CONSTANT
    }
    //action
    const newState = reducer(state, action)

    //expectation
    expect(newState.collapsed).toBe(!state.collapsed)
})
test('fake action', () => {
    //data

    const state: StateType = {
        collapsed: false
    }
   expect(()=>{reducer(state, {type: 'Fake'})}).toThrowError()
})