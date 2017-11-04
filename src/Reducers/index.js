import initialState from '../Store/initialState';

const reducer = function (state = initialState, 
    action = {}) {
        const count = state.count

        switch (action.type) {
            case "increase":
                return {
                    count: count + 1
                }
            case "decrease":
                return {
                    count: count - 1
                }
            default:
                return state
        }
}

export default reducer;