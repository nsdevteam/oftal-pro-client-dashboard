import { ChangeEvent, FC, useEffect } from 'react';
import {
    Box,
    Typography,
} from '../../elements';
type PaymentsFrameProps = {
    closeForm: () => void;
    paymentsFrameId: string | null;
}
const PaymentsFrame = ({ closeForm, paymentsFrameId }: PaymentsFrameProps) => {
    return (

        <Box
            inset="0"
            bg="#0003"
            display="flex"
            position="fixed"
            onClick={closeForm}
            alignItems="center"
            p={['1rem', '2rem']}
            justifyContent="center"
            className='order-form'
        >
            <Box
                bg="white"
                top="2.5rem"
                width="3rem"
                height="3rem"
                right="3.5rem"
                display="flex"
                cursor="pointer"
                position="absolute"
                alignItems="center"
                onClick={closeForm}
                borderRadius="0.5rem"
                alignSelf="flex-start"
                justifyContent="center"
                border="1px solid #0002"
                nHover={{ borderColor: '#0005' }}
                zIndex={20}
            >
                <Box fontSize="2rem" transform="scaleY(0.8)">
                    X
                </Box>
            </Box>
            <Box
                py="XL"
                bg="#fff"
                gap="3rem"
                width="100%"
                height="100%"
                display="flex"
                overflowY="auto"
                borderRadius="1rem"
                flexDirection="column"
                px={['1rem', '1rem', '4rem']}
                onClick={(e) => e.stopPropagation()}
                className='payments-frame-content'
            >
                <Typography
                    className='page-title'
                    mt={"20px"}
                >
                    Efectuar Pagamento
                </Typography>
                <Box height={"100%"} width={"100%"}>
                   {paymentsFrameId && <iframe height={"90%"} width={"100%"} src={`https://cerpagamentonline.emis.co.ao/online-payment-gateway/webframe?token=${paymentsFrameId}`}></iframe>}
                </Box>
            </Box>
        </Box>

    );
};

export default PaymentsFrame;
