import clsx from 'clsx';
import {useState, useRef} from 'react';
import styles from './styles.module.css';
import VideoPlayerActions from "./VideoPlayerActions.jsx";
import VideoDescription from './VideoDescription';

export default function VideoPlayer({src, author, description, albumImage, songTitle}) {
	const [playing, setPlaying] = useState(false);
	const video = useRef(null);

	const handlePlay = () => {
		const {current: videoEl} = video;
		playing
			? videoEl.pause()
			: videoEl.play()
	
		setPlaying(!playing);
	}

	const playerClassName = clsx(styles.player, {
		[styles.hidden]: playing,
	})

	return (
		<>
			<div className={styles.wrapper}>
				<video 
					className={styles.video}
					src={src} 
					controls={false} 
					loop
					ref={video}
					onClick={handlePlay}
					/>
				<i className={playerClassName} onClick={handlePlay}/>
				<VideoPlayerActions />
				<VideoDescription 
					author={author}
					description={description}
					albumImage={albumImage}
					songTitle={songTitle}
				/>
			</div>
		</>
	)
}

