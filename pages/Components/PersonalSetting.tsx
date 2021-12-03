import { Button } from '@mui/material';
import React from 'react';


const PersonalSetting: React.FC = function () {




    return (
        
        <div>
            <Button color="secondary">
                Update Information
            </Button>
            <div>
                <Button color="success">
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