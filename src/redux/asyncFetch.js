import axios from "axios";
import {getUserInfoActionCreator} from "./ProfilePageRedux/profilePageReducer";
import {getAllUsersInfoActionCreator,} from "./FriendsPageRedux/friendsPageReducer";
// todo error handler
export const fetchUserInfo = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/userInfo?id=${userIdParam}`)
        dispatch(getUserInfoActionCreator(response.data))
    }
}

export const fetchAllUsersInfo = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/users')
        dispatch(getAllUsersInfoActionCreator(response.data))
    }
}
