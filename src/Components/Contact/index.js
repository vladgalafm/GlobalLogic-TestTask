import React, { Component } from 'react';
import './style.scss';
import '../../Styles/main.scss';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    for (let key in this.state) {
      console.log(`${key}: ${this.state[key]}`);
    }
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact__wrapper">
          <h3 className="contact__header">CONTACT</h3>
          <form className="contact__form" action="#" method="post" onSubmit={this.handleSubmit}>
            <label className="contact__label" htmlFor="contact-phone">
              <p className="contact__label-title">Phone number:</p>
              <p className="contact__label-hint">+38066-66-66-666</p>
            </label>
            <input className="contact__input" id="contact-phone" name="phone" placeholder="Phone" required onChange={this.handleInputChange} />
            <label className="contact__label" htmlFor="contact-email">
              <p className="contact__label-title">Email:</p>
              <p className="contact__label-hint">mail&#64;gmail.com</p>
            </label>
            <input className="contact__input" id="contact-email" name="email" type="email" placeholder="Email" required onChange={this.handleInputChange} />
            <label className="contact__label" htmlFor="contact-message">
              <p className="contact__label-title">Skype:</p>
              <p className="contact__label-hint">mySkypeAcc</p>
            </label>
            <textarea className="contact__input" id="contact-message" name="message" rows="5" placeholder="Send a message" required onChange={this.handleInputChange} />
            <div className="contact__submit-container">
              <button className="contact__submit" type="submit">SEND</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;