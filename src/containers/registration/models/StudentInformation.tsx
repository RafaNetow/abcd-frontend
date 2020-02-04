import React, { ChangeEvent } from "react";
import { RegistrationState, RegistrationInitalState } from "../store/state";
import { FormComponentProps } from "antd/lib/form/Form";
import { addRegistrationRequest } from "../store/actions";
import RegisrationModel from "../store/model";
import { bindActionCreators, Dispatch } from "redux";

import {
  Select,
  Form,
  Col,
  Input,
  Button,
  Row,
  AutoComplete,
  DatePicker,
  Radio,
  Checkbox,
  Layout,
  Menu,
  Breadcrumb,
  Icon
} from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { connect } from "react-redux";
import RootState from "../../../state";
import { allSettled } from "q";
const { Option } = Select;

interface Props extends FormComponentProps {
  addRegistrationRequest(state: RegisrationModel): void;
}

class StudentInformation extends React.Component<Props, RegisrationModel> {
  state: RegisrationModel = {
    noCuenta: "",
    rne: "",
    name: "",
    lastname: "",
    date: new Date(),
    matrDate: new Date(),
    curso: " ",
    modalidad: "",
    institutoAnterior: "",
    seccion: "",
    provinencia: "",
    documentos: [],
    paper: ""
  };
  // mutateRegistrationState(name:string, value : String, isDate: boolean)  {
  //   let { registration} = this.state;
  //   let newValue;
  //   (isDate) ? newValue = new Date(value.toString()) : value;
  //   let newState = {
  //     ...registration,
  //       [name]: newValue
  //   }

  //   return newState;
  // }

  // handlerChangeDeDondeProviene(event:ChangeEvent<HTMLInputElement>) {
  //   this.setState({
  //     ...this.state, provincia: event.target.value,
  //   });
  // }
  handlerChangeInstitutoAnterior(institutoAnterior: String) {
    this.setState({
      institutoAnterior: institutoAnterior
    });
  }

  handleChangeNoCuenta = (event: String) => {
    this.setState({
      noCuenta: event
    });
  };

  handlerChangeSeccion(seccion: String) {
    this.setState({
      seccion: seccion
    });
  }

  handlerChangeModalidad(modalidad: String) {
    this.setState({
      modalidad: modalidad
    });
  }

  handlerChangerMatriculaYear(event: String) {
    console.log(event);
    this.setState({
      matrDate: new Date(event.toString())
    });
  }

  handlerChangeRne(rne: String) {
    this.setState({
      rne
    });
  }

  handlerChangeName(event: String) {
    this.setState({
      name: event
    });
  }

  handlerChangeBirthDate(event: String) {
    this.setState({
      date: new Date(event.toString())
    });
  }

  handlerChangeLastName(event: String) {
    console.log(event);
    this.setState({
      lastname: event
    });
  }

  handlerChangeCurso(curso: String) {
    this.setState({
      curso: curso
    });
  }

  handlerPapelesActuales(paper: String) {
    this.setState({
      curso: paper
    });
  }

  handlerCurrentDocuments(documents: any) {
    console.log(documents);
    this.setState({
      curso: "sasd"
    });
  }

  onSubmit = () => {
    this.props.addRegistrationRequest(this.state);
  };

  render() {
    const requireRule = [
      {
        required: true,
        message: "Este campo es requerido"
      }
    ];

    const dateTimePickerRule = {
      rules: [
        { type: "object", required: true, message: "Seleccione la fecha" }
      ]
    };
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Row>
          <Col span={8}>
            <Form.Item label="No Cuenta">
              {getFieldDecorator("num_cuenta", {
                rules: requireRule,
                initialValue: this.state.noCuenta
              })(
                <AutoComplete
                  placeholder="no cuenta"
                  onChange={e => this.handleChangeNoCuenta(String(e))}
                >
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Anio de matricula">
              {getFieldDecorator("Anio de matricula", {
                rules: requireRule
              })(
                <DatePicker
                  onChange={e => this.handlerChangeBirthDate(String(e))}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="RNE">
              {getFieldDecorator("rne", {
                rules: requireRule,
                initialValue: this.state.rne
              })(
                <AutoComplete
                  placeholder="rne"
                  onChange={s => this.handlerChangeRne(String(s))}
                >
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Nombres">
              {getFieldDecorator("nombres", {
                rules: requireRule,
                initialValue: this.state.name
              })(
                <AutoComplete
                  placeholder="Nombres"
                  onChange={e => this.handlerChangeName(String(e))}
                >
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Apellidos">
              {getFieldDecorator("Apellidos", {
                rules: [
                  {
                    required: true,
                    message: "Este campo es requerido"
                  }
                ],
                initialValue: this.state.lastname
              })(
                <AutoComplete
                  placeholder="Apellidos"
                  onChange={e => this.handlerChangeLastName(String(e))}
                >
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Fecha de nacimiento">
              {getFieldDecorator("date-picker", {
                rules: requireRule
              })(
                <DatePicker
                  onChange={e => this.handlerChangeBirthDate(String(e))}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Curso" hasFeedback>
              {getFieldDecorator("curso", {
                rules: [{ required: true, message: "Seleccione una modalidad" }]
              })(
                <Select
                  placeholder="Selecione el curso"
                  onChange={e => this.handlerChangeCurso(String(e))}
                >
                  <Option value="curso1">Curso 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Modalidad" hasFeedback>
              {getFieldDecorator("Modalidad", {
                rules: [{ required: true, message: "Seleccione una modalidad" }]
              })(
                <Select
                  placeholder="Selecione una modalidad"
                  onChange={e => this.handlerChangeModalidad(String(e))}
                >
                  <Option value="modalidad1">Modalidad 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Seccion" hasFeedback>
              {getFieldDecorator("Seccion", {
                rules: [{ required: true, message: "Seleccione una seccion" }]
              })(
                <Select
                  placeholder="Selecione una seccion"
                  onChange={e => this.handlerChangeSeccion(String(e))}
                >
                  <Option value="seccion1">Seccion 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>Datos Academicos</Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Instituto anterior" hasFeedback>
              {getFieldDecorator("Instituto anterior", {
                rules: [{ required: true, message: "Seleccione el instituto" }]
              })(
                <Select
                  placeholder="Seleccione el instituto"
                  onChange={e => this.handlerChangeInstitutoAnterior(String(e))}
                >
                  <Option value="instituto1">instituto 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="De donde proviene">
              {getFieldDecorator(
                "radio-group",
                {}
              )(
                <Radio.Group
                  onChange={s => this.handlerPapelesActuales(String(s))}
                >
                  <Radio value="repite">repite</Radio>
                  <Radio value="traslado">viene de traslado</Radio>
                  <Radio value="desertor">desertor</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Documentos que presentan">
          {getFieldDecorator(
            "checkbox-group",
            {}
          )(
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={s => this.handlerCurrentDocuments(s)}
            >
              <Row>
                <Col span={8}>
                  <Checkbox value="A">Certificado de sexto Grado</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled value="B">
                    Tarjeta de Salud
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">Partida de nacimiento</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">Certificacion de estudio</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">Fotografia</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">Otros documentos</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>
        <button onClick={this.onSubmit}>Redux ahi te voy :) </button>
      </Form>
    );
  }
}

const StudentInformationForm = Form.create({ name: "register" })(
  StudentInformation
);

function mapStateToProps(state: RootState) {
  return {
    ficha: state.ficha
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addRegistrationRequest
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentInformationForm);
