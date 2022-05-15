import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import DisplayAnnouncement from "./displayAnnouncement";

let mapStateToProps = (state) => {
    return {
        initial: state.annPage.initial,
        announcements: state.announcementPage.announcements,
    }
}
export default compose(
    connect(mapStateToProps, {}),
)(DisplayAnnouncement)