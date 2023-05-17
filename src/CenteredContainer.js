import { Layout } from 'antd';

const CenteredContainer = ({ children }) => (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px', /* Add 20px padding on left and right */
        }}
      >
        <div style={{ minWidth: '400px', maxWidth: '800px', width: '100%' }}>
          {children}
        </div>
      </Layout.Content>
    </Layout>
  );

export default CenteredContainer;