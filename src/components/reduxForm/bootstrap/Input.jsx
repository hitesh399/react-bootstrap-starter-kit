import React from 'react'
import { Form, FormControl } from 'react-bootstrap'


export  class BInput extends React.PureComponent {

    /**
     * List of Bootstrap field props
     */
    static inputProps = [
        'inline',
        'plaintext',
        'placeholder',
        'disabled',
        'id',
        'readOnly',
        'size',
        'type',
        'value',
        'bsPrefix',
        'bsCustomPrefix'
    ]

    /**
     * To extract the Input props from the context props.
     */
    getOnlyInputProps() {
        const keys = Object.keys(this.props)
        let onlyInputPros = {}
        keys.forEach(k => {
            if (this.constructor.inputProps.includes(k)) {
                onlyInputPros[k] = this.props[k]
            }
        })
        return onlyInputPros
    }

    prepareFieldProps() {

        const { input, meta: { form, valid, touched }, id, input: { name }, onChange } = this.props
        let otherProps = {}

        /** 
         * access of change event
         */
        if (onChange) {
            otherProps.onChange = (e) => { input.onChange(e); onChange(e) }
        }
        otherProps.isInvalid = touched && !valid
        otherProps.isValid = touched && valid
        return {
            ...input,
            ...this.getOnlyInputProps(),
            ...otherProps
        }
    }
    isCheck() {
        const { type } = this.props
        return ['radio', 'checkbox', 'switch'].includes(type)
    }
    /**
     * Prepare the field component Node Tree
     */
    fieldComponent() {
        let element = this.isCheck() ? Form.Check : Form.Control
        return React.createElement(element, this.prepareFieldProps())
    }
    /**
     * Prepare the field wrapper component Node Tree
     */
    fieldWrapperComponent(childrens) {
        const { meta: { form }, id, input: { name } } = this.props

        return React.createElement(
            Form.Group,
            {
                controlId: `${form}_${id || name}_field`
            },
            ...childrens
        )
    }
    /**
    * Prepare the field Label Node Tree
    */
    fieldLabelComponent() {
        const { label, meta: { form }, id, input: { name } } = this.props

        if (label) {
            return React.createElement(
                Form.Label,
                {
                    key: `${form}_${id || name}_label`
                },
                label
            )
        }
        return null
    }
    errorComponent() {
        const { meta: { error, touched, form }, id, input: { name } } = this.props

        if (error && touched) {
            return React.createElement(
                FormControl.Feedback,
                {
                    key: `${form}_${id || name}_error`,
                    type: 'invalid'
                },
                error
            )
        }
        return null
    }
    render() {

        return this.fieldWrapperComponent(
            [
                this.fieldLabelComponent(),
                this.fieldComponent(),
                this.errorComponent()
            ]
        )
    }
}