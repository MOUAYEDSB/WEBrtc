import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

const PatientForm = () => {
  const [formData, setFormData] = useState({  
    name: '',
    prnom: '',
    email: '',
    password: '',
    cin: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7081/api/patients', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7081/api/patients');
      console.log('Data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MDBContainer className="p-4 my-5 d-flex flex-column w-25" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <form onSubmit={handleSubmit}>
        <MDBInput
          wrapperClass='mb-4'
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          type='text'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Prénom'
          name='prnom'
          value={formData.prnom}
          onChange={handleChange}
          type='text'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='email'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          type='password'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='CIN'
          name='cin'
          value={formData.cin}
          onChange={handleChange}
          type='text'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          type='text'
        />
        <MDBInput
          wrapperClass='mb-4'
          label='City'
          name='city'
          value={formData.city}
          onChange={handleChange}
          type=''
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" type="submit">Sign in</MDBBtn>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '25%' }}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>
          </div>
        </div>
      </form>
    </MDBContainer>
  );
};

export default PatientForm;
