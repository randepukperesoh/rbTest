import emailjs from '@emailjs/browser'
import styles from './Modal.module.css'

export const Modal = () => {
    
    const sendEmail = async (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const name = formData.get('user_name');
        console.log(name)
        // try {
        //   await emailjs.send('service_2lih1yk', 'template_m59evf9', { user_name: name }, 'cGNLhS6ftscbKqIh8');
        // } catch (error) {
        //   console.error('Failed to send email:', error);
        // }
      };
    return(
        <div className={styles.modalWrapper}>
            <div className={styles.closeBtn}></div>
            <div className={styles.modal}>
                <div className={styles.descritionBlock}>
                    <strong className={styles.titleModal}> Запишитесь на приём онлайн</strong>
                    <p className={styles.descritionModal}> Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>   
                </div>
                <div className={styles.form}>
                    <form onSubmit={sendEmail}>
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