import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {setAnn} from "../../redux/announcementFirst-reducer";
import AnnouncementFirstSwitch from "./announcementFirstSwitch";

let mapStateToProps = (state) => {
    return {
        initial: state.annPage.initial,
    }
}

export default compose(
    connect(mapStateToProps, {setAnn}),
)(AnnouncementFirstSwitch)