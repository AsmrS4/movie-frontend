import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'

const SpinLoader = () => {
	return (
		<Flex
			align='center'
			justify='center'
			style={{ width: '100%', height: '100%' }}
		>
			<Spin
				indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />}
			/>
		</Flex>
	)
}

export default SpinLoader
