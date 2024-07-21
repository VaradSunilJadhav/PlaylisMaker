"use client"
import Card from "@/components/Card/card";
import styles from './page.module.scss'
import Navbar from "@/components/Navbar/navbar";
import { useState } from "react";
import styles2 from "@/components/Navbar/navbar.module.scss"

type Item = {
  id: Number;
  songName: string;
  artists: string;
  duration: string;
};

export default function Home() {
  const [songsList, SetsongsList] = useState<Item[]>([])
  const [currId, setcurrId] = useState(0)
  const addSong = (data: { songName: string; artists: string; duration: string }) => {
    const dict: Item = {
      id: currId,
      songName: data.songName,
      artists: data.artists,
      duration: data.duration,
    }
    setcurrId(currId + 1)
    SetsongsList([...songsList, dict])
  }

  const deleteSong = (data: { id: string }) => {
    const songId = parseInt(data.id, 10);
    SetsongsList(songsList.filter(song => song.id !== songId));
  };

  const sortSongs = () => {
    SetsongsList(songsList.slice().sort((a, b) => a.songName.localeCompare(b.songName)));
  }

  return (
    <>
      <div className={styles.page}>
        <Navbar onButtonClick={addSong} />
        <div className={styles.allCards}>
          {songsList.map((song) => (
            <Card songData={song} onDeleteButtonClick={deleteSong} />
          ))}
        </div>
        <div className={styles.filterButton}>
          <button className={styles2.createButton} onClick={sortSongs}>Sort acc. to Song Names</button>
        </div>
      </div>
    </>
  );
}
