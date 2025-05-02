import { EmailJSResponseStatus } from '@emailjs/browser';
import React from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = React.useRef(null);
  const [ loading, setLoading ] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({target : {name , value}}) => {
    setFormData({
      ...formData,
      [name]: value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // service_rxz7sts
    try{
      await emailjs.send('service_rxz7sts', 'template_ia2hs4r', {
        from_name: formData.name,
        to_name: 'Dat Duong',
        from_email: formData.email,
        to_email: 'datdt240902@gmail.com'},
        'KAYe8JI10gc2oo2RF')
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
    } catch (error) {
    
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  }
  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative min-h-screen flex flex-col justify-center items-center'>
        <img src='/assets/terminal.png' alt='terminal' className='absolute inset-0 min-h-screen w-full' />
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='text-lg text-white mt-3'>
            I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <form ref ={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input type='text' name='name' value={formData.name} onChange={handleChange} className='field-input' placeholder='Dat Duong' required />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input type='email' name='email' value={formData.email} onChange={handleChange} className='field-input' placeholder='datdt240902@gmail.com' required />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Message me</span>
              <textarea name='message' value={formData.message} onChange={handleChange} className='field-input' placeholder='Hi, I am interested in ...' required rows='5' />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact