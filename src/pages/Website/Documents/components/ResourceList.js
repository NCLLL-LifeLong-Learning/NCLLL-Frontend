import { List } from 'antd';
import React from 'react'
import RosourceType from "./RosourceType";

export default function ResourceList(props) {
    const { dataSource, pageSize, currentPage, setCurrentPage } = props;

    return (
        <div>
            <List
                pagination={{
                    pageSize: pageSize,
                    current: currentPage,
                    onChange: (page) => setCurrentPage(page)
                }}
                dataSource={dataSource}
                grid={{ gutter: [0, 20], column: 1 }}
                renderItem={(record) => <RosourceType record={record} />}
            />
        </div>
    )
}
