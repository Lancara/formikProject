import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import classes from "./announcementFirst.module.css";

const AnnouncementFirst = (props) => {

    const initialValues = {
        initial: props.initial,
        picked:props.picked,
    };

return(
    <div className={classes.annWrapper}>
        <h1 className={classes.hTitle}>Announcement <span className={classes.hTitleAdd}>add/edit</span></h1>

        <Formik

            initialValues={initialValues}
            onSubmit={ (values) => {
                props.setAnn(values);
                props.goToEditMode();
            }}>

            {({ values }) => (
                <Form>
                    <FieldArray name="initial">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.initial.length > 0 &&
                                    values.initial.map((f, index) => (
                                        <div className="row" key={index}>

                                            <div className="col">
                                                <label htmlFor={`initial.${index}.title`}><span className={classes.title}>Title:</span></label>
                                                <Field
                                                    name={`initial.${index}.title`}
                                                    placeholder="Enter text"
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    name={`initial.${index}.title`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor={`initial.${index}.description`}><span className={classes.description}>Description:</span></label>
                                                <Field
                                                    name={`initial.${index}.description`}
                                                    placeholder="Enter text"
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    name={`initial.${index}.title`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className={classes.buttonDelete}
                                                    onClick={() => remove(index)}
                                                >
                                                    <span>X</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                <button className={classes.buttonAddAnncountment}
                                    type="button"
                                    onClick={() => push({ title: '', description: '' })}
                                >
                                    Add
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button className={classes.buttonInvite} type="submit">Invite</button>
                </Form>
            )}
        </Formik>
    </div>
)};

export default AnnouncementFirst;


