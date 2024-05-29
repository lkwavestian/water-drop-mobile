import { useMutation } from '@apollo/client';
import { Button, Form, Input, ImageUploader } from 'antd-mobile';
import { useEffect } from 'react';
import { UPDATE } from './graphql/demo';
import { useUploadOSS } from './hooks/useUploadOss';

const App = () => {
    const uploadHandler = useUploadOSS();

    const [update] = useMutation(UPDATE);

    useEffect(() => {
        document.documentElement.setAttribute('data-prefers-color-scheme', 'dark');
    }, []);

    const onClickHandler = (v: any) => {
        update({
            variables: {
                id: 'cb71e40d-9f15-40ef-a137-1acaa38831f4',
                params: {
                    ...v,
                },
            },
        });
    };

    return (
        <div>
            <Form
                layout="horizontal"
                onFinish={onClickHandler}
                footer={
                    <Button block type="submit" color="primary" size="large">
                        提交
                    </Button>
                }
            >
                <Form.Item name="name" label="姓名">
                    <Input />
                </Form.Item>
                <Form.Item name="desc" label="描述">
                    <Input />
                </Form.Item>
                <Form.Item name="actor" label="头像">
                    <ImageUploader upload={uploadHandler} />
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;
