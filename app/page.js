'use client'
import Image from 'next/image';
import { useState } from 'react';
import InputField from './components/InputField'
import ResultField from './components/ResultField'

export default function Home() {
const [isSubmitted, setSubmitted] = useState(true);
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};



const [error, setError] = useState('');

function handleSubmitted() {
  setSubmitted(!isSubmitted);
}
  return (
    <main className='flex flex-col justify-center items-center min-h-screen px-5 py-5 bg-customRed bg-[url("./bg-intro-desktop.png")] bg-center' >
      <section className='flex flex-col items-center justify-center md:flex-row md:px-96 '>
        <div className='flex flex-col items-center justify-center md:mr-14'>
          <div className='flex flex-col items-center justify-center px-5 md:px-0 md:p-12'>
          <h1 className='font-bold text-3xl md:text-5xl text-center md:text-left text-white'>Learn to code by watching others</h1>
          </div>
          <div className='mb-12 px-4 mt-4 md:px-0 md:-mt-5'>
            <h2 className='font-normal text-xl md:text-2xl text-white text-left tracking-wide'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h2>
          </div>
        </div>
        <div>
        {isSubmitted ? (<InputField isSubmitted={isSubmitted} handleSubmitted={handleSubmitted} setSubmitted={setSubmitted} formData={formData} setFormData={setFormData} handleChange={handleChange} error={error} setError={setError}/>) : <ResultField />}
        </div>
      </section>
    </main>
  );
}
