import { createElement, Component } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import isComponentOfType from '~/new-components/utils/is-component-of-type'

class TableRowCell extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    innerRef: PropTypes.func,
    value: PropTypes.any
  }

  render() {
    const {
      align,
      children,
      className,
      innerRef,
      disabled,
      ...other
    } = this.props

    return createElement(
      'td',
      {
        ...other,
        className: cn(
          'table-cell',
          {
            right: align === 'right',
            center: align === 'center',
            disabled
          },
          className
        ),
        ref: innerRef
      },
      !isComponentOfType('div', children)
        ? createElement('div', {}, children)
        : children
    )
  }
}

class TableHeadCell extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    innerRef: PropTypes.func,
    value: PropTypes.any
  }

  render() {
    const {
      align,
      children,
      className,
      innerRef,
      disabled,
      ...other
    } = this.props

    return createElement(
      'th',
      {
        ...other,
        className: cn(
          'head-cell',
          {
            right: align === 'right',
            center: align === 'center',
            disabled
          },
          className
        ),
        ref: innerRef
      },
      !isComponentOfType('div', children)
      ? createElement('div', {}, children)
      : children
    )
  }
}

export { TableRowCell, TableHeadCell }
