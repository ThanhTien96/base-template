import { themes } from 'config';
import { useMemo } from 'react';
import { useAppSelector } from 'store';
import { ConfigProvider } from 'antd';
import { Global } from '@emotion/react';

export interface IThemeProviderProps {
	children?: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
	const {
		selected: selectedThemeKey,
		colorPrimary,
		...resProps
	} = useAppSelector((state) => state.app.theme);

	const selectedTheme = useMemo(() => {
		return {
			...themes[selectedThemeKey],
			token: {
				...themes[selectedThemeKey].token,
				colorPrimary,
			},
		};
	}, [selectedThemeKey, colorPrimary]);

	return (
		<>
			<Global
				styles={{
					'.ant-layout-sider-trigger': {
						backgroundColor:
							selectedTheme && selectedTheme.components?.Layout?.triggerBg,
					},
				}}
			/>
			<ConfigProvider {...resProps} theme={selectedTheme}>
				{children}
			</ConfigProvider>
		</>
	);
};

export default ThemeProvider;
