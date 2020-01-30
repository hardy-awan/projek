import React, { Component } from 'react'
import { register } from './UserFunctions'
import {ButtonContainer} from './Button'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Daftar</h1>
              <div className="form-group">
                <label htmlFor="name">Nama Depan</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Masukkan nama depan"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nama Belakang</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Masukkan nama belakang"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Alamat Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukkan alamat email"
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
                  placeholder="Masukkan kata sandi"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <ButtonContainer
                type="submit"
                className="mb-3"
              >
                Daftar
              </ButtonContainer>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
