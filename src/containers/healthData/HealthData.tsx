
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

class HealDataForm extends React.Component <Props> {
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
      <Card title="Informacion de Salud">
      <Form {...formItemLayout}>
        <Form.Item label="Adolece de alguna enfermedad">
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
              Tiene todas las vacunas&nbsp;
             
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
              Enfermades que ha padecido&nbsp;
            
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<TextArea />)}
        </Form.Item>
      </Form>
      </Card>
    );
  }
}


const HHF = Form.create({ name: "register" })(
    HealDataForm
);


          