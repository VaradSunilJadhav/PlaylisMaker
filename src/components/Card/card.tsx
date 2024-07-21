import React from 'react';
import styles from './card.module.scss';

interface SongData {
    id: Number;
    songName: string;
    artists: string;
    duration: string;
}

interface CardProps {
    songData: SongData;
    onDeleteButtonClick: (data: { id: string; }) => void;
}

const Card: React.FC<CardProps> = ({ songData, onDeleteButtonClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.id)
        onDeleteButtonClick({ id: event.currentTarget.id });
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>{songData.songName}</div>
                <div className={styles.middle}>
                    <div className={styles.artists}>{songData.artists}</div>
                    <div className={styles.duration}>{songData.duration}</div>
                </div>
                <div className={styles.deleteIcon}>
                    <div id={songData.id.toString()} className={styles.icon} onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                <g transform="scale(10.66667,10.66667)">
                                    <path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.70313,15h11.86328l1.70313,-15z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;