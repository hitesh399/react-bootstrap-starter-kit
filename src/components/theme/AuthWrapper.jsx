import React from 'react'

export class AuthThemeWrapper extends React.Component {
    render() {
        return (
            <div className="auth-wrapper d-flex justify-content-center">

                <div className="card auth-card">
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}