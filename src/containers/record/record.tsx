import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Form, Input, DatePicker, Button, AutoComplete, Select } from "antd";
const { Option } = Select;
import RecordModel from "./store/model";
import { FormComponentProps } from "antd/lib/form";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import RootState from "../../state";
import { addRecord } from "./store/actions";

const { TextArea } = Input;

export interface Props extends FormComponentProps {
  addRecord(state: RecordModel): void;
}
class RecordForm extends React.Component<Props, RecordModel> {
  state: RecordModel = {
    name: "",
    lastname: "",
    birthday: new Date(),
    birthplace: "",
    gender: "",
    nacionality: "",
    address: "",
    phone: "",
    blood: "",
    photo: "",
    email: ""
  };

  handleChangeApellido = (lastname: String) => [
    this.setState({
      lastname
    })
  ];

  handleChangeName = (name: String) => {
    this.setState({
      name
    });
  };
  handlerChangeGenero = (gender: String) => {
    this.setState({ gender });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

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

    return (
      <Form {...formItemLayout}>
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
          })(
            <AutoComplete
              placeholder="email"
              onChange={e => this.handlerChangeEmail(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Nombre" hasFeedback>
          {getFieldDecorator("nombre", {
            rules
          })(
            <AutoComplete
              placeholder="nombre"
              onChange={e => this.handlerChangeNombre(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Apellido" hasFeedback>
          {getFieldDecorator("apellido", {
            rules
          })(
            <AutoComplete
              placeholder="apellido"
              onChange={e => this.handlerChangeApellido(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Lugar de nacimiento">
          {getFieldDecorator("lugarDeNacimiento", {
            rules
          })(
            <AutoComplete
              placeholder="lugar de nacimiento"
              onChange={e => this.handlerChangeLugarDeNacimiento(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>

        <Form.Item label="Fecha de nacimiento">
          {getFieldDecorator("fecha de nacimiento", {
            rules
          })(
            <DatePicker
              onChange={e => this.handlerChangeFechaDeNacimiento(String(e))}
            />
          )}
        </Form.Item>
        <Form.Item label="Genero" hasFeedback>
          {getFieldDecorator("Genero", {
            rules: [{ required: true, message: "seleccione" }]
          })(
            <Select
              placeholder="Selecione el genero"
              onChange={e => this.handlerChangeGenero(String(e))}
            >
              <Option value="masculino">masculino</Option>
              <Option value="femenino">femenino</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Nacionalidad" hasFeedback>
          {getFieldDecorator("nacionalidad", {
            rules
          })(
            <AutoComplete
              placeholder="nacionalidad"
              onChange={e => this.handlerChangeNacionalidad(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Direccion" hasFeedback>
          {getFieldDecorator("direccion", {
            rules
          })(
            <AutoComplete
              placeholder="direcciòn"
              onChange={e => this.handlerChangeDireccion(String(e))}
            >
              <TextArea rows={4} />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Telefono" hasFeedback>
          {getFieldDecorator("telefono", {
            rules
          })(
            <AutoComplete
              placeholder="direcciòn"
              onChange={e => this.handlerChangeTelefono(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Tipo de sangre" hasFeedback>
          {getFieldDecorator("tipo de sangre", {
            rules
          })(
            <AutoComplete
              placeholder="Tipo de sangre"
              onChange={e => this.handlerChangeTipoDeSangre(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Button type="primary" loading={false} onClick={this.saveRecord}>
          Guardar Record
        </Button>
      </Form>
    );
  }

  saveRecord = () => {
    this.props.addRecord(this.state);
  };
  handlerChangeTipoDeSangre(blood: string): void {
    this.setState({
      blood
    });
  }
  handlerChangeTelefono(phone: string): void {
    this.setState({
      phone
    });
  }
  handlerChangeDireccion(address: string): void {
    this.setState({
      address
    });
  }
  handlerChangeNacionalidad(nacionality: string): void {
    this.setState({
      nacionality
    });
  }
  handlerChangeLugarDeNacimiento(birthplace: string): void {
    this.setState({ birthplace });
  }
  handlerChangeFechaDeNacimiento(birthday: String): void {
    console.log(birthday);
    this.setState({
      birthday: new Date(birthday.toString())
    });
  }
  handlerChangeApellido(lastname: string): void {
    this.setState({ lastname });
  }
  handlerChangeNombre(name: string): void {
    this.setState({ name });
  }
  handlerChangeEmail(email: string): void {
    this.setState({ email });
  }
}

const Record = Form.create({ name: "Record" })(RecordForm);

function mapStateToProps(state: RootState) {
  return {
    Record: state.record
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addRecord
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
