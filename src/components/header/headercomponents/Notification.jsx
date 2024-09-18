import { Avatar, Badge } from 'antd'
import React from 'react'
import { RiNotificationLine } from 'react-icons/ri'

const Notification = () => {
    return (
        <Badge count={5} size='small'>
            <Avatar icon={<RiNotificationLine />} shape="square" size="small" />
        </Badge>
    )
}

export default Notification