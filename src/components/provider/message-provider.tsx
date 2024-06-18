import React, { useEffect } from 'react';
import { message as _message } from 'antd';
import { useAppSelector } from 'store';
type IMessageProviderProps = {
	children: React.ReactNode;
};

const MessageProvider = ({ children }: IMessageProviderProps) => {
    const {status, message, logs} = useAppSelector(state => state.app.alert);
	const messageOption = {
        success: _message.success,
        info: _message.info,
        warning: _message.warning,
        error: _message.error
    };

    useEffect(() => {
        if(message !== "N/A") {
            messageOption[status](message, 0.8)
        }
    },[logs])

	return <>{children}</>;
};

export default MessageProvider;
