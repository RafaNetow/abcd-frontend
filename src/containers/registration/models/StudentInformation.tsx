import React, { ChangeEvent } from 'react';
import {RegistrationState, RegistrationInitalState} from '../store/state'
import {FormComponentProps} from 'antd/lib/form/Form';
import {addRegistrationRequest} from "../store/actions"

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
import { connect } from 'react-redux';
import RootState from '../../../state';
import { allSettled } from 'q';
  const { Option } = Select;

  interface StateProps extends RegistrationState, FormComponentProps{

  }


  class StudentInformation extends React.Component <FormComponentProps, RegistrationState>{



    mutateRegistrationState(name:string, value : String, isDate: boolean)  {
      let { registration} = this.state;
      let newValue;
      (isDate) ? newValue = new Date(value.toString()) : value;
      let newState = {
        ...registration,
          [name]: newValue
      }
     
      return newState; 
    }


    handlerChangeDeDondeProviene(event:ChangeEvent<HTMLInputElement>) {
      this.setState({
        registration: this.mutateRegistrationState('provincia', event.target.value, false)
      });
    }
    handlerChangeInstitutoAnterior(institutoAnterior:String) {
      this.setState({
        registration:this.mutateRegistrationState('institutoAnterior',institutoAnterior, false)
      });
    }
   
    handleChangeNoCuenta (event:ChangeEvent<HTMLInputElement>) {
      this.setState({
        registration:this.mutateRegistrationState('noCuenta',event.target.value, false)
      });
   }
  
   handlerChangeSeccion(seccion:String) {
    this.setState({
      registration:this.mutateRegistrationState('seccion',seccion, false)
    });
   }
  
  
   handlerChangeModalidad(modalidad:String) {
    this.setState({
      registration:this.mutateRegistrationState('modalidad',modalidad, false)
    });
   }
  
   handlerChangerMatriculaYear(event:ChangeEvent<HTMLInputElement>) {
    this.setState({
      registration:this.mutateRegistrationState('matrDate',event.target.value,true)
    });
   }
  
   handlerChangeRne(event:ChangeEvent<HTMLInputElement>) {
    this.setState({
      registration:this.mutateRegistrationState('rne',event.target.value,false)
    });
   }
  
   handlerChangeName(event:ChangeEvent<HTMLInputElement>) {
    this.setState({
      registration:this.mutateRegistrationState('name',event.target.value,false)
    });
   }
  
   handlerChangeBirthDate(event:String) {
      this.setState({
        registration:this.mutateRegistrationState('name',event,true)
      });
   }
  
   handlerChangeLastName(event:ChangeEvent<HTMLInputElement>) {
    this.setState({
      registration:this.mutateRegistrationState('lastname',event.target.value,false)
    });
   }
  
   handlerChangeCurso(curso:String) {
    this.setState({
      registration:this.mutateRegistrationState('curso',curso,false)
    });
   }
  
   handlerPapelesActuales(paper:String) {
    this.setState({
      registration:this.mutateRegistrationState('curso',paper,false)
    });
   }

   handlerCurrentDocuments(documents:any) {
     console.log(documents);
     this.setState({
      registration:this.mutateRegistrationState('curso','sasd',false)
     })
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
    
        console.log(this.state);
    
        return (
          <Form>
            <Row>
              <Col span={8}>
                <Form.Item label="No Cuenta">
                  {getFieldDecorator("num_cuenta",
                    {
                      rules: requireRule,
                      initialValue: this.state.registration.noCuenta
                      
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
                    initialValue: this.state.registration.matricula
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
                    initialValue: this.state.registration.rne,
                   
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
                    initialValue: this.state.registration.name
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
                    initialValue: this.state.registration.lastname,
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
                      <DatePicker onChange = {(e) => this.handlerChangeBirthDate(String(e))}/> 
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
                    <Select placeholder="Selecione el curso" onChange = {(e) => this.handlerChangeCurso(String(e))}>
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
                    <Select placeholder="Selecione una modalidad" onChange = {(e) => this.handlerChangeModalidad(String(e))}>
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
                    <Select placeholder="Selecione una seccion" onChange = {(e) => this.handlerChangeSeccion(String(e))}>
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
                    <Select placeholder="Seleccione el instituto" onChange = {(e) => this.handlerChangeInstitutoAnterior(String(e))}>
                      <Option value="instituto1">instituto 1</Option>
                    </Select>
                  )}
                </Form.Item>
                </Col>
                <Col span={8}> 
            <Form.Item label="De donde proviene">
              {getFieldDecorator('radio-group', {

              })(
                
                <Radio.Group onChange = {(s) => this.handlerPapelesActuales(String(s))}>
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
                <Checkbox.Group style={{ width: '100%' }} onChange = {(s) => this.handlerCurrentDocuments((s))} > 
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

function mapStateToProps(state: RootState) {
  return {
    ficha: state.ficha
  }
}

function mapDispatchToProps() {
  return {
     addRegistrationRequest
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentInformationForm)