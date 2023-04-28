import styles from "./styles.module.css";
import AlbumDisk from "./AlbumDisk";
import SongTicker from "./SongTicker";

export default function VideoDescription({author, description, albumImage, songTitle}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <a className={styles.author} href={`/user/${author}`}>@{author}</a>
        <p className={styles.text}>{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
      
    </footer>
  )
}