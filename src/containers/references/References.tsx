import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Card, Checkbox, AutoComplete } from "antd";
import { FormComponentProps } from "antd/lib/form";
import RootState from "../../state";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReferenceModel from "./store/model";
import {
  changeManger,
  changeOwnhouse,
  changePhone,
  changeWorkPlace
} from "./store/action";
import { worker } from "cluster";

interface Props extends FormComponentProps {
  changeManger(value: string): void;
  changeOwnhouse(value: boolean): void;
  changePhone(value: string): void;
  changeWorkPlace(value: string): void;
}

export class ReferenceForm extends React.Component<Props, ReferenceModel> {
  state: ReferenceModel = {
    manager: "",
    workplace: "",
    phone: "",
    ownhouse: ""
  };
  handlerChangeNombre = (nombre: string) => {
    this.props.changeManger(nombre);
  };

  handlerChangeOwnerhouse = (ownhouse: boolean) => {
    this.props.changeOwnhouse(ownhouse);
  };
  handlerChangePhone = (phone: string) => {
    this.props.changePhone(phone);
  };

  handlerChangeWorkPlace = (workplace: string) => {
    this.props.changeWorkPlace(workplace);
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

    return (
      <Card title="Referencias">
        <Form {...formItemLayout}>
          <Form.Item label="Nombre del encargado">
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "Ingrese el nombre del encargado",
                  whitespace: true
                }
              ]
            })(
              <AutoComplete
                placeholder="nombre"
                onChange={e => this.handlerChangeNombre(String(e))}
              >
                <Input />
              </AutoComplete>
            )}
            }
          </Form.Item>
          <Form.Item label={<span>Tiene casa propia&nbsp;</span>}>
            <Checkbox
              onChange={e => this.handlerChangeOwnerhouse(Boolean(e))}
            />
          </Form.Item>
          <Form.Item label={<span>Lugar de trabajo&nbsp;</span>}>
            {getFieldDecorator("workplace", {
              rules: [
                {
                  required: true,
                  message: "indique el lugar de trabajo",
                  whitespace: true
                }
              ]
            })(
              <AutoComplete
                placeholder="nombre"
                onChange={e => this.handlerChangeWorkPlace(String(e))}
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
          <Form.Item label={<span>Telefono&nbsp;</span>}>
            {getFieldDecorator("Telefono", {
              rules: [
                {
                  required: true,
                  message: "Please input your Telefono!",
                  whitespace: true
                }
              ]
            })(
              <AutoComplete
                placeholder="telefono"
                onChange={e => this.handlerChangePhone(String(e))}
              >
                <Input />
              </AutoComplete>
            )}
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
const Record = Form.create({ name: "reference" })(ReferenceForm);

function mapStateToProps(state: RootState) {
  return {
    Record: state.record
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    { changeManger, changeOwnhouse, changePhone, changeWorkPlace },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
