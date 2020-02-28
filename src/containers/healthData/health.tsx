import React from "react";
import "antd/dist/antd.css";
import { FormComponentProps } from "antd/lib/form/Form";
import { Form, Input, Card, Checkbox } from "antd";
import {
  changePastDisease,
  changeSicknesse,
  changeTreatments,
  changeVaccine
} from "./store/actions";
import HealthDataModel from "./store/model";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import RootState from "../../state";

const { TextArea } = Input;

interface Props extends FormComponentProps {}
interface Props extends FormComponentProps {
  changePastDisease(value: string): void;
  changeSicknesse(value: boolean): void;
  changeTreatments(value: string): void;
  changeVaccine(value: string): void;
}

export class HealthDataForm extends React.Component<Props, HealthDataModel> {
  state: HealthDataModel = {
    vaccine: "",
    disease: "",
    treatments: "",
    pastDiseases: ""
  };
  handleChangeDisease = (disease: string) => {
    this.props.changePastDisease(disease);
  };

  handleChangeTreatments = (treatments: string) => {
    this.props.changePastDisease(treatments);
  };
  handleChangeVaccine = (vaccine: string) => {
    this.props.changePastDisease(vaccine);
  };

  handleChangePastDesease = (pastDiseases: string) => {
    this.props.changePastDisease(pastDiseases);
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
      <Card title="Informacion de Salud">
        <Form {...formItemLayout}>
          <Form.Item label="Adolece de alguna enfermedad">
            {getFieldDecorator(
              "enfermedad",
              {}
            )(<TextArea onChange={e => this.handleChangeDisease(String(e))} />)}
          </Form.Item>
          <Form.Item label="tratamientos">
            {getFieldDecorator("tratamientos")(
              <TextArea onChange={e => this.handleChangeDisease(String(e))} />
            )}
          </Form.Item>

          <Form.Item label={<span>vacunas aplicadas</span>}>
            })(
            <TextArea onChange={e => this.handleChangeVaccine(String(e))} />)
          </Form.Item>
          <Form.Item label={<span>Enfermades que ha padecido&nbsp;</span>}>
            {getFieldDecorator("enfermedadesPadecidas")(
              <TextArea
                onChange={e => this.handleChangePastDesease(String(e))}
              />
            )}
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const HHF = Form.create({ name: "health" })(HealthDataForm);
function mapStateToProps(state: RootState) {
  return {
    Record: state.record
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    { changePastDisease, changeSicknesse, changeTreatments, changeVaccine },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HHF);
