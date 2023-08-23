import React, { Component } from "react";
import { InputAdornment } from "@material-ui/core";
import ToggleIcon from "material-ui-toggle-icon";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextValidator } from "react-material-ui-form-validator";
class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: true
    };
  }

  render() {
    return (
      <TextValidator
        {...this.props}
        type={this.state.on ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => this.setState(state => ({ on: !this.state.on }))}
              >
                <ToggleIcon
                  on={this.state.on}
                  onIcon={<Visibility />}
                  offIcon={<VisibilityOff />}
                />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
}

export default PasswordField;
