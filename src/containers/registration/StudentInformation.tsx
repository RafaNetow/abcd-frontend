import React from 'react';

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
    Checkbox
  } from "antd";
  const { Option } = Select;


  class StudentInformation extends React.Component {
    constructor() {
      super(props, );
      this.state = {
        NoCuenta : "080",
        matricula:'00',
        rne:'0',
        name: '',
        lastname: '',
        date: new Date(),
        curso:'',
        modalidad: '',
        institutoAnterior: '',
        seccion: '',
        provinencia: '',
        documentos:[]
    
      }
    }

    render() {
        const requireRule = 
           [
            {
              required: true,
              message: "Este campo es requerido"
            }
          ]
       
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
                  {getFieldDecorator("num_cuenta",
                    {
                      rules: requireRule,
                      initialValue: this.state.NoCuenta,
                      onChange: (e) => this.handleChangeNoCuenta(e) 
                      
                    }  
                    
                  )(
                    <AutoComplete placeholder="no cuenta">
                      <Input />
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Anio de matricula">
                  {getFieldDecorator("Anio de matricula", {
                    rules:requireRule,
                    initialValue: this.state.matricula,
                    onChange: (e) => this.handlerChangerMatriculaYear(e) 
                  })(
                    <AutoComplete placeholder="matricula">
                      <Input />
                    </AutoComplete>)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="RNE">
                  {getFieldDecorator("rne", {
                    rules:requireRule,
                    initialValue: this.state.rne,
                    onChange: (s) => this.handlerChangeRne(s)
                  }
                  )(
                    <AutoComplete placeholder="rne">
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
                    rules:requireRule,
                    initialValue: this.state.name,
                    onChange: (e) => this.handlerChangeName(e)
                  })(
                    <AutoComplete placeholder="Nombres">
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
                    initialValue: this.state.lastname,
                    onChange: (e) => this.handlerChangeLastName(e)
                  })(
                    <AutoComplete placeholder="Apellidos">
                      <Input />
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Fecha de nacimiento">
                  {getFieldDecorator("date-picker", {
                    rules:requireRule,
                
                    onChange: (e) => this.handlerChangeBirthDate(e)             
                  })(
                      <DatePicker /> 
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item label="Curso" hasFeedback>
                  {getFieldDecorator("curso", {
                    rules: [{ required: true, message: "Seleccione una modalidad" }],
                    onChange: (e) => this.handlerChangeCurso(e)  
                  })(
                    <Select placeholder="Selecione el curso">
                      <Option value="curso1">Curso 1</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Modalidad" hasFeedback>
                  {getFieldDecorator("Modalidad", {
                    rules: [{ required: true, message: "Seleccione una modalidad" }],
                    onChange: (e) => this.handlerChangeModalidad(e)  
                  })(
                    <Select placeholder="Selecione una modalidad">
                      <Option value="modalidad1">Modalidad 1</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Seccion" hasFeedback>
                  {getFieldDecorator("Seccion", {
                    rules: [{ required: true, message: "Seleccione una seccion" }],
                    onChange: (e) => this.handlerChangeSeccion(e)  
                  })(
                    <Select placeholder="Selecione una seccion">
                      <Option value="seccion1">Seccion 1</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>Datos Academicos</Row>
            <Row><Col span={8}>
                <Form.Item label="Instituto anterior" hasFeedback>
                  {getFieldDecorator("Instituto anterior", {
                    rules: [{ required: true, message: "Seleccione el instituto" }],
                    onChange: (e) => this.handlerChangeInstitutoAnterior(e) 
                  })(
                    <Select placeholder="Seleccione el instituto">
                      <Option value="instituto1">instituto 1</Option>
                    </Select>
                  )}
                </Form.Item>
                </Col>
                <Col span={8}> 
            <Form.Item label="De donde proviene">
              {getFieldDecorator('radio-group', {
                onChange: (e) => this.handlerPapelesActuales(e)  
              })(
                
                <Radio.Group>
                  <Radio value="repite">repite</Radio>
                  <Radio value="traslado">viene de traslado</Radio>
                  <Radio value="desertor">desertor</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            </Col>
            </Row>
      
             
            <Form.Item label="Documentos que presentan">
              {getFieldDecorator('checkbox-group', {
                onChange: (e) => this.handlerCurrrentPapers(e)
              })(
                <Checkbox.Group style={{ width: '100%' }}>
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
                </Checkbox.Group>,
              )}
            </Form.Item>
              
          </Form>
        );
      }
}

const StudentInformationForm = Form.create({ name: "register" })(
    StudentInformation
);