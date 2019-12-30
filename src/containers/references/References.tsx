
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {FormComponentProps} from 'antd/lib/form/Form';
import {
  Form,
  Input,
  Card,
  Checkbox
} from 'antd';

const { TextArea } = Input;


interface Props extends FormComponentProps {

}

class ReferenceForm extends React.Component <Props> {

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
   
    return (
    <Card title="Referencias">
    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      <Form.Item label="Nombre del padre">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item
        label={
          <span>
            Tiene casa propia&nbsp;
           
          </span>
        }
      >
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(<Checkbox />)}
      </Form.Item>
      <Form.Item
        label={
          <span>
            Lugar de trabajo&nbsp;
          
          </span>
        }
      >
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(<Input />)}
      </Form.Item>
      <Form.Item
        label={
          <span>
            Telefono&nbsp;
          
          </span>
        }
      >
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(<Input />)}
      </Form.Item>
    </Form>
    </Card>
  );
}



const RF = Form.create({ name: "register" })(
    ReferenceForm
);


          