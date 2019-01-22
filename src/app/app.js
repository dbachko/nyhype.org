import React from 'react'
import fetch from 'isomorphic-fetch'
import { string, object } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Layout from '../components/layout'

const ShippingAddressForm = () => {
  const validationSchema = object().shape({
    address: string().required('Address is required!'),
    city: string().required('City is required!'),
    email: string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    firstName: string().required('First name is required!'),
    lastName: string().required('Last name is required!'),
    state: string().required('State is required!'),
    zip: string()
      .matches(/^\d+$/, 'Invalid zip!')
      .min(5, 'Invalid zip!')
      .max(5, 'Invalid zip!')
      .required('Zip is required!'),
  })

  return (
    <Formik
      initialValues={{
        address: '',
        city: '',
        country: 'USA',
        email: '',
        firstName: '',
        lastName: '',
        state: '',
        zip: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Disable submit button.
        setSubmitting(true)
        // Generate charge.
        fetch('/.netlify/functions/payment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(response => response.json())
          .then(({ url }) => {
            // Redirect customer to cb commerce checkout.
            window.location.href = url
          })
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div
            className={`form-group ${
              errors.email && touched.email ? 'has-error' : ''
            }`}
          >
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className="form-input"
              placeholder="satoshi@anonymousspeech.com"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="form-input-hint"
            />
          </div>
          <div className="">
            <div className="columns">
              <div className="column col-6 col-sm-12 p-2">
                <div
                  className={`form-group ${
                    errors.firstName && touched.firstName ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="Satoshi"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
              <div className="column col-6 col-sm-12 p-2">
                <div
                  className={`form-group ${
                    errors.lastName && touched.lastName ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Nakamoto"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="columns">
              <div className="column col-10 p-2">
                <div
                  className={`form-group ${
                    errors.address && touched.address ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="address">Address</label>
                  <Field
                    type="text"
                    name="address"
                    className="form-input"
                    placeholder="1 Broadway"
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
              <div className="column col-2 p-2">
                <div
                  className={`form-group ${
                    errors.apt && touched.apt ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="apt">Apt</label>
                  <Field
                    type="text"
                    name="apt"
                    className="form-input"
                    placeholder="1E"
                  />
                  <ErrorMessage
                    name="apt"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`form-group ${
              errors.city && touched.city ? 'has-error' : ''
            }`}
          >
            <label htmlFor="city">City</label>
            <Field
              type="text"
              name="city"
              className="form-input"
              placeholder="New York"
            />
            <ErrorMessage
              name="city"
              component="span"
              className="form-input-hint"
            />
          </div>
          <div className="">
            <div className="columns">
              <div className="column col-5 p-2">
                <div
                  className={`form-group ${
                    errors.country && touched.country ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="country">Country</label>
                  <Field
                    component="select"
                    name="country"
                    className="form-select"
                    placeholder="1 Broadway"
                    disabled
                  >
                    <option value="USA">United States</option>
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
              <div className="column col-4 p-2">
                <div
                  className={`form-group ${
                    errors.state && touched.state ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="state">State</label>
                  <Field
                    component="select"
                    name="state"
                    className="form-select"
                  >
                    <option value="">Choose state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </Field>
                  <ErrorMessage
                    name="state"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
              <div className="column col-3 p-2">
                <div
                  className={`form-group ${
                    errors.zip && touched.zip ? 'has-error' : ''
                  }`}
                >
                  <label htmlFor="zip">Zip code</label>
                  <Field
                    type="text"
                    name="zip"
                    className="form-input"
                    placeholder="10001"
                    maxLength="5"
                  />
                  <ErrorMessage
                    name="zip"
                    component="span"
                    className="form-input-hint"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="divider text-center" data-content="ℼ" />
          <button
            type="submit"
            className="btn btn-primary float-right"
            disabled={isSubmitting}
          >
            Continue to Payment
          </button>
        </Form>
      )}
    </Formik>
  )
}

const App = () => {
  return (
    <Layout>
      <h5>Shipping info:</h5>
      <div className="container">
        <div className="columns">
          <div className="column col-6 col-sm-12 p-2">
            <ShippingAddressForm />
          </div>
          <div className="column col-6 col-sm-12 p-2" />
        </div>
      </div>
    </Layout>
  )
}

export default App
