import { useContext } from 'react';
import { useRouter } from 'next/navigation'
import { AppContext } from '@/context/app.context'

export default function useHeaderHook() {
    const router = useRouter()
    const { state, dispatch } = useContext(AppContext);
    
    const logout = async () => {
        dispatch({ type: 'USER_LOGOUT' })
        router.push('/login')
    }

    return  {
        state,
        logout,
        router
    }
}