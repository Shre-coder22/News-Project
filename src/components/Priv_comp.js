import React from 'react'
import {Navigate , Outlet} from 'react-router-dom'

export default function Priv_comp() {
    const auth =localStorage.getItem('user')
    return auth? <Outlet/> : <Navigate to ="/signup"/>
}
