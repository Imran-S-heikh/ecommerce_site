import React from 'react'
import UserView from './UserView.component';
import { userState } from '../recoil/user/user.atoms';
import { alertSnackbarState, loaderState } from '../recoil/atoms';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { updateUser } from '../request/user.requset';
import { checkStatus } from '../utils';


export default function Profile() {

    const [user,setUser] = useRecoilState(userState);
    const setAlert = useSetRecoilState(alertSnackbarState);
    const setLoader = useSetRecoilState(loaderState);

    

    const handleupdate = async(updatedUser)=>{
        setLoader(true)
        const response = await updateUser(updatedUser,user._id);
        setLoader(false)
        if(checkStatus(response)){
            setAlert({open: true,message: 'User Updated Successfully',severity: 'success'})

        }else{
            setAlert({open: true,message: response.data.message,severity: 'error'})
        }
    }

    return (
       <div className="">
           <UserView user={user} setUser={setUser} uploadHandler={handleupdate} />
       </div>
    )
}
