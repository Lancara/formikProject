import React from 'react';
import classes from "./displayAnnouncement.module.css";

const DisplayAnnouncement = (props) => {
    return (
        <div>
            <h2 className={classes.hTitle}>Announcement first:</h2>
            {props.initial.map((p, idx) =>
                <div key={idx}>
                    <div className={classes.displayTitle}>{p.title}</div>
                    <div className={classes.displayDescription}>{p.description}</div>
                </div>
            )}
            <h2 className={classes.hTitle}>Announcement second:</h2>
            {props.announcements.map((p, idx) => <div key={idx}>
                    <div className={classes.displayTitle}>{p.title}</div>
                    <div className={classes.displayDescription}>{p.description}</div>
                </div>
            )}
        </div>
    );
};

export default DisplayAnnouncement;