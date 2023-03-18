import { ConfigProvider, App } from 'antd';
import thTH from 'antd/locale/th_TH';

type ProviderProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ConfigProvider locale={thTH}>
      <App>{children}</App>
    </ConfigProvider>
  );
};

export default Providers;
