import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        
        return () => {
            clearTimeout(timeoutId);
        };
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_04uitml',
            'template_qk2n89r',
            refForm.current, {
               publicKey: 'GrNlT0EYKaj6IHr68', 
            }
                       
        )
        .then(
            () => {
              alert('Message has been sent!')
              window.location.reload(false)
            },
            () => {
                alert('Failed to send message please try again!')
            },
          );
      };

    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <div>
                <div className='info-map'>
                    Paul Crawford,
                    <br/>
                    Uptown West 12, 8712,
                    <br/>
                    London,
                    <br/>
                    United Kingdom
                    <br/>
                    <span>pac1987@hotmail.co.uk</span>
                </div>
            </div>
            <h1>
                <AnimatedLetters
                letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ', 'm', 'e']} 
                idx={15}
                />
            </h1>
            <p>
            I am interested in freelance / permanent and contract opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                       <li className="half">
                        <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                        <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                            </li>  
                    </ul>
                </form>
            </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact