import React, { useEffect, useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [Data, setData] = useState([])
    const navigate = useNavigate();

    const deleteData = (id) => {
        const temp = Data
        const data = temp.filter((items) => items.id !== id)
        setData(data)
        localStorage.setItem('Data', JSON.stringify(data))

    }
    const editData = (value,id) => {
        navigate('./edit', { state: { value, id } })
    }

    useEffect(() => {
        const mydata = JSON.parse(localStorage.getItem('Data'))
        if(mydata){
            setData(mydata);
        }else{
            alert(`Local Storage is Empty` );
        }

    }, [])
    return (
        <> 
            <div className='table-main'>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Address</th>
                            <th colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data ? Data.map((value, index) => {

                            return <>
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.number}</td>
                                    <td>{value.address}</td>
                                    <td><button className='delete-btn'
                                        onClick={() => deleteData(value.id)}>
                                        Delete
                                    </button></td>
                                    <td><button className='edit-btn'
                                        onClick={() => editData(value,index)}>
                                        Edit
                                    </button></td>
                                </tr>
                            </>
                        }) : 'data not found'}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Home;
