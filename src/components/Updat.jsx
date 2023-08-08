import React, { useEffect, useState } from 'react';
import './update.css'
import { useLocation, useNavigate } from 'react-router-dom';
const Update = () => {
    const [StoredData, setStoredData] = useState([]);
    const [Data, setData] = useState({
        id: '',
        name: '',
        email: '',
        number: '',
        address: ''
    })

    const navigate = useNavigate();
    const location = useLocation();
    const passed = location.state;

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value

        })
    }

    const addData = (e) => {
        e.preventDefault();
        const newData = [...StoredData, Data]
        setStoredData(newData)
        localStorage.setItem('Data', JSON.stringify(newData))
        setData({
            id: '',
            name: '',
            email: '',
            number: '',
            address: ''
        })
         navigate('/')
    }

    useEffect(() => {
    const store = JSON.parse(localStorage.getItem('Data'));
        if (store) {
            setStoredData(store);
        }

    }, [])

    return (
        <div className='form-main-div'>
            <form className='update-form-main d-flexr' onSubmit={addData}>
                <h3>Update Here</h3>
                <input type="text"
                    placeholder='Enter ID'
                    name='id'
                    value={Data.id}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder='Enter Name'
                    name='name'
                    value={Data.name}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder='Enter Email'
                    name='email'
                    value={Data.email}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder='Enter Number'
                    name='number'
                    value={Data.number}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder='Enter Address'
                    name='address'
                    value={Data.address}
                    onChange={handleChange} />

                <input
                    type='submit'
                    className='btn'
                    value='Add'/>
            </form>
        </div>
    );
}

export default Update;
