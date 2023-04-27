import styles from "./styles.module.css";
import { FaHeart, FaCommentDots, FaArrowCircleRight } from "react-icons/fa";

export default function VideoPlayerActions({ likes = 260, comments = 170, shere = 20 }) {

  const handleLikes = () => {
    window.alert('Likes');
  }

  const handleComments = () => {
    window.alert('Comments');
  }

  const handleShere = () => {
    window.alert('Shere');
  }


  return (
    <aside className={styles.actions}>
      <button onClick={handleLikes} className={styles.action}>
        <FaHeart className={styles.icons} />
        <span title="likes">{likes}</span>
      </button>
      <button onClick={handleComments} className={styles.action}>
        <FaCommentDots className={styles.icons} />
        <span title="comments">{comments}</span>
      </button>
      <button onClick={handleShere} className={styles.action}>
        <FaArrowCircleRight className={styles.icons} />
        <span title="shere">{shere}</span>
      </button>
    </aside>

  )
}