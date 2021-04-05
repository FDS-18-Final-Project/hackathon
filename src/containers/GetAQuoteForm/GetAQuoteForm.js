import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, A11yHidden } from 'components';
import Apis from 'apis/apis';
import styled from 'styled-components';
import { validationRules } from 'utils/validation';
import * as Yup from 'yup';

const StyledFormContainer = styled.section`
  width: 100%;
  h2 {
    text-align: center;
    font-size: 3em;
  }
`;
const StyledCheckboxContainer = styled.div`
  margin-bottom: 40px;
  display: inline-block;
  width: 100%;

  label {
    font-size: 1.5em;
    margin-right: 30px;
  }
  input {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    position: relative;
    top: 5px;
  }
  label:first-child > input {
    margin-left: 0;
  }
  title {
    display: block;
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;

const GetAQuoteForm = () => {
  const formikProps = {
    initialValues: {
      fullname: '',
      email: '',
      phoneNumber: '',
      makeAndModel: '',
      year: '',
      postalCode: '',
      services: [],
      message: ''
    },
    validationSchema: Yup.object(validationRules),
    onSubmit: async values => {
      const postFormData = async values => {
        await Apis.postData(values);
      };
      postFormData(values);
    }
  };

  const defaultServices = React.useRef([
    'Ceramic Pro',
    'Paint Protection Film',
    'Paint Correction',
    'Detailing',
    'Window Tinting'
  ]);

  return (
    <StyledFormContainer>
      <A11yHidden>Get a Quote Form</A11yHidden>
      <Formik {...formikProps}>
        {() => {
          return (
            <Form>
              <Field name='fullname' type='text' component={Input} />
              <Field name='email' type='email' component={Input} />
              <Field name='phoneNumber' type='text' component={Input} />
              <Field name='makeAndModel' type='text' component={Input} />
              <Field name='year' type='text' component={Input} />
              <Field name='postalCode' type='text' component={Input} />
              <StyledCheckboxContainer role='group' aria-labelledby='checkbox-group'>
                <title>Services</title>
                {defaultServices.current.map((service, idx) => (
                  <Field name={service} key={`checkbox_${idx}`} type='checkbox' component={Input} />
                ))}
              </StyledCheckboxContainer>
              <Field name='message' type='textarea' component={Input} />
              <Button
                type='submit'
                mode='primary'
                width='300px'
                height='50px'
                borderRadius='20px'
                margin='0 auto'
              >
                Send Message
              </Button>
            </Form>
          );
        }}
      </Formik>
    </StyledFormContainer>
  );
};

export default GetAQuoteForm;
