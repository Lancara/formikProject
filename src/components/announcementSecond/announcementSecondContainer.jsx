import AnnouncementSecond from "./announcementSecond";
import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {setAnnouncement} from "../../redux/announcementSecond-reducer";

let mapStateToProps = (state) => {
    return {
        announcements: state.announcementPage.announcements,
    }
}

export default compose(
    connect(mapStateToProps, {setAnnouncement}),
)(AnnouncementSecond)