import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Typography, Row, Col, message } from 'antd';
import CenteredContainer from './CenteredContainer';

const { Title } = Typography;

function SignatureGenerator() {
  const [output, setOutput] = useState('');
  const [isCopyButtonDisabled, setIsCopyButtonDisabled] = useState(true);

  const generateText = (values) => {
    const { name, position, landline, mobile, email } = values;
    const signature = `
  <table cellpadding="1" style="line-height: 1.1;">
  <tbody>
  <tr>
  <td colspan="4">
    <span style="font-family: Segoe UI,sans-serif; font-weight: bold; font-size: 18px; color: #6b7e90;">
      ${name}
    </span>
  </td>
  </tr>
  <tr>
  <td colspan="4">
    <span style="font-family: Segoe UI,sans-serif; font-size: 14px; color: #36587a; font-weight: bold;">
      ${position}
    </span> 
    <span style="font-family: Segoe UI,sans-serif; font-size: 14px; color: #36587a;">
        | NOKOV Motion Capture
    </span>
    </td>
  </tr>
  <tr>
  <td colspan="5">
    <hr style="border-color: #93adc6;" />
  </td>
  </tr>
  <tr>
  <td >
    <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/land-phone.png" width="15" />
  </td>
  <td>
    <span style="color: #36587a; font-family: Segoe UI,sans-serif; font-size: 12px;">
    ${landline}
    </span>
  </td>
  <td>
    <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/cellphone.png" width="15" />
  </td>
  <td colspan="2">
    <span style="font-family: Segoe UI,sans-serif; font-size: 12px; color: #36587a;">
     ${mobile}
    </span>
  </td>
  </tr>
  <tr>
  <td>
    <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/email.png" width="15" />
  </td>
  <td >
    <span style="font-family: Segoe UI,sans-serif; font-size: 12px; color: #36587a;">
      ${email}
    </span>
  </td>
  <td>
    <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/web.png" width="15" />
  </td>
  <td colspan="2">
    <span style="font-family: Segoe UI,sans-serif; font-size: 12px; color: #36587a;">
      <a href="https://en.nokov.com" target="_blank" >
        en.nokov.com
      </a>
    </span>
  </td>
  </tr>
    <tr>
      <td >
        <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/location.png" width="15" />
      </td>
      <td colspan="4"><span style="font-family: Segoe UI,sans-serif; font-size: 12px; color: #36587a;">
        <a href="https://goo.gl/maps/S8TdYVpdVgn7zU3G9" target="_blank" >
        Beijing NOKOV Science & Technology Co., Ltd
        </a>
      </span>
      </td>
      </tr>
      <tr>
        <td >
        </td>
      <td colspan="4">
        <span style="font-family: Segoe UI,sans-serif; font-size: 12px; color: #36587a;">
          <a href="https://goo.gl/maps/cPEmdJ1U7Z14qWjZ8" target="_blank" >
            Shanghai NOKOV Science and Technology Co., Ltd
            </a>
        </span>
      </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: left; width: 55%;">
          <br/>
            <img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/logo-en-small.png" width="140" />
        </td>
        <td colspan="3" style="text-align: center;">
          <br/>
            <a href="https://www.linkedin.com/company/nokov/" target="_blank"><img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/linkedin.png" width="28" /></a>
            <a href="https://www.facebook.com/NokovMocap" target="_blank"><img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/facebook.png" width="28" /></a>
            <a href="https://twitter.com/nokovmocap" target="_blank"><img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/twitter.png" width="28" /></a>
            <a href="https://www.youtube.com/@nokovmocap" target="_blank"><img src="https://nokov-1307363076.cos.ap-hongkong.myqcloud.com/work%3Dimages/youtube.png" width="28" /></a>
        </td>
      </tr>
  </tbody>
  </table>
    `;
    setOutput(signature);
    setIsCopyButtonDisabled(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(output).then(() => {
        message.success('Signature copied to clipboard');
      }, (err) => {
        message.error('Failed to copy');
      });
  };

  const onFinish = (values) => {
    generateText(values);
  };

  return (
    <CenteredContainer>
    <div className="container">
    <div className="signature-generator-container">
      <Title level={3}>NOKOV邮件签名生成器(英文)</Title>
      <Row>
        <Col span={12}>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="你的英文名:" name="name">
              <Input placeholder="Pop King" />
            </Form.Item>
            <Form.Item label="你的英文职位:" name="position">
              <Input placeholder="Executive Chef" />
            </Form.Item>
            <Form.Item label="你的座机号码:" name="landline">
              <Input placeholder="+86 10-6492-2321" />
            </Form.Item>
            <Form.Item label="你的手机号码:" name="mobile">
              <Input placeholder="+86 176-2149-2277" />
            </Form.Item>
            <Form.Item label="你的邮箱:" name="email">
              <Input type="email" placeholder="example@nokov.com" />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ width: '200px' }}>
                  生成
                </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Input.TextArea value={output} readOnly style={{ width: '100%', height: '200px' }} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
        <div style={{ border: '1px solid #000', padding: '10px', backgroundColor: 'transparent' }}>
         <div dangerouslySetInnerHTML={{ __html: output }} />
        </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button id="copyButton" type="primary" onClick={copyText} disabled={isCopyButtonDisabled} style={{ width: '200px' }}>
              复制
            </Button>
          </div>
        </Col>
      </Row>
    </div>
    </div>
    </CenteredContainer>
  );
}

export default SignatureGenerator;

ReactDOM.render(<SignatureGenerator />, document.getElementById('app'));
