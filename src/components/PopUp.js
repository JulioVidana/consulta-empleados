import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Controls from './controls/Controls'
const PopUp = (props) => {
  const {
    tieneTitle = false,
    title,
    children,
    openPopup,
    setOpenPopup,
    fullWidth,
    fullScreen,
    maxWidth,
    Transition } = props;

  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      fullScreen={fullScreen}
      open={openPopup}
      maxWidth={maxWidth || 'lg'}
      fullWidth={fullWidth}
      TransitionComponent={Transition}
    >

      {
        tieneTitle &&
        <DialogTitle sx={{ pt: 2, pb: 1 }}>
          <div style={{ display: 'flex' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Controls.ActionButton
              color="closeButton"
              onClick={() => { setOpenPopup(false) }}>
              <CloseIcon />
            </Controls.ActionButton>
          </div>
        </DialogTitle>
      }
      <DialogContent
        dividers={tieneTitle}
        sx={{ padding: 1 }}>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default PopUp
