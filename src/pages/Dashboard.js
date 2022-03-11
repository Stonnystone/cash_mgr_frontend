import * as React from "react";
import { Card, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import { Title } from 'react-admin';
import { MonoLoginButton, MonoPaymentButton } from "../components/MonoButtons";


const Dashboard = (props) => {
    return (
        <div>
            <Title title="Dashboard" />
            <div>
                <span>Click the button to <MonoLoginButton/> </span> 
                <br/>
                <span>Click the button to <MonoPaymentButton/></span>
            </div>
          

            <CardActionArea>
                <Card>                    
                    <CardHeader title="Accounts" />
                    <CardContent>50</CardContent>
                </Card>
            </CardActionArea>

            <CardActionArea>
                <Card>                    
                    <CardHeader title="Balances" />
                    <CardContent>40</CardContent>
                </Card>
            </CardActionArea>
        </div>

    )
}

export default Dashboard