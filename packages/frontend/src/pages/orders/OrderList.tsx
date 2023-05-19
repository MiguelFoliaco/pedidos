import { useEffect, useState } from 'react';
import orderListData from '../../../data/orders.json';
import { HomeLayout } from '../../components/layouts/Home/Index';
import { Alert, Grid, Tooltip, Typography } from '@mui/material';
import { ButtonIcon } from '../../components/styled/Button/Button';
import { ArrowRight } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';


export const OrderList = () => {
    const [orderList, setorderList] = useState(orderListData)
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let storeId = params?.storeId;
        if (storeId !== undefined) {
            setorderList(orderListData.filter(e => e['store-id'] === parseInt(storeId || '0')))
        }
        else {
            navigate('/');
        }
    }, [])

    return (
        <HomeLayout
            modalChildren={
                <Grid sx={{ height: '100%'}}>

                </Grid>
            }

        >
            {
                orderList.length === 0 ?
                    <div style={{ margin: '30vh 10px' }}>
                        <Alert severity='warning'>
                            Este cliente aun no tiene pedidos
                        </Alert>
                    </div>
                    :
                    orderList.map((e, id) => <div className='item-store' key={id}>
                        <div className='item-header'>
                            {/* <Store color='primary' fontSize='large' /> */}
                            <Typography color='primary.main' variant='h6'>{e.name}</Typography>
                        </div>
                        <div className='item-footer'>
                            <div className='data'>
                            </div>
                            <div className='left-footer'>
                            </div>
                        </div>
                    </div>)
            }
        </HomeLayout>
    )
}
