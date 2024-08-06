import { useThemeParams } from '@telegram-apps/sdk-react';

import { List } from '@telegram-apps/telegram-ui';
import { DisplayData } from '@/components/DisplayData/DisplayData.tsx';
import './Balance.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { type FC, useEffect, useMemo } from 'react';

export const Balance: FC = () => {
    const balance: number = 100.0
    const { initDataRaw, initData } = retrieveLaunchParams();
    function handleClick(){
        console.log(initDataRaw, 'Raw')


        fetch('http://127.0.0.1:8000/dj-rest-auth/login/', {
            method: 'POST',
            headers: {
                Authorization: `tma ${initDataRaw}`
            },
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <div className='balance-page__wrapper'>
            <p className='subtitle'>Баланс</p>
            <p className='balance'>{balance}</p>
            <button onClick={handleClick}>ttttttttt</button>
        </div>
    );
};
