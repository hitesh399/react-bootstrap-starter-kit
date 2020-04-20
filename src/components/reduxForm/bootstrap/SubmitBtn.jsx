import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { FormName } from 'redux-form'
import { connect } from 'react-redux';
import helper from 'js-object-helper'

export class SubmitBtn extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string,
    }
    static defaultProps = {
        label: 'Submit'
    }
    render() {

        return <FormName
            children={(form) => (
                <Btn {...this.props} form={form}> Login</Btn>
            )}
        />

    }
}

class SBtn extends React.PureComponent {
    render() {
        const { label, submiting } = this.props
        return <Button disabled={submiting} type="submit" variant="primary" >
            {submiting ? <span><Spinner as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true" /> <span>Working...</span></span> : null}
            {!submiting ? label : null}
        </Button>
    }
}
const Btn = connect(function (state, props) {
    return {
        submiting: helper.getProp(state, ['form', props.form.form, 'submitting'], false)
    }
})(SBtn)
