export const initialState = {
    loading: [],
    data: null,
    reqparams: {},
    history: [],
    historyRender: true

}
export const stateReducer = (state, action) => {
    switch (action.type) {
        case "loadingStatus": {
            return { ...state, loading: action.payload }
        }
        case "dataStatus": {
            return { ...state, data: action.payload }
        }
        case "reqParamsStatus": {
            return { ...state, reqparams: action.payload }
        }
        case "historyStatus": {
            return { ...state, history: [...state.history, action.payload] }
        }
        case "historyRenderStatus": {
            return { ...state, historyRender: action.payload }
        }
        default: return state
    }
}