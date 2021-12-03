import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from './AuthContexts';


const PersonalSetting: React.FC = function () {

    const { currentUser } = useAuth();


    return (
        
        <div>
            <Button href = "../Components/UpdateInformation" color="secondary">
                Update Information
            </Button>
            <div>
                <Button href="../Components/ForgetPassword" color="success">
                    Reset Password
                </Button>
                <div>
                    <Button color="error">
                        Delete Accounts
                    </Button>
                </div>
            </div>
        </div>
        
        
        )

}


export default PersonalSetting