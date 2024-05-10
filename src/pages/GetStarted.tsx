import React, { useState } from 'react';
import ThankYouCard from '../components/ThankYouCard';

interface FormValues {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

interface FormErrors {
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  message?: string;
}

const GetStarted: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formValues.user_name) {
      errors.user_name = 'Required';
    } else if (formValues.user_name.length < 3) {
      errors.user_name = 'Name must be at least 3 characters';
    }
    if (!formValues.user_email) {
      errors.user_email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.user_email)) {
      errors.user_email = 'Invalid email address';
    }
    if (!formValues.user_phone) {
      errors.user_phone = 'Required';
    } else if (!/^\d{11}$/.test(formValues.user_phone)) {
      errors.user_phone = 'Phone number must be 11 digits';
    }
    if (!formValues.message) {
      errors.message = 'Required';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const form = e.currentTarget;
      fetch('/f/xkndylqe', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log(data); // Process your response data here
        setIsSubmitted(true);
      })
      .catch(error => console.error('Error:', error));
    }
  };

  if (isSubmitted) {
    return <ThankYouCard isSubmitted={isSubmitted} />;
  }

  return (
    <main className="container px-lg-5">
      <div className="row justify-content-center mx-0 mt-2 mt-md-10">
        <div className="col-12 col-md-6 pt-2 pt-md-20 px-md-10">
          <div className='pt-md-20 animate__animated animate__fadeInLeft'>
            <h1 className='text-black font-bold text-7xl pb-5'>Contact Us!</h1>
            <p className='text-gray-500 font-normal text-2xl pb-5'>Please fill out the form to get started. We look forward to hearing from you!</p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-md-10 pb-5">
          <div className="card p-4 shadow animate__animated animate__zoomIn">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="user_name">Full Name</label>
                <input type="text" className="form-control" id="user_name" name="user_name" value={formValues.user_name} onChange={e => setFormValues({ ...formValues, user_name: e.target.value })} />
                {errors.user_name && <div className="text-red-500 text-xs font-light">{errors.user_name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" className="form-control" id="user_email" name="user_email" value={formValues.user_email} onChange={e => setFormValues({ ...formValues, user_email: e.target.value })} />
                {errors.user_email && <div className="text-red-500 text-xs font-light">{errors.user_email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="user_phone">Phone Number</label>
                <input type="tel" className="form-control" id="user_phone" name="user_phone" value={formValues.user_phone} onChange={e => setFormValues({ ...formValues, user_phone: e.target.value })} />
                {errors.user_phone && <div className="text-red-500 text-xs font-light">{errors.user_phone}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" value={formValues.message} onChange={e => setFormValues({ ...formValues, message: e.target.value })} />
                {errors.message && <div className="text-red-500 text-xs font-light">{errors.message}</div>}
              </div>

              <button type="submit" className="btn bg-primary w-100 text-white">Send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
