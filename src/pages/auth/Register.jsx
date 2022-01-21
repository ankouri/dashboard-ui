import React from 'react';
import './register.css';
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
    EmailTwoTone,
    PersonTwoTone,
    VisibilityTwoTone,
  } from "@material-ui/icons";

export default function Register({register, setRegister}) {
    return (
        <div>
           <Card>
        <CardContent className="formwrapper">
        <Typography component="h4" className="titlelogin">
           WELCOME AGAIN : REGISTER
          </Typography>
          <form>
            <FormControl fullWidth className="formcontrol">
              <TextField
                required
                id="username"
                label="Username"
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
                id="email"
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"  className="listitemicon">
                      <EmailTwoTone />
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
            <Button type="submit" className="btnsubmit" fullWidth >
                Login
            </Button>
          </form>
          <div className="navigate"> You don't have an account? <b onClick={()=> setRegister(!register)}>Create One</b></div>
        </CardContent>
      </Card>
        </div>
    )
}
