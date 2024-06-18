import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from 'components/global/header';
import { Content } from 'antd/es/layout/layout';

interface IMainTemplateProps {
	children: React.ReactNode;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
	return (
		<Layout>
			<AppHeader />
			<Content>{children}</Content>
		</Layout>
	);
};

export default MainTemplate;
