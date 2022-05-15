import React, {useState} from 'react';
import AnnouncementFirst from "./announcementFirst";
import classes from "./announcementFirst.module.css";

const AnnouncementFirstSwitch = (props) => {

    let [editMode, setEditMode] = useState(false);

    return (
        <div>
            {editMode
                ? <AnnouncementFirst goToEditMode={() => {
                    setEditMode(false)
                }} initial={props.initial} setAnn={props.setAnn}/>
                : <AnnouncementFirstDisplay goToEditMode={() => {
                    setEditMode(true)
                }} initial={props.initial}/>}
        </div>

    );
};

const AnnouncementFirstDisplay = (props) => {
    return <div>
        <h1 className={classes.titleAnnouncement}>Announcement</h1>
        {props.initial.map((p, idx) =>
            <div key={idx}>
                <div className={classes.displayTitle}>{p.title}</div>
                <div className={classes.displayDescription}>{p.description}</div>
            </div>
        )}
        {<div>
            <button className={classes.editButton} onClick={props.goToEditMode}>Add/Edit</button>
        </div>}
    </div>
}

export default AnnouncementFirstSwitch;