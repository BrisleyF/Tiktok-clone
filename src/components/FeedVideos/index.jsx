import VideoPlayer from "../VideoPlayer";
import styles from "../FeedVideos/styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "erick.meonomyrie",
    description: "No compres con hipoteca",
    likes: 123,
    shere: 234,
    comments: 333,
    songTitle: "sonido original - erick meonomyrie",
    src: "../public/video.mp4"
  },
  {
    id: 2,
    author: "abctimeus",
    description: "Germinacion de muñeco",
    likes: 356,
    shere: 284,
    comments: 456,
    songTitle: "sonido original - abctimeus",
    src: "../public/video(2).mp4"
  },
  {
    id: 3,
    author: "minabarrio",
    description: "Reflexion, ya no se divertirme",
    likes: 654,
    shere: 840,
    comments: 1090,
    songTitle: "sonido original - minabarrio",
    src: "../public/video(3).mp4"
  },
  {
    id: 4,
    author: "mariangimal",
    description: "¿Cual es tu apuro?",
    likes: 589,
    shere: 467,
    comments: 656,
    songTitle: "sonido original - mariangimal",
    src: "../public/video(4).mp4"
  },
]

export default function FeedVideos() {
  return (
        VIDEOS.map(video => {
          return (
            <div key={video.id} className={styles.item}>
              <VideoPlayer {...video} />
            </div>
          ) 
        })
  )
}
