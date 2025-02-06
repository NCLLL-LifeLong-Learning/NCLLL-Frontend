import { List } from 'antd';
import React from 'react'

export default function ResourceList(props) {
    const { dataSource } = props;
    return (
        <div>
            <List
                dataSource={dataSource}
                renderItem={(record) => {
                    <div>
                        <div>
                            <img src={record.src} alt={record.src} />
                        </div>
                        <div>
                            <h1>{record.title}</h1>
                            <div>
                                <div>
                                    Source:
                                    <span>{record.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }}
            />
        </div>
    )
}
