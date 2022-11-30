import styles from './Modal.module.css';

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className={ isOpen ? styles.is_open : styles.modal} onClick={closeModal}>
        <div className={styles.container} onClick={handleModalContainerClick}>
            <button className={styles.close} onClick={closeModal}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal