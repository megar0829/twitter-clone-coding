import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default function Post() {
	return (
		<article>
			<div className={style.postWrapper}>
				<div className={style.postUserSection}>
					<Link href={`/${target.User.id}`} className={style.postUserImage}>
						<img src={target.User.image} alt={target.User.nickname}/>
						<div className={style.postShade}/>
					</Link>
				</div>
				<div className={style.postBody}>
					<div className={style.postMeta}>
						<Link href={`/${target.User.id}`}>
							<span className={style.postUserName}>{target.User.nickname}</span>
							&nbsp;
							<span className={style.postUserId}>@{target.User.id}</span>
							&nbsp;
							·
							&nbsp;
						</Link>
						<span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
					</div>
					<div>{target.content}</div>
					<div className={style.postImageSection}>

					</div>
					{/*<ActionButtons/>*/}
				</div>
			</div>
		</article>
	);
}