import { Button, Tooltip } from 'antd'
import { SettingOutlined, BookOutlined } from '@ant-design/icons'

import imageDefault from '@assets/userAvatar.jpg'
import styles from './index.module.scss'

const ProfilePage = () => {
	return (
		<section className={styles.profilePage}>
			<div className={styles.container}>
				<article className={styles.profileArticle}>
					<p>Профиль пользователя</p>
					<Tooltip title='Редактировать данные' placement='left'>
						<Button
							color='orange'
							variant='solid'
							icon={<SettingOutlined />}
							iconPosition='end'
							size='large'
						></Button>
					</Tooltip>
				</article>
				<div className={styles.profileDetailsContainer}>
					<div className={styles.imageContainer}>
						<img src={imageDefault} alt='Фото пользователя' />
					</div>
					<ul className={styles.profileDetails}>
						<li className={styles.profileDetailsItem}>
							<p>Логин</p>
							<span>username</span>
						</li>
						<li className={styles.profileDetailsItem}>
							<p>Имя</p>
							<span>John</span>
						</li>
						<li className={styles.profileDetailsItem}>
							<p>Фамилия</p>
							<span>Doe</span>
						</li>
						<li className={styles.profileDetailsItemLast}></li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ProfilePage
