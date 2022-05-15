const SEND_ANNOUNCEMENT = 'SEND_ANNOUNCEMENT';

let initialState = {
    announcements: [],
};

const announcementSecondReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_ANNOUNCEMENT:
            return {...state,
                announcements: [state.announcements, { title: action.values.title, description: action.values.description}]}
    }
    return state;
}

export const setAnnouncement = (values) => {
    return {
        type: SEND_ANNOUNCEMENT, values
    }
}

export default announcementSecondReducer;