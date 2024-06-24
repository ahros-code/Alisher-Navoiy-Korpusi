import React from 'react';
import css from './SingleWorkComponent.module.css';
import { Link } from 'react-router-dom';
import eyeIcon from '../../assets/images/eye.svg';

const SingleWorkComponent = ({ title, fromYear, toYear, pdf, className }) => {
    return (
        <tr className={`${css.wrapper} ${className}`}>
            <td className={`${css.worksDataItem} ${css.title}`}>{title}</td>
            <td className={css.worksDataItem}>{fromYear} - {toYear} yillar</td>
            <td className={css.worksDataItem}>
                <Link to={pdf}>
                    <img src={eyeIcon} alt="eye icon" />
                </Link>
            </td>
        </tr>
    );
}

export default SingleWorkComponent;
