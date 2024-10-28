export default function InputField({ isSubmitted, setSubmitted, handleSubmitted, formData, setFormData, handleChange }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password ) {
      setError('Please fill the all fields..');
      return;
    }
  }

  return (
    <>
      <div>
        <div className='flex flex-col items-center justify-center py-4 px-16 rounded-xl md:py-4 bg-customBlue'>
          <h2 className='text-white font-normal text-xl md:text-lg md:px-2 text-center md:whitespace-nowrap md:text-center'>
            <span className='font-bold text-white'>Try it free 7 days</span> then $20/mo. thereafter
          </h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white py-10 px-4 mt-7 rounded-xl'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center md:ml-18 mt-3'>
          <input name='firstName' className='py-3 px-12 border-yellow-300 border-2 border-black text-lg rounded-lg text-left' type='text' placeholder='First Name' required />
          <input name='lastName' className='py-3 px-12 border-yellow-300 border-2 border-black text-lg mt-5 rounded-lg text-left' type='text' placeholder='Last Name' required />
          <input name='email' className='py-3 px-12 border-yellow-300 border-2 border-black text-lg mt-5 rounded-lg text-left' type='email' placeholder='Email Address' required />
          <input name='password' className='py-3 px-12 border-yellow-300 border-2 border-black text-lg mt-5 rounded-lg text-left' type='password' placeholder='Password' required />
          <button type='submit' className='bg-customGreen hover:bg-green-600 text-white font-medium text-lg py-4 px-12 rounded-lg mt-5'>CLAIM YOUR FREE TRIAL</button>
        </form>
        <h2 className='text-customGreyishBlue ml-4 md:px-16 py-2 px-6'>By clicking the button, you are agreeing to our <span className='text-customRed'>Terms and Services</span></h2>
      </div>
    </>
  );
}
