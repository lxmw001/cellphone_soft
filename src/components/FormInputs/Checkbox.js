import uncheckImage from 'assets/images/checkbox-1.svg';
import checkImage from 'assets/images/checkbox-2.svg';
import cx from 'classnames';
import React, { Component } from 'react';

class Checkbox extends Component {

  render() {
    let {
      input,
      label,
      disabled
    } = this.props;

    return (
      <label className={cx("checkbox", {
        checked: input.checked,
        disabled: disabled
      })}>
        <span className="icons">
          <img className="first-icon" src={uncheckImage} width={17} alt="" />
          <img className="second-icon" src={checkImage} width={17} alt="" />
        </span>
        <input {...input} type="checkbox" data-toggle="checkbox" disabled={disabled} />
        {label}
      </label>
    );
  }
}

export default Checkbox;