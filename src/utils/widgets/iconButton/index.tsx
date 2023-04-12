import React, { FC, ReactNode } from 'react'
import S from './iconButton.styles';

type IconButtonPropsType = {
    children: ReactNode
}

const IconButton: FC<IconButtonPropsType> = ({ children }) => {
    return (
        <S.IconButton>{children}</S.IconButton>
    )
}

export default IconButton