import emailjs from '@emailjs/browser'
import styles from './Modal.module.css'
import { useModal } from '../ModalProvider/ModalProvider';
import { useEffect, useState } from 'react';

export const Modal = () => {
    const { setModal } = useModal();
    const [scrolY, setScrolY ] = useState(0);

    const closeBtnHandler = () => {
        document.body.style.overflow = 'auto';
        setModal(false);
        
    }

    useEffect(() => {
        setScrolY(window.scrollY)
        document.body.style.overflow = 'hidden'
    } , [])

    const sendEmail = async (e) => {
        e.preventDefault();

        const name =  e.target.user_name.value;
        const phone = e.target.user_phone.value;
        const email = e.target.user_email.value;
        
        try {
          await emailjs.send('service_2lih1yk', 'template_m59evf9',{name, phone, email} , 'cGNLhS6ftscbKqIh8');
        } catch (error) {
          console.error('Failed to send email:', error);
        }
      };
    return(
        <div style={{top: scrolY + 'px'}} className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div onClick={closeBtnHandler} className={styles.closeBtn}></div>
                <div className={styles.descritionBlock}>
                    <strong className={styles.titleModal}> Запишитесь на приём онлайн</strong>
                    <p className={styles.descritionModal}> Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>   
                </div>
                <div className={styles.form}>
                    <form onSubmit={(e) => sendEmail(e)}>
                        <input className={styles.inputText} type='text' placeholder='ФИО' name='user_name'/>
                        <input className={styles.inputText} type='phone' placeholder='Номер телефона' name='user_phone'/>
                        <input className={styles.inputText} type='email' placeholder='Электронная почта' name='user_email'/>
                        <input className={styles.sendBtn} type='submit' value="Записаться"/>
                    </form>
                </div>
            </div>
        </div>
    )
}