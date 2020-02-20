import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { FormComponentProps } from "antd/lib/form/Form";
import { Form, Input, Card, Checkbox, AutoComplete } from "antd";
import RootState from "../../state";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

const { TextArea } = Input;

interface Props extends FormComponentProps {}

class ReferenceForm extends React.Component<Props> {
  handlerChangeNombre = (nombre: string) => {};

  handlerChangeOwnerhouse = (nikcname: boolean) => {};
  handlerChangePhone = (phone: string) => {};

  handlerChangeWorkPlace = (workplace: string) => {};

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
            {getFieldDecorator("casa propia", {
              rules: [
                {
                  required: true,
                  message: "porfavor indique si tiene casa propia",
                  whitespace: true
                }
              ]
            })(
              <AutoComplete
                placeholder="nombre"
                onChange={e => this.handlerChangeOwnerhouse(Boolean(e))}
              >
                <Checkbox />
              </AutoComplete>
            )}
            )
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
const Record = Form.create({ name: "record" })(ReferenceForm);

function mapStateToProps(state: RootState) {
  return {
    Record: state.record
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
