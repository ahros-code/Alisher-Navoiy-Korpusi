import styles from './JanrSingleData.module.css';
import { Modal } from "@mui/material";
import { forwardRef, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/base/Button';
import { SecondaryJanrContext } from "../../context/SecondaryJanrContext.jsx";
import arrow from '../../assets/images/arrow-narrow-right-icon.svg'
import LineWithHover from "../LineWithHover/LineWithHover.jsx";

const JanrSingleData = () => {
    const [hoveredWord, setHoveredWord] = useState(null);
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
            box-shadow: 0 4px 12px ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
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

    const { secondarySelectedGenre, setSecondarySelectedGenre } = useContext(SecondaryJanrContext);
    const [isLoading, setIsLoading] = useState(false);
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        if (!secondarySelectedGenre) {
            setMyData(null);
            return;
        }

        setIsLoading(true); // Set loading state to true on data fetch start
        fetch(`https://biryuzikki.uz/api/v1/genres/${secondarySelectedGenre.id}`)
            .then(response => response.json())
            .then(data => {
                setMyData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, [secondarySelectedGenre]);

    if (!secondarySelectedGenre || !myData || !myData.lines) {
        return <div className={styles.janrSingleDataWrapper}>No data available</div>;
    }

    const metadata = Object.entries(myData.metadata);

    return (
        <div className={styles.janrSingleDataWrapper}>
            <h3 className={styles.janrSingleDataTitle}>
                {`${myData.genre_detail_number} - ${myData.genre_name}`}
            </h3>
            <p className={styles.janrSingleDataText}>
                {!isLoading ? myData.lines.map((line) => {
                    // Get word explanations related to this line
                    const wordExplanationsForLine = myData.word_explanations.filter(
                        (we) => we.genre_detail_line.includes(line.id))
                    return (
                        <LineWithHover
                            key={line.id}
                            text={line.text}
                            wordExplanations={wordExplanationsForLine}
                        />
                    )
                }) : <>Loading...</>}
            </p>
            <div className={styles.botWrapper}>
                <button className={styles.botBtns}>
                    <div className={styles.leftIcon}>
                        <img src={arrow} alt={'arrow'} />
                    </div>
                </button>
                <div className={styles.center}>
                    <div className={styles.batafsilBtn}>
                        <TriggerButton onClick={handleOpen}>Batafsil</TriggerButton>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Fade in={open}>
                                <ModalContent sx={style} style={{
                                    maxWidth: '871px',
                                    width: '100%',
                                    overflowY: 'auto',
                                    maxHeight: '80vh'
                                }}>
                                    <h3 className={styles.title}>Metama’lumot</h3>
                                    <ul className={styles.list}></ul>
                                    {metadata.map(([key, value]) => (
                                        <li className={styles.item}>
                                            <div className={styles.left}>
                                                <span>{key}</span>
                                            </div>
                                            <div className={styles.right}>
                                                <span>{value}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ModalContent>
                            </Fade>
                        </Modal>
                    </div>
                </div>
                <button className={styles.botBtns}>
                    <div className={styles.rightIcon}>
                        <img src={arrow} alt={'arrow'} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default JanrSingleData;
