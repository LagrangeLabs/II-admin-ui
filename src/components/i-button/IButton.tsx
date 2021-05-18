import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import type { ButtonProps } from 'antd/lib/button';

import './index.less';
export interface IButtonProps extends Omit<ButtonProps, 'size'> {
  /** 设置按钮的样式名 */
  className?: string;
  /** 设置按钮的大小 */
  size?:
    | 'xl'
    | 'default'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs'
    | 'xss'
    | ButtonProps['size'];
}

export const IButton: FC<IButtonProps> = (props) => {
  const { size, className, children, ...restProps } = props;

  const buttonCls = classNames('ii-button', className);

  const mapSize = new Map();
  mapSize.set('xl', ['20px', '40px']);
  mapSize.set('default', ['20px', '36px']);
  mapSize.set('lg', ['15px', '32px']);
  mapSize.set('md', ['14px', '30px']);
  mapSize.set('sm', ['14px', '28px']);
  mapSize.set('xs', ['9px', '26px']);
  mapSize.set('xss', ['9px', '24px']);
  mapSize.set('large', ['20px', '40px']);
  mapSize.set('middle', ['20px', '36px']);
  mapSize.set('small', ['9px', '22px']);

  const style = useMemo(
    () => ({
      height: mapSize.get(size)?.[1] || mapSize.get('default')?.[1],
      padding:
        `0 ${mapSize.get(size)?.[0]}` || `0 ${mapSize.get('default')?.[0]}`,
      ...restProps.style,
    }),
    [size],
  );

  return (
    <Button
      data-testid="test-button"
      className={buttonCls}
      {...restProps}
      style={style}
    >
      {children}
    </Button>
  );
};

export default IButton;
