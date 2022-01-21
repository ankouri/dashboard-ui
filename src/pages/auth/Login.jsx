import React,{useState} from "react";
import "./login.css";
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  InputAdornment,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import {
  LockTwoTone,
  PersonTwoTone,
  VisibilityTwoTone,
} from "@material-ui/icons";
import Register from "./Register";
import { useHistory } from "react-router";
export default function Login() {
    const [register, setRegister]= useState(false);
    const history = useHistory();
    const handleLogin = (e)=>{
        e.preventDefault();
        history.push('/dashboard');
    }
  return (
    <div className="loginwrapper">
      {
          register ?  <Register register={register} setRegister={setRegister}/>
          :<Card>
          <CardContent className="formwrapper">
          <Typography component="h4" className="titlelogin">
             WELCOME AGAIN : LOGIN
            </Typography>
            <form>
              <FormControl fullWidth className="formcontrol">
                <TextField
                  required
                  id="email"
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"  className="listitemicon">
                        <PersonTwoTone />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl fullWidth className="formcontrol">
                <TextField
                  required
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"  className="listitemicon">
                        <LockTwoTone />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          aria-label="toggle password visibility"
                          onClick={() => {}}
                        >
                          <VisibilityTwoTone />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Button type="submit" onClick={handleLogin} className="btnsubmit" fullWidth >
                  Login
              </Button>
            </form>
            <div className="navigate"> You don't have an account? <b onClick={()=> setRegister(!register)}>Create One</b></div>
          </CardContent>
        </Card>
      }
    </div>
  );
}
