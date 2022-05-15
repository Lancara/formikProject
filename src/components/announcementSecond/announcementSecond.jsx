import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from "../announcementSecond/announcementSecond.module.css";

const AnnouncementSecond = (props) => {

    let announcementElements =
        props.announcements.map((p, idx)=><div key={idx}>
                <div className={classes.displayTitle}>{p.title}</div>
                <div className={classes.displayDescription}>{p.description}</div>
            </div>
        );

    return (
        <div>
            <h1 className={classes.hTitle}>Announcement <span className={classes.titleHSecondWord}>type second</span></h1>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                }}

                onSubmit={(values) => {
                    console.log(JSON.stringify(values, ))
                    props.setAnnouncement(values);
                }}
            >
                <Form>
                    <label className={classes.title} htmlFor="title"> Title </label>
                    <Field id="title" name="title" placeholder="Enter text"/>

                    <label className={classes.description} htmlFor="description">Description</label>
                    <Field id="description" name="description" placeholder="Enter text"/>

                    <div>
                        <button className={classes.buttonSubmit} type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>

            <div>
                {announcementElements}
            </div>
        </div>);
};

export default AnnouncementSecond;