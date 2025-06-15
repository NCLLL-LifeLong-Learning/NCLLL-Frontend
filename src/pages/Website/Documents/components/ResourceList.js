import { List } from 'antd';
import React from 'react'
import RosourceTypeFile from "./RosourceTypeFile";
import ResourceTypeDetail from "./ResourceTypeDetail";
// import { RESOURCE_TYPE_VIEW } from '../../../../constants/Bridge';
import RosourceTypeDetailLoading from './ResourceTypeDetailLoading';
import { RESOURCE_TYPE_VIEW } from '../../../../constants/Bridge';

export default function ResourceList(props) {
    const { refetch, loading, dataSource, pageSize, total, currentPage, setCurrentPage } = props;

    return (
        <div>
            <List
                pagination={{
                    pageSize: pageSize,
                    current: currentPage,
                    total: total,
                    onChange: (page) => setCurrentPage(page)
                }}
                dataSource={dataSource}
                grid={{ gutter: [0, 20], column: 1 }}
                renderItem={(record) => {
                    const typeDetail = Object.keys(RESOURCE_TYPE_VIEW)
                    if (loading) {
                        return <RosourceTypeDetailLoading />
                    }
                    if ("content" === record?.contentType || typeDetail.includes(record?.category)) {
                        return <ResourceTypeDetail refetch={refetch} loading={loading} record={record} />
                    } else {
                        return <RosourceTypeFile refetch={refetch} record={record} />
                    }
                }}
            />
        </div>
    )
}
