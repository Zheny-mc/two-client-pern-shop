import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from '../index';
import { Card } from 'react-bootstrap';

export const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <div className='row d-flex'>
            {device.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="col-lg-3 p-3" 
                    onClick={ () => device.setSelectedBrand(brand) }    
                    border={ brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >   
                    {brand.name}
                </Card>
            )}
        </div>
    );
});