import React from "react";
// import { Link } from "react-router-dom";
import { Field, reduxForm, startSubmit, stopSubmit } from 'redux-form'
import { required, email } from 'redux-form-validators'
// import Button from 'react-bootstrap/Button'
// import { Form } from 'react-bootstrap'
import { BInput } from '../../components/reduxForm/bootstrap/Input'
import { SubmitBtn } from "../../components/reduxForm/bootstrap/SubmitBtn";

class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={BInput}
          type="text"
          label="Email"
          placeholder="Email"
          validate={[required(), email()]}
        />
        <Field
          name="password"
          component={BInput}
          type="password"
          label="Password"
          validate={[required()]}
          placeholder="Password"
        />

        <SubmitBtn label="Login" />
      </form>
    )
  }
}

export const Login = reduxForm({
  form: 'login_form', // a unique identifier for this form,
  onSubmit: function (values, dispatch) {
    dispatch(startSubmit('login_form'))
    setTimeout(() => {
      dispatch(stopSubmit('login_form'))
    }, 2000)
  },
  initialValues: {
    email: null,
    password: 'I am initial value'
  }
})(LoginForm)