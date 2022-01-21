import React,{useState} from 'react';
import './home.css';
import { Grid } from '@material-ui/core';
import Sidebar from './../../components/sidebar/Sidebar';
export default function Home({ children }) {
    const [open, setOpen] = useState(true);
    return (
        <Grid container>
            <Sidebar open={open} setOpen={setOpen} />
            <div className={ open ? "Openrightside" : "Closedrightside" }>
            <div className="homewrapper">
     
                {  children }
            </div>
        </div>
        </Grid>


        
    )
}
