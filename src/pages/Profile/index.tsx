import { Button, Tooltip } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import imageDefault from '@assets/userAvatar.jpg'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import type { UserModel } from '@shared/models/UserModel'
import { fetchProfile } from './api/profile'

const ProfilePage = () => {
	const [profile, setProfile] = useState<UserModel | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	useEffect(() => {
		if (profile === null) {
			;(async () => {
				setProfile(await fetchProfile())
			})()
		}
	}, [profile])
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
							<span>{profile?.login}</span>
						</li>
						<li className={styles.profileDetailsItem}>
							<p>Имя</p>
							<span>{profile?.firstName || 'Не указано'}</span>
						</li>
						<li className={styles.profileDetailsItem}>
							<p>Фамилия</p>
							<span>{profile?.lastName || 'Не указано'}</span>
						</li>
						<li className={styles.profileDetailsItemLast}></li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ProfilePage
