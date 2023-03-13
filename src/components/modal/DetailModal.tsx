import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

enum Action {
    ONMOUSEHOVER = 1,
    ONMOUSEOUT = 2,
}
const DetailModal = (props: any) => {

    const toolTip = useRef<string>('Press X, ESC or anywhere outside modal to close');
    // Handles close on Escape key press
    const closeOnEscKeyDown = (e: any) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }

    const updateToolTip = (actionType: Action) => {

        if (actionType === Action.ONMOUSEHOVER) {
            toolTip.current = 'Press X, ESC or anywhere outside modal to close';
        }
        else {
            toolTip.current = '';
        }
    }
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscKeyDown);
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscKeyDown);
        }
    }, []);

    useEffect(() => {
    }, [toolTip]);
    // Handles case when modal is not to be displayed
    if (!props.display) {
        return null;
    }
    return (
        <div className={styles.modal} onClick={props.onClose} title={toolTip.current} onMouseEnter={(e) => updateToolTip(Action.ONMOUSEHOVER)} onMouseLeave={(e) => updateToolTip(Action.ONMOUSEOUT)}>
            <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalheader}>
                    <h3 className={styles.modaltitle}> Details of {props.data.name}</h3>
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={props.onClose} />
                </div>
                <div className={styles.modalbody}>
                    <div className={styles.css_tr}>
                        <div className={styles.css_th}>Address</div>
                        <div className={styles.css_td}>{props.data.address.suite},{props.data.address.street}, {props.data.address.city}, {props.data.address.zipcode}</div>
                    </div>
                    <div className={styles.css_tr}>
                        <div className={styles.css_th}>Phone</div>
                        <div className={styles.css_td}>{props.data.phone}</div>
                    </div>
                    <div className={styles.css_tr}>
                        <div className={styles.css_th}>Website</div>
                        <div className={styles.css_td}>{props.data.website}</div>
                    </div>
                </div>
                <div className={styles.modalfooter}>
                    <button className={styles.closebutton} onClick={props.onClose} >Close</button>
                </div>
            </div>
        </div>
    );
}

export default DetailModal;
