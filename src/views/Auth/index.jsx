import React from "react";
import { Field, reduxForm, startSubmit, stopSubmit } from 'redux-form'
import { required, email } from 'redux-form-validators'
import { BInput } from '../../components/reduxForm/bootstrap/Input'
import { SubmitBtn } from "../../components/reduxForm/bootstrap/SubmitBtn";
import { setCookie, guidGenerator, getCookie } from "../../utils";
import history from '../../history'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    if (getCookie('ACCESS-TOKEN')) {
      this.props.history.push('/admin')
    }
  }
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
      setCookie('ACCESS-TOKEN', guidGenerator(), 365)
      dispatch(stopSubmit('login_form'))
      history.push('/admin')
    }, 2000)
  },
  initialValues: {
    email: null,
    password: 'I am initial value'
  }
})(LoginForm)