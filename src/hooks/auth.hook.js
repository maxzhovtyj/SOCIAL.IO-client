import {useState, useCallback, useEffect} from "react";
import axios from "axios";

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem('userData', JSON.stringify({token: jwtToken, userId: id}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }, [])

    useEffect(() => {
        try {
            const getUserInfo = async () => {
                const response = await axios.get(`/api/userInfo?id=${userId}`)
                setUserInfo(response.data)
            }
            if (userId) getUserInfo()
        } catch (e) {
            console.log(e)
        }
        const data = JSON.parse(localStorage.getItem('userData'))

        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login, token, userId])

    return {login, logout, token, userId}
}