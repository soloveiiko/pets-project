import React from 'react';
import CountrySelect from '@components/Base/CountrySelect/CountrySelect';

const ContactCheckout = () => {
  return (
    <div className="contact-checkout">
      <form className="contact-checkout__form">
        <div className="contact-checkout__details">
          <div className="contact-checkout__btn-container">
            <button className="contact-checkout__new-customer-btn">
              I’m a new customer
            </button>
            or
            <button className="contact-checkout__have-account-btn">
              I have an account
            </button>
          </div>
          <div className="contact-checkout__input-container">
            <label htmlFor="" className="contact-checkout__label">
              E-mail or mobile phone number
            </label>
            <input type="text" className="contact-checkout__input" />
          </div>
        </div>
        <div className="contact-checkout__address">
          <div className="contact-checkout__input-container">
            <label htmlFor="" className="contact-checkout__label">
              Country
            </label>
            <CountrySelect />
          </div>
          <div className="contact-checkout__inputs-container">
            <div className="contact-checkout__input-container">
              <label htmlFor="" className="contact-checkout__label">
                Name
              </label>
              <input
                type="text"
                className="contact-checkout__input"
                name="name"
              />
            </div>
            <div className="contact-checkout__input-container">
              <label htmlFor="" className="contact-checkout__label">
                Surname
              </label>
              <input
                type="text"
                className="contact-checkout__input"
                name="surname"
              />
            </div>
          </div>
          <div className="contact-checkout__input-container">
            <label htmlFor="" className="contact-checkout__label">
              Address
            </label>
            <input
              type="text"
              className="contact-checkout__input"
              name="address"
            />
          </div>
          <div className="contact-checkout__inputs-container">
            <div className="contact-checkout__input-container">
              <label htmlFor="" className="contact-checkout__label">
                City
              </label>
              <input
                type="text"
                className="contact-checkout__input"
                name="city"
              />
            </div>
            <div className="contact-checkout__input-container">
              <label htmlFor="" className="contact-checkout__label">
                Zip code
              </label>
              <input
                type="text"
                className="contact-checkout__input"
                name="zip-code"
              />
            </div>
          </div>
          <div className="contact-checkout__input-container">
            <label htmlFor="" className="contact-checkout__label">
              House, apartment number
            </label>
            <input
              type="text"
              className="contact-checkout__input"
              name="house"
            />
          </div>
        </div>
        <button className="contact-checkout__submit" type="submit">
          Continue to shipping
        </button>
      </form>
    </div>
  );
};

export default ContactCheckout;
