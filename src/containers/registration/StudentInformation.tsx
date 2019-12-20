import React, { ChangeEvent } from 'react';
import State from './model'
import {FormComponentProps} from 'antd/lib/form/Form';

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

  


  class StudentInformation extends React.Component <FormComponentProps, State>{
   
    handlerChangeDeDondeProviene(provinencia:ChangeEvent<HTMLInputElement>) {
      this.setState({provinencia})
    }
    handlerChangeInstitutoAnterior(institutoAnterior:string) {
      this.setState({institutoAnterior})
    }
   
    handleChangeNoCuenta (event:string) {
     this.setState({noCuenta:event});
   }
  
   handlerChangeSeccion(seccion:string) {
     this.setState({seccion})
   }
  
  
   handlerChangeModalidad(modalidad:string) {
     this.setState({modalidad})
   }
  
   handlerChangerMatriculaYear(event:string) {
      this.setState({matricula: event});
  
   }
  
   handlerChangeRne(rne:string) {
     this.setState({rne})
   }
  
   handlerChangeName(name:string) {
     this.setState({name})
   }
  
   handlerChangeBirthDate(date:Date) {
     this.setState({date});
   }
  
   handlerChangeLastName(lastname:String) {
     this.setState({lastname})
   }
  
   handlerChangeCurso(curso:String) {
     this.setState({curso})
   }
  
   handlerCurrrentPapers(paper:String) {
     console.log(paper)
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
                      initialValue: this.state.noCuenta
                      
                    }  
                    
                  )(
                    <AutoComplete placeholder="no cuenta">
                      <Input onChange = {(e) => this.handleChangeNoCuenta(e)}  />
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Anio de matricula">
                  {getFieldDecorator("Anio de matricula", {
                    rules:requireRule,
                    initialValue: this.state.matricula
                  })(
                    <AutoComplete placeholder="matricula">
                      <Input onChange = {(e) => this.handlerChangerMatriculaYear(e)}  />
                    </AutoComplete>)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="RNE">
                  {getFieldDecorator("rne", {
                    rules:requireRule,
                    initialValue: this.state.rne,
                   
                  }
                  )(
                    <AutoComplete placeholder="rne">
                      <Input  onChange = {(s) => this.handlerChangeRne(s)}/>
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
                    initialValue: this.state.name
                  })(
                    <AutoComplete placeholder="Nombres">
                      <Input onChange = {(e) => this.handlerChangeName(e)}/>
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
                    initialValue: this.state.name,
                  })(
                    <AutoComplete placeholder="Apellidos">
                      <Input onChange = {(e) => this.handlerChangeLastName(e)}/>
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Fecha de nacimiento">
                  {getFieldDecorator("date-picker", {
                    rules:requireRule,
                       
                  })(
                      <DatePicker onChange = {(e) => this.handlerChangeBirthDate(e)}/> 
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
                    <Select placeholder="Selecione el curso" onChange = {(e) => this.handlerChangeCurso(e)}>
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
                    <Select placeholder="Selecione una modalidad" onChange = {(e) => this.handlerChangeModalidad(e)}>
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
                    <Select placeholder="Selecione una seccion" onChange = {(e) => this.handlerChangeSeccion(e)}>
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
                    rules: [{ required: true, message: "Seleccione el instituto" }]
                  })(
                    <Select placeholder="Seleccione el instituto" onChange = {(e) => this.handlerChangeInstitutoAnterior(e)}>
                      <Option value="instituto1">instituto 1</Option>
                    </Select>
                  )}
                </Form.Item>
                </Col>
                <Col span={8}> 
            <Form.Item label="De donde proviene">
              {getFieldDecorator('radio-group', {

              })(
                
                <Radio.Group onChange = {(s) => this.handlerPapelesActuales(s)}>
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
              })(
                <Checkbox.Group style={{ width: '100%' }} onChange = {(s) => this.handlerCurrrentPapers(s)} > 
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