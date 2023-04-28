import styles from "./styles.module.css";
import { FaMusic } from "react-icons/fa"

export default function SongTicker({ songTitle }) {
  return (
    <div className={styles.song}>
      <FaMusic className={styles.songIcon} />
      <marquee>
        {songTitle}
      </marquee>
    </div>
  )
}