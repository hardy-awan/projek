import React, { Component } from 'react'
import { login } from './UserFunctions'
import {ButtonContainer} from './Button'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Silahkan Masuk</h1>
              <div className="form-group">
                <label htmlFor="email">Alamat Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukkan email anda"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Kata Sandi</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Masukkan kata sandi anda"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <ButtonContainer
                type="submit"
                className="mb-3 "
              >
                Masuk

              </ButtonContainer>
              

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
