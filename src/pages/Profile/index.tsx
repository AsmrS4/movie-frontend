import { Button, Tooltip } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import imageDefault from '@assets/userAvatar.jpg'
import styles from './index.module.scss'
import { useProfile } from './hooks/useProfile'
import CustomModal from '@widgets/Modal'
import { useModal } from '@hooks/useModal'
import { ProfileForm } from './ui/Form/ProfileForm'

const ProfilePage = () => {
	const { profile, isLoading } = useProfile()
	const { openModal, setOpen } = useModal()
	const handleEditButtonClick = () => {
		setOpen(true)
	}
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
							onClick={handleEditButtonClick}
						></Button>
					</Tooltip>
				</article>
				<div className={styles.profileDetailsContainer}>
					<div className={styles.imageContainer}>
						<img
							src={profile?.imageUrl || ''}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null
								currentTarget.src = imageDefault
							}}
							alt='Фото пользователя'
						/>
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
			<CustomModal
				modalTitle={`Редактирование данных`}
				open={openModal}
				setOpen={setOpen}
				children={<ProfileForm {...profile} />}
			/>
		</section>
	)
}

export default ProfilePage
