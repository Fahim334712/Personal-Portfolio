import './Contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Alert } from '@mui/material';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ew9dmmr', 'template_6dzzwog', formRef.current, 'user_u8OEIdiZvoo7hWj3cQ7f2')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your projects
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            01868174998
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />
                            f.fahimcox@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon"
                            />
                            Chawkbazar,Chittagong,Bangladesh.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>Enter the correct information in the blanks below.Give Proper explanation of the project in place of the project.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && <Alert severity="success">Information send Successfully ! Thank you..</Alert>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
