export const initialState = {
    method: '',
    url: '',
    obj: ''

}


export const formStateReducer = (state, action) => {
    switch (action.type) {
        case "urlStatus": {
            return { ...state, url: action.payload }
        }
        case "methodStatus": {
            return { ...state, method: action.payload }
        }
        case "objStatus": {
            return { ...state, obj: action.payload }
        }

        default: return state
    }
}