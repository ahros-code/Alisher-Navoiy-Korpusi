import styles from './JanrSingleData.module.css';
import {useLocation} from "react-router-dom";
import data from '../JANRLAR_MOCK_DATA/data.js'
import {capitalize, Modal} from "@mui/material";
import {forwardRef, useState} from "react";
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/base/Button';

const JanrSingleData = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const janr = 'query.get("janr");'
  const id =' query.get("id");'

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const Backdrop = forwardRef((props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    });

    Backdrop.propTypes = {
        open: PropTypes.bool,
    };

    const blue = {
        200: '#99CCFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0066CC',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

    const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
    };

    const ModalContent = styled('div')(
        ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
    );

    const TriggerButton = styled(Button)(
        ({ theme }) => css`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 4px 32px;
    border-radius: 50px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
    );
  return (
      <div className={styles.janrSingleDataWrapper}>
          <h3 className={styles.janrSingleDataTitle}>
              {`${id} - ${capitalize(janr.replace("lar", ""))}`}
          </h3>
          <p className={styles.janrSingleDataText}>
              {data.filter(item => item.id == id).map(singleData => (singleData.data))}
          </p>
          <div className={styles.batafsilBtn}>
              <TriggerButton onClick={handleOpen}>Open modal</TriggerButton>
              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{backdrop: StyledBackdrop}}
              >
                  <Fade in={open}>
                      <ModalContent sx={style}>
                          <h2 id="transition-modal-title" className="modal-title">
                              Text in a child modal
                          </h2>
                          <p id="transition-modal-description" className="modal-description">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          </p>
                      </ModalContent>
                  </Fade>
              </Modal>
          </div>
      </div>
  )
}

export default JanrSingleData;