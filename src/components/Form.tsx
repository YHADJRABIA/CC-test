import React, { FC, useState } from "react";

import { submitData } from "../utils/notion";

import { isEmpty, isEmail, isValidPhone } from "../utils/validator"; // Validators
import { notify } from "../utils/notification"; // Notifications

import Animation from "./Animation"; // Loading component

const Form: FC = () => {
  const initialEntry = {
    firstName: "Yacine",
    lastName: "H R",
    email: "email@domain.com",
    phoneNumber: "0123456789",
    country: "France",
    favoriteDish: "Pizza",
  };

  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState(initialEntry);
  const prefix = "+33";

  // Updating state
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Phone prefix
    if (name === "phoneNumber") {
      e.target.value = prefix + value.substr(prefix.length);
    }

    setEntry({
      ...entry,
      [name]: value,
    });
  };

  // Validating form + API call
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData: any = {};

    // Formatting form parameters
    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const { firstName, lastName, email, phoneNumber, country, favoriteDish } =
      formData;

    // Validating form data
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(email) ||
      isEmpty(phoneNumber) ||
      isEmpty(country) ||
      isEmpty(favoriteDish)
    ) {
      notify("error", "All fields must be filled out");
      return null;
    }

    if (!isEmail(email)) {
      notify("error", "Invalid e-mail");
      return null;
    }

    if (!isValidPhone(phoneNumber)) {
      notify("error", "Invalid phone number");
      return null;
    }

    // Validation before posting to API
    try {
      setLoading(true);
      await submitData(formData);
      setLoading(false);
      notify("success", "Entry successfully added!");
    } catch (err) {
      console.log(err);
      setLoading(false);
      notify("error", "An error occured");
    }

    // Resetting form
    e.target.reset();
  };

  return (
    <section className="form-section">
      <form
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className="form_card"
        data-testid="form"
      >
        <div className="form-group">
          <div className="form-field">
            <input
              placeholder={initialEntry.firstName}
              type="text"
              name="firstName"
              data-testid="firstName"
              onChange={handleOnChange}
            />
            <label htmlFor="firstName">Firstname</label>
          </div>
          <div className="form-field">
            <input
              placeholder={initialEntry.lastName}
              type="text"
              name="lastName"
              data-testid="lastName"
              onChange={handleOnChange}
            />
            <label htmlFor="lastName">Lastname</label>
          </div>
        </div>
        <div className="form-field large-field">
          <input
            placeholder={initialEntry.email}
            type="email"
            name="email"
            data-testid="email"
            onChange={handleOnChange}
          />
          <label htmlFor="emlail">Email</label>
        </div>
        <div className="form-group">
          <div className="form-field">
            <input
              placeholder={initialEntry.phoneNumber}
              type="tel"
              name="phoneNumber"
              data-testid="phoneNumber"
              onChange={handleOnChange}
              /*             ref={(target) => {
              if (target) target.value = prefix;
            }} */
            />
            <label htmlFor="phoneNumber">Phone number</label>
          </div>
          <div className="form-field">
            <input
              placeholder={initialEntry.country}
              type="text"
              name="country"
              data-testid="country"
              onChange={handleOnChange}
            />
            <label htmlFor="country">Country</label>
          </div>
        </div>
        <div className="form-field">
          <input
            placeholder={initialEntry.favoriteDish}
            type="text"
            name="favoriteDish"
            data-testid="favoriteDish"
            onChange={handleOnChange}
          />
          <label htmlFor="favoriteDish">Favorite dish</label>
        </div>
        <button
          className="btn btn-primary"
          data-testid="submit"
          disabled={loading}
        >
          {!loading ? <p>Add to database!</p> : <Animation />}
        </button>
      </form>
    </section>
  );
};

export default Form;
