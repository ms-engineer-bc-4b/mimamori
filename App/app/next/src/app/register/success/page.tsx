// Home.tsx
'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import Router from 'next/router';
//import { useRouter } from 'next/navigation'


//import { stringify } from 'querystring';
interface QueryParams {
  [key: string]: string | string[] | undefined;
}
interface LoginForm extends QueryParams {
  senior_last_name: string;
  senior_first_name: string;
  gender: string;
  birth_date: string;
  senior_email: string;
  senior_tel: string;
  health_status: string;
  medication: string;
  medication_frequency: string;

  family_last_name: string;
  family_first_name: string;
  relationship_with_senior: string;
  family_email: string;
  family_tel: string;
  family_password: string;
  confirm_family_password: string;
}





function Home() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginForm>({ mode: "onChange" });
  const [formData, setFormData] = useState<LoginForm | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const medicationValue = watch('medication');

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (formData) {
      Router.push({
        pathname: '/confirmation',
        query: formData,
      });
    }
  };

  const handleBack = () => {
    setFormData(null);
    setShowConfirmation(false);
  };

  return (
    <div className='form-container'>
     
    </div>
  );
}

export default Home;
