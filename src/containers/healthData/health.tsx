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
  changeSicknesse(value: string): void;
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
  handleChangeDisease = (event: any) => {
    let disease = event.target.value;
    this.props.changePastDisease(disease);
  };

  handleChangeTreatments = (event: any) => {
    let treatments = event.target.value;
    this.props.changePastDisease(treatments);
  };
  handleChangeVaccine = (event: any) => {
    let vaccine = event.targe.value;
    this.props.changePastDisease(vaccine);
  };

  handleChangePastDesease = (event: any) => {
    let pastDiseases = event.target.value;
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
            )(<TextArea onChange={e => this.handleChangeDisease(e)} />)}
          </Form.Item>
          <Form.Item label="tratamientos">
            {getFieldDecorator("tratamientos")(
              <TextArea
                onChange={e => this.handleChangeTreatments(String(e))}
              />
            )}
          </Form.Item>

          <Form.Item label={<span>vacunas aplicadas</span>}>
            <TextArea onChange={e => this.handleChangeVaccine(String(e))} />
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
