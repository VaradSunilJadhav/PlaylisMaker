import React, { useState } from 'react';
import styles from './navbar.module.scss';

interface NavbarProps {
  onButtonClick: (data: { songName: string; artists: string; duration: string }) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  const [songName, setSongName] = useState('');
  const [artists, setArtists] = useState('');
  const [duration, setDuration] = useState('');

  const handleClick = () => {
    if (songName && artists && duration && songName !== '' && artists !== '' && duration !== '') {
      onButtonClick({ songName, artists, duration });
      setSongName('')
      setArtists('')
      setDuration('')
    }
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongName(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtists(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.appName}>
          <span>Playlist</span>
          <span>Maker</span>
        </div>
        <button className={styles.createButton} onClick={handleClick}>
          <span>CREATE +</span>
        </button>
      </div>
      <div className={styles.inputFields}>
        <span>Song Name:
          <input type="text" value={songName} onChange={handleChange1} /></span>
        <span>Artist Name:
          <input type="text" value={artists} onChange={handleChange2} /></span>
        <span>Duration:
          <input type="text" value={duration} onChange={handleChange3} /></span>
      </div>
    </>
  );
};

export default Navbar;
