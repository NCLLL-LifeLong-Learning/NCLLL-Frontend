import { List } from 'antd';
import React from 'react'
import RosourceTypeFile from "./RosourceTypeFile";
import ResourceTypeDetail from "./ResourceTypeDetail";
import { RESOURCE_TYPE_VIEW } from '../../../../constants/Bridge';

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
                renderItem={(record) => {
                    const typeDetail = Object.keys(RESOURCE_TYPE_VIEW)
                    if (typeDetail.includes(record.type)) {
                        return <ResourceTypeDetail record={record} />
                    } else {
                        return <RosourceTypeFile record={record} />
                    }
                }}
            />
        </div>
    )
}
