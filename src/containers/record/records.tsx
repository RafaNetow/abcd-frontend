import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, DatePicker, Button, AutoComplete } from "antd";
import RecordModel from "./store/model";
import { FormComponentProps } from "antd/lib/form";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import RootState from "../../state";
import { addRecordnRequest } from "./store/actions";

const { TextArea } = Input;

const AutoCompleteOption = AutoComplete.Option;

export interface Props extends FormComponentProps {
  addRecordnRequest(state: RecordModel): void;
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
    photo: ""
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
          })(
            <AutoComplete
              placeholder="no cuenta"
              onChange={e => this.handleChangeNoCuenta(String(e))}
            >
              <Input />
            </AutoComplete>
          )}
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
            <AutoComplete
              placeholder="fecha de nacimiento"
              onChange={e => this.handlerChangeFechaDeNacimiento(String(e))}
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
        <Button type="primary" loading={this.state.loading}>
          Guardar Record
        </Button>
      </Form>
    );
  }
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
  handlerChangeDireccion(direccion: string): void {
    this.setState({
      direccion
    });
  }
  handlerChangeNacionalidad(nacionalidad: string): void {
    this.setState({
      nacionalidad
    });
  }
  handlerChangeLugarDeNacimiento(lugarDeNacimiento: string): void {
    this.setState({ lugarDeNacimiento });
  }
  handlerChangeFechaDeNacimiento(fechaDeNacimiento: String): void {
    this.setState({
      fechaDeNacimiento: new Date(fechaDeNacimiento.toString())
    });
  }
  handlerChangeApellido(apellido: string): void {
    this.setState({ apellido });
  }
  handlerChangeNombre(nombre: string): void {
    this.setState({ nombre });
  }
  handlerChangeEmail(correo: string): void {
    this.setState({ correo });
  }
}

const Record = Form.create({ name: "Record" })(RecordForm);

function mapStateToProps(state: RootState) {
  return {
    Record: state.Record
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addRecordnRequest
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
