import { ReactNode, useState } from 'react'
import { Header } from './Header';
import { Add, Remove } from '@mui/icons-material';
import { ButtonIcon } from '../../styled/Button/Button';
import { Grid, Modal } from '@mui/material';

type props = {
    children: ReactNode;
    modalChildren?: ReactNode;
    heightModal?: string;
}
export const HomeLayout = ({ children, modalChildren, heightModal }: props) => {
    const [modal, setModal] = useState(false)
    return (
        <>
            {modalChildren &&
                <div
                    className='modal-sheet'
                    style={{
                        height: heightModal,
                        transform: modal ? 'translateY(0%)' : 'translateY(100%)'
                    }}
                >
                    <>
                        {modalChildren}
                    </>
                </div>
            }
            <Header placeholderSearch='Buscar Tienda' />
            {children}
            {
                modalChildren &&

                <ButtonIcon
                    onClick={() => setModal(!modal)}
                    variant='contained' color={modal ? 'error' : 'primary'} sx={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 155 }}>
                    {
                        modal ?
                            <Remove />
                            :
                            <Add />
                    }
                </ButtonIcon>
            }
        </>
    )
}
