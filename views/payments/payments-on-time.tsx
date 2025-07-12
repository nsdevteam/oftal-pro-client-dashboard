import { useEffect, useState, memo, useCallback } from 'react';
import {
    Box,
    Typography,
    Input
} from '../../elements';
import styles from '../../styles/payments/payments.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import toast from 'react-hot-toast';
import { formatMoney } from '../../utils';


const PhoneInput = memo(({ phoneNumber, onChange }: any) => {
    return (
        <input name='user-phone-number' value={phoneNumber} onChange={onChange} placeholder='Seu número de telefone' required className={styles?.phoneNumberInput} />
    )
})

type PaymentsOnTimeProps = {
    closeForm: (successOnPayment?:boolean) => void;
    data: {
        amount: number;
        orderId: string;
        clientId: string;
    }
}
const PaymentsOnTime = ({ closeForm, data }: PaymentsOnTimeProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(true);
    const [isLoadingPaymentOnTime, setIsLoadingPaymentOnTime] = useState<boolean>(false);
    const [index, setIndex] = useState(0);
    const phoneNumberRegExp = /^[0-9]{9}$/;
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);

    const messages = [
        "1. Insere o teu número do multicaixa express.",
        "2. Abrir o aplicativo no seu telemóvel ou celular!",
        "3. Vai em *Operações em Curso* e Faça o Pagamento.",
        "✅ Prontos o seu pedido será analisado e enviado em breve."
    ];


    const submit = async () => {
        //Verify Input
        if (!phoneNumberRegExp.test(phoneNumber)) {
            setIsFormValid(false);
            return;
        } else {
            setIsLoadingPaymentOnTime(true);
            await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/payments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount: data?.amount,
                    phoneNumber,
                    clientId: data?.clientId,
                    orderId: data?.orderId
                })
            })
                .then((res) => res.json())
                .then(res => {
                    console.log("Payment Response ::: ", res);
                    if (res?.error) {
                        //Alert user of failure on payment
                        toast.error("Ocorreu um problema, não foi possível concluir o seu pagamento.");
                    } else {
                        toast.success("O seu pagamento foi efectuado com sucesso !");
                        closeForm(true);   
                    }

                })
                .catch(error => {
                    console.error("Failed to execute payment ::: ", error);
                }).finally(() => {
                    setTimeout(() => {
                        setIsLoadingPaymentOnTime(false);
                    }, 2000)
                })

        }
    }

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);

        if (!phoneNumberRegExp.test(value)) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, []);

    return (

        <div
            onClick={()=>closeForm(false)}
            className={styles?.paymentsOnTimeModalWrapper}
        >
            <Box
                className={styles?.paymentsOnTimeModalCloseBtn}
                onClick={()=>closeForm(false)}

            >
                <Box fontSize="2rem" transform="scaleY(0.8)">
                    X
                </Box>
            </Box>
            <div

                onClick={(e) => e.stopPropagation()}
                className={styles?.paymentsOnTimeModalContent}
            >
                <Typography
                    className='page-title'
                    mt={"20px"}
                >
                    Efectuar Pagamento
                </Typography>
                <ul className={styles?.dynamicList}>
                    <li
                        key={index}
                        className={styles.dynamicListItem}
                        dangerouslySetInnerHTML={{ __html: messages[index] }}
                    />
                </ul>
                <h6 className={styles?.totalHeader}>Kz {formatMoney(data?.amount)}<br/><span>{data?.orderId}</span></h6>
                <div>
                    <div className={styles?.wrapper}>
                        <form className={styles?.formWrapper}>
                            <div className={`${styles?.col} ${styles?.content}`}>
                                <div className={styles?.topInfo}>
                                    <span className={styles?.artwork}></span>
                                </div>
                                <div className={styles?.inputWrapper}>
                                    <PhoneInput phoneNumber={phoneNumber} onChange={handleOnChange} />
                                    {!isFormValid && <span className={styles?.errorMessage}>Por favor inserir um número de telefone válido Ex. 923164000</span>}
                                </div>
                                <div className={styles?.btnWrapper}>
                                    {!isLoadingPaymentOnTime && <button disabled={!isFormValid ? true : false} type='button' onClick={submit} className={styles?.submitBtn}>Pagar</button>}
                                    {isLoadingPaymentOnTime && <CircularProgress size={30} style={{ color: "orange" }} />}
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default memo(PaymentsOnTime);
