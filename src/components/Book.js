import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Book() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className = "nav-btn" variant="contained" color="primary" onClick={handleClickOpen}>
        Book Now
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogTitle id="form-dialog-title"> Want Hassle Free Service ??? </DialogTitle>

        <DialogContent>

          <DialogContentText> Just one step then, we will be happy to serve
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}  color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
