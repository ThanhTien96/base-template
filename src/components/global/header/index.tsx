import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import {
	BugFilled,
	InboxOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Flex, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const AppHeader: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();

	const handleNavigate = () => navigate('home');
	return (
		<Header className="border-b border-solid border-gray-300 border-0 shadow-sm">
			<Flex align="center" justify="space-between" className="h-full">
				<Flex align="center" gap={30} className="h-full">
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						className="border border-solid border-gray-200"
						style={{
							fontSize: '16px',
						}}
					/>
					<Flex align="center" gap={10}>
						<BugFilled className="text-[25px]" />
						<Button
							onClick={handleNavigate}
							className="p-1"
							type="text"
							children={
								<Typography.Text className="font-semibold">Dashboard</Typography.Text>
							}
						/>
					</Flex>
				</Flex>

				<Flex gap={10}>
					<Button icon={<SettingOutlined />} />
					<Button icon={<InboxOutlined />} />
					<Avatar className="cursor-pointer" src={'https://picsum.photos/200/200'} />
				</Flex>
			</Flex>
		</Header>
	);
};

export default AppHeader;
