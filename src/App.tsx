import {
	FetcherProvider,
	HelmetProvider,
	MessageProvider,
	Router,
	StoreProvider,
	ThemeProvider,
} from 'components/provider';
import { ConfigProvider, App as AppProviderAnt } from 'antd';
import { PAGE_PATH } from 'constants/page-path';
import { ContextProvider } from 'components/provider/context';
import LoadingProvider from 'components/provider/loading-provider';

function App() {
	return (
		<ConfigProvider>
			<AppProviderAnt>
				<StoreProvider>
					<ContextProvider>
						<FetcherProvider>
							<HelmetProvider>
								<MessageProvider>
									<ThemeProvider>
										<LoadingProvider>
											<Router defaultRoute={PAGE_PATH.home} />
										</LoadingProvider>
									</ThemeProvider>
								</MessageProvider>
							</HelmetProvider>
						</FetcherProvider>
					</ContextProvider>
				</StoreProvider>
			</AppProviderAnt>
		</ConfigProvider>
	);
}

export default App;
