import React, { useContext } from 'react'
import { HooksProvider } from '../shared/contexts/HooksContext'
import { AuthContext } from '../shared/contexts/AuthContext'
// import { PostProvider } from '../shared/contexts/PostContext'

import { 
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Movie } from '../pages/Movie'

export const AppRoutes = () => {

  const { user } = useContext(AuthContext)

    return (
        <HooksProvider>
          {/* <PostProvider> */}
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/movie/:id' element={!user ? <Navigate to='/login' /> : <Movie/>} />
                  <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
                  <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
                  <Route path='*' element={<Home/>} />

              </Routes>
            {/* </PostProvider> */}
        </HooksProvider>
    )
}
