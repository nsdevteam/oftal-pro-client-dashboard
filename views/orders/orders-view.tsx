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
import { LogoSVG } from '../../components/svg';
import { WithUid } from 'burnbase/firestore';
import { IOrder } from '../../interface';
import { COLOR_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';


type OrderViewProps = {
    closeForm: () => void;
    data: WithUid<IOrder>;
    requestPayment: () => void;
}
const OrdersView = ({ closeForm, data, requestPayment }: OrderViewProps) => {
    const [isLoadingPaymentFrame, setIsLoadingPaymentFrame] = useState<boolean>(false);
    useEffect(() => {
        console.log("Data Information On Order ::: ", data);
    }, [])

    const handleRequestPayment = () => {
        setIsLoadingPaymentFrame(true);
        requestPayment && requestPayment();
        setTimeout(() => {
            setIsLoadingPaymentFrame(false);
        }, 3500)
    }
    return (

        <div
            onClick={closeForm}
            className={"modal-wrapper"}
        >
            <Box
                className={"modal-close-btn"}
                onClick={closeForm}

            >
                <Box fontSize="2rem" transform="scaleY(0.8)">
                    X
                </Box>
            </Box>
            <div

                onClick={(e) => e.stopPropagation()}
                className={"modal-content"}
            >
                <Typography
                    className='page-title'
                    mt={"20px"}
                >
                    Visualizar Pedido
                </Typography>
                <div className='page-a4-wrapper'>
                    <div className='page-a4-content'>
                        <div className='page-a4-header'>
                            {/* <img src="" className='page-a4-logo' alt='company-logo' /> */}
                            <LogoSVG className='page-a4-logo' width={200} height={30} />
                            <h4 className='page-a4-block-title'>Pedido N°: <span>{data?.id}</span></h4>
                            <h4 className='page-a4-block-title'>Data: <span>{new Date(data?.createdAt).toLocaleDateString()}</span></h4>
                            <h4 className='page-a4-block-title'>Total: <span>Kz {formatMoney(data?.total)}</span></h4>
                            {data?.payment?.isPaid === true && <h4 className='page-a4-block-title'>Data de Pagamento: <span>{new Date(data?.payment?.createdDate).toLocaleDateString()}</span></h4>}
                            {data?.payment?.isPaid === true && <h4 className='page-a4-block-title paid-status'>Pago</h4>}
                            {!data?.payment?.isPaid && <h4 className='page-a4-block-title not-paid-status'>Não Pago</h4>}
                            {!data?.payment?.isPaid && !isLoadingPaymentFrame && <button className='page-a4-action-btn' onClick={handleRequestPayment}>Efectuar Pagamento</button>}
                            {!data?.payment?.isPaid && isLoadingPaymentFrame && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "150px", width: "100%", margin: "10px 0" }}>
                                <CircularProgress size={20} style={{ color: "orange" }} />
                            </div>}


                        </div>
                        <div className='page-a4-body'>
                            <hr className='page-a4-seperator' />
                            {/*Client Information */}
                            <div className='page-a4-block-info'>
                                <h4 className='page-a4-block-title'>Cliente</h4>
                                <p className='page-a4-block-p'>{data?.clientId}</p>
                            </div>
                            <hr className='page-a4-seperator' />
                            {/*Order Information */}
                            <div className='page-a4-block-info'>
                                <h4 className='page-a4-block-title'>Encomenda</h4>
                                <p className='page-a4-block-p'></p>
                                <h6 className='page-a4-sub-title'>Tipo</h6>
                                <p className='page-a4-block-p'>{TYPE_LEGEND[data?.type]}</p>
                                <h6 className='page-a4-sub-title'>Tratamento</h6>
                                <p className='page-a4-block-p'>{data?.treatment}</p>
                                <h6 className='page-a4-sub-title'>Cor</h6>
                                <p className='page-a4-block-p'>{COLOR_LEGEND[data?.color]}</p>
                                <h6 className='page-a4-sub-title'>Índice de refracção</h6>
                                <p className='page-a4-block-p'>{data?.refractiveIndex}</p>
                                <h6 className='page-a4-sub-title'>Diâmetro</h6>
                                <p className='page-a4-block-p'>{data?.diameter}</p>
                                <h6 className='page-a4-sub-title'>Coloração</h6>
                                <p className='page-a4-block-p'>{data?.coloring === true ? "Sim" : "Não"}</p>
                                <h6 className='page-a4-sub-title'>Prisma</h6>
                                <p className='page-a4-block-p'>{data?.prisma === true ? "Sim" : "Não"}</p>
                                <h6 className='page-a4-sub-title'>Altura Mínima</h6>
                                <p className='page-a4-block-p'>{data?.minimumHeight}</p>
                                <hr className='page-a4-seperator' />

                                <h6 className='page-a4-sub-title'>Olho Esquerdo</h6>
                                <p className='page-a4-block-p'>
                                    <span className='label'>Esférico: <span className='value'>{data?.leftEye?.spherical || "N/D"}</span> </span>
                                    <span className='label'>Cilindro: <span className='value'>{data?.leftEye?.cylinder || "N/D"}</span> </span>
                                    <span className='label'>Eixo: <span className='value'>{data?.leftEye?.axis || "N/D"}</span> </span>
                                    <span className='label'>Adição: <span className='value'>{data?.leftEye?.addition || "N/D"}</span></span>
                                </p>


                                <h6 className='page-a4-sub-title'>Olho Direito</h6>
                                <p className='page-a4-block-p'>
                                    <span className='label'>Esférico: <span className='value'>{data?.rightEye?.spherical || "N/D"}</span> </span>
                                    <span className='label'>Cilindro: <span className='value'>{data?.rightEye?.cylinder || "N/D"}</span> </span>
                                    <span className='label'>Eixo: <span className='value'>{data?.rightEye?.axis || "N/D"}</span> </span>
                                    <span className='label'>Adição: <span className='value'>{data?.rightEye?.addition || "N/D"}</span></span>
                                </p>




                                <h6 className='page-a4-sub-title'>Paciente</h6>
                                <p className='page-a4-block-p'>{data?.ref}</p>
                                <h6 className='page-a4-sub-title'>Receita</h6>
                                <p className='page-a4-block-p'>
                                    {/*@ts-ignore*/}
                                    {data?.recipe?.length > 0 ? <span onClick={() => downloadFirebaseFile(data?.recipe || '')} className='c-download-file-btn'><span className='link'>Descarregar <span className='icon'></span></span></span> : "N/D"}
                                </p>
                                <h6 className='page-a4-sub-title'>Precal</h6>
                                <p className='page-a4-block-p'>
                                    {/*@ts-ignore*/}
                                    {data?.precal?.length > 0 ? <span onClick={() => downloadFirebaseFile(data?.precal || '')} className='c-download-file-btn'><span className='link'>Descarregar <span className='icon'></span></span></span> : "N/D"}
                                </p>
                                <h6 className='page-a4-sub-title'>Observações</h6>
                                <p className='page-a4-block-p'>{data?.observation || "N/D"}</p>
                            </div>
                        </div>
                        {/*Company Information */}
                        <div className='page-a4-footer'>
                            <p className='page-a4-block-p'>Processado por Suditama</p>
                            <p className='page-a4-block-p'>Luanda - Angola</p>
                            <p className='page-a4-block-p'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default memo(OrdersView);
