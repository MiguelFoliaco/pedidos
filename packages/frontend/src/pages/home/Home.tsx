import { HomeLayout } from '../../components/layouts/Home/Index'
import { Store, ArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import storesData from '../../../data/store.json';
import { Grid, Tooltip, Typography } from '@mui/material';
import { ButtonIcon } from '../../components/styled/Button/Button';
import { useEffect, useState } from 'react';
import { useGlobal } from '../../hooks';
export const Home = () => {

    const { values: { searchTerm } } = useGlobal()
    const [stores, setStores] = useState(storesData)
    const navigate = useNavigate()
    const redirect = (id: number) => {
        navigate(`/store/${id}`);
    }

    useEffect(() => {
        if (searchTerm === '') {
            setStores(storesData);
        }
        else {
            const regExp = new RegExp(`${searchTerm.toLowerCase()}`)
            setStores(storesData.map(e => {
                if (regExp.test(e.name.toLowerCase())) return e;
                return []
            }).flat(1))
        }
    }, [searchTerm])


    return (
        <HomeLayout
            modalChildren={
                <Grid sx={{ height: '100%' }}>

                </Grid>
            }

        >
            {
                stores.map((e, id) => <div className='item-store' key={id} onClick={() => redirect(e.id)}>
                    <div className='item-header'>
                        <Store color='primary' fontSize='large' />
                        <Typography color='primary.main' variant='h6'>{e.name}</Typography>
                    </div>
                    <div className='item-footer'>
                        <div className='data'>
                            <p>Direccion: {e.address}</p>
                            <a href={`tel:${e.phone}`} style={{
                                color: 'rgba(44,55,255)'
                            }}>Phone: {e.phone}</a>
                            <p>Correo: {e.email || 'N/A'}</p>
                        </div>
                        <div className='left-footer'>
                            <Tooltip title='Tomar pedido'>
                                <ButtonIcon onClick={() => redirect(e.id)}>
                                    <ArrowRight sx={{ fontSize: '50px' }} />
                                </ButtonIcon>
                            </Tooltip>
                        </div>
                    </div>
                </div>)
            }
        </HomeLayout>

    )
}
