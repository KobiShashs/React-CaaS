import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import { Cancel, MailOutline, Send } from "@material-ui/icons";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">
			<Typography variant="h3" className="Headline"> <MailOutline/> Contact Us</Typography>
            
            <TextField label="Name" variant="outlined" className="TextBox"/>
            <br/> 
            
            <TextField label="Email" variant="outlined" type="email" className="TextBox"/>
            <br/>
            
            <TextField label="Message" variant="outlined" className="TextBox" />
            <br/>

            <FormControlLabel label="Send me promotional emails" control={<Checkbox/>}/>
            <br/>

            <ButtonGroup variant="contained" fullWidth>
                {/* <Button color="primary">Send</Button> */}
                {/* <Button color="secondary">Cancel</Button> */}
                <Button color="primary" startIcon={<Send/>} >Send</Button>
                <Button color="secondary" startIcon={<Cancel/>}>Cancel</Button>
            </ButtonGroup>
        </div>
    );
}

export default ContactUs;
