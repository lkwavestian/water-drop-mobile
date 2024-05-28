import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/en-US';
import App from './App';

import './theme.module.less';
import './theme.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ConfigProvider locale={zhCN}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </ConfigProvider>
);
