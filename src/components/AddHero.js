import { BiCalendarPlus } from "react-icons/bi";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: "#141414",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));


const AddHero = ({ onSendHero, lastId }) => {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const clearData = {
      name: '',
      alias: '',
      birthDate: '',
      notes: ''
    };

    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    function formDataPublish() {
      const heroInfo = {
        id: lastId + 1,
        name: formData.name,
        alias: formData.alias,
        birthDate: formData.birthDate,
        dateRegistered: Date.toLocaleString(),
        notes: formData.notes
      }
      onSendHero(heroInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    };

    const body = (
      <div  className={classes.paper}>
        <form className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <TextField label="Name" type="text" id="name"
                    onChange={(event) => {setFormData({...formData, name: event.target.value})}}
                    value={formData.name}/>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <TextField label="Alias" type="text" id="alias"
                    onChange={(event) => {setFormData({...formData, alias: event.target.value})}}
                    value={formData.alias}/>
            </div>
            <pre>


            </pre>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <InputLabel htmlFor="birthDate" className="sr-only">Birth Date</InputLabel>
                <Input type="date" 
                    onChange={(event) => {setFormData({...formData, birthDate: event.target.value})}}
                    value={formData.birthDate}
                    name="birthDate" 
                    id="birthDate" 
                    color="secondary"/>
            </div>
  
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <TextField
              id="standard-multiline-flexible"
              label="Notes"
              multiline
              maxRows={4}
              onChange={(event) => {setFormData({...formData, notes: event.target.value})}}
              value={formData.notes}
            />
            </div>

            <pre>


            </pre>
    
            <div className="pt-5">
              <div className="flex justify-end">
                <Button variant="outlined" color="secondary" type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        
      </div>
    );
    
    return (
        <div>
          <Button variant="outlined" color="secondary" onClick={handleOpen} className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
            <div><BiCalendarPlus className="inline-block align-text-top" /> Add New</div>
          </Button>
        
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
       
      </div>
    );
}

export default AddHero;