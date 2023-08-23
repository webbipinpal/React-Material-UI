import React from "react";
import red from "@material-ui/core/colors/red";
import Checkbox from "@material-ui/core/Checkbox";
import { ValidatorComponent } from "react-material-ui-form-validator";

const red300 = red["500"];

const styles = {
  contError: {
    position: "relative"
  },
  errorText: {
    top: 0,
    fontSize: "12px",
    color: red300,
    position: "absolute",
    width: "200px"
  }
};

class CheckboxValidatorElement extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      value,
      validatorListener,
      ...rest
    } = this.props;
    const { isValid } = this.state;
    return (
      <div>
        <Checkbox
          {...rest}
          className={!isValid ? "CheckErroe" : null}
          ref={r => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <div style={styles.contError}>
        <div style={styles.errorText}>{this.getErrorMessage()}</div>
      </div>
    );
  }
}

export default CheckboxValidatorElement;
