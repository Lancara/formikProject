const SEND_ANN = 'SEND_ANN';

const initialState = {
    initial: [
        {
            title: '',
            description: '',
        }
    ],
};

const announcementFirstReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_ANN:
            return {
                ...state,
                initial: action.values.initial, /* { title: action.values, description: action.values.initial.description}*/
            }
    }
    return state;
}

export const setAnn = (values) => {
    debugger
    return {
        type: SEND_ANN, values
    }
}

export default announcementFirstReducer;