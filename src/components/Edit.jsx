import React, { useEffect, useState } from 'react';
import './update.css'
import { useLocation, useNavigate } from 'react-router-dom';
const Edit = () => {
    
    const [Data, setData] = useState({
        id: '',
        name: '',
        email: '',
        number: '',
        address: ''
    })

    const StoredData  = JSON.parse(localStorage.getItem('Data'))
    const navigate = useNavigate();
    const location = useLocation();
    const passed = location.state;
    console.log(passed,'passed')

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value

        })
    }

    const handleEdit =(e) =>{
        e.preventDefault();
       console.log('editing');
       StoredData.splice()

    }

   

    useEffect(() => {
        // setStoredData(passed.value)
        // console.log(passed.value)
        // console.log(StoredData)
        
        setData({
            ...passed.value
         })
      
    }, [])

    return (
        <div className='form-main-div'>
            <form className='update-form-main d-flexr' onSubmit={handleEdit}>
                <h3>Edit Here</h3>
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
                    value='Edit' />
            </form>
        </div>
    );
}

export default Edit;
