/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import TranslatedMessage, { formatMessage } from 'components/TranslatedMessage';
import formMessages from 'forms/messages';

import '../style.scss';

const FormItem = Form.Item;

function TextInput(props) { // eslint-disable-line react/prefer-stateless-function
  // const { isRequired, input, type, hasLabel = true, messages, placeholder, className, meta: { dirty, touched, error }, isFieldArray = false, hasLabelOverflow = true } = props;
  const { input, hasLabel = true, placeholder, formItemLayout, type, iconName, intl } = props;
  const label = hasLabel ? (<TranslatedMessage
    messages={formMessages}
    messageId={input.name}
    tagName="span"
  />)
    : '';
  return (
    <FormItem
      label={label}
      {...formItemLayout}
    >
      <Input
        prefix={<Icon type={iconName} />}
        type={type === 'passwordInput' ? 'password' : null}
        placeholder={formatMessage(intl, formMessages, placeholder)}
        onChange={input.onChange}
      />
    </FormItem>
  );
}

TextInput.propTypes = {
  // isRequired: PropTypes.bool,
  formItemLayout: PropTypes.object,
  input: PropTypes.object,
  type: PropTypes.string,
  iconName: PropTypes.string,
  hasLabel: PropTypes.bool,
  // messages: PropTypes.object,
  placeholder: PropTypes.string,
  intl: PropTypes.object,
  // className: PropTypes.string,
  // meta: PropTypes.object,
  // hasLabelOverflow: PropTypes.bool,
  // isFieldArray: PropTypes.bool,
};

export default injectIntl(TextInput);
