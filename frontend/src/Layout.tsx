import React from "react"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Connect } from "./components/Connect";
import Account from "./components/Account";
import ChatWindow from "./components/ChatWindow";
import FriendList from "./components/FriendList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Layout = ({ children }: any): JSX.Element => {
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={6}>
                <Item>
                    <Account/>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <Connect/>
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item>
                    <FriendList/>
                </Item>
            </Grid>
            <Grid item xs={7}>
                <Item>
                    <ChatWindow/>
                </Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Right panel</Item>
            </Grid>
        </Grid>
    )
}

export default Layout
