import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, DatePicker, Button, AutoComplete } from "antd";
import { FormComponentProps } from "antd/lib/form";

const { TextArea } = Input;

const AutoCompleteOption = AutoComplete.Option;

export interface Props extends FormComponentProps {}
class RegistrationForm extends React.Component<Props> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    let rules = [
      {
        required: true,
        message: "este campo es requerido"
      }
    ];

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Numero de cuenta" hasFeedback>
          {getFieldDecorator("numeroCuenta", {
            rules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Nombre" hasFeedback>
          {getFieldDecorator("nombre", {
            rules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Apellido" hasFeedback>
          {getFieldDecorator("apellido", {
            rules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Lugar de nacimiento">
          {getFieldDecorator("lugarDeNacimiento", {
            rules
          })(
            <AutoComplete
              dataSource={websiteOptions}
              placeholder="Lugar de nacimiento"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Fecha de nacimiento">
          {getFieldDecorator("lugarDeNacimiento", {
            rules
          })(
            <AutoComplete
              dataSource={websiteOptions}
              placeholder="Lugar de nacimiento"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Fecha de nacimiento">
          {getFieldDecorator("lugarDeNacimiento", {
            rules
          })(
            <AutoComplete
              dataSource={websiteOptions}
              placeholder="Lugar de nacimiento"
            >
              <DatePicker />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Genero">
          {getFieldDecorator("Genero", {
            rules
          })(
            <AutoComplete placeholder="Genero">
              <DatePicker />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Nacionalidad" hasFeedback>
          {getFieldDecorator("nacionalidad", {
            rules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Direccion" hasFeedback>
          {getFieldDecorator("direccion", {
            rules
          })(<TextArea rows={4} />)}
        </Form.Item>
        <Form.Item label="Telefono" hasFeedback>
          {getFieldDecorator("telefono", {
            rules
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Tipo de sangre" hasFeedback>
          {getFieldDecorator("tipo de sangre", {
            rules
          })(<Input />)}
        </Form.Item>
        <Button type="primary" loading={this.state.loading}>
          Guardar Ficha
        </Button>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

ReactDOM.render(
  <WrappedRegistrationForm />,
  document.getElementById("container")
);
