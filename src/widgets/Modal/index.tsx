import React, { useState } from 'react'
import { Modal } from 'antd'

interface ModalProps {
	modalTitle: string
	open: boolean
	setOpen: (open: boolean) => void
	children: React.ReactNode
	okText: string
	cancelText: string
}

const CustomModal = ({
	modalTitle,
	open,
	setOpen,
	children,
	okText,
	cancelText
}: ModalProps) => {
	const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

	const handleOk = () => {
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
		}, 1000)
	}

	const handleCancel = () => {
		setOpen(false)
	}

	return (
		<>
			<Modal
				title={modalTitle}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={okText}
				cancelText={cancelText}
			>
				{children}
			</Modal>
		</>
	)
}

export default CustomModal
