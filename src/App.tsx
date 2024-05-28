import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Calendar } from 'antd-mobile';

import { FIND, UPDATE } from './graphql/demo';

import styles from './App.module.less';

const App = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const { loading, data } = useQuery(FIND, {
        variables: {
            id: '94d5ecbb-369d-48b7-84a9-cec4b63016ab',
        },
    });

    const [update] = useMutation(UPDATE);

    const onChangeNameHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
        setName(v.target.value);
    };

    const onChangeDescHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(v.target.value);
    };

    const onClickHandler = () => {
        update({
            variables: {
                id: '94d5ecbb-369d-48b7-84a9-cec4b63016ab',
                params: {
                    name,
                    desc,
                },
            },
        });
    };

    return (
        <div className={styles.container}>
            <Calendar />

            <Button color="primary">地方</Button>
            <p>
                data:
                {JSON.stringify(data)}
            </p>
            <p>
                loading:
                {`${loading}`}
            </p>
            <p>
                name:
                <input onChange={onChangeNameHandler} />
            </p>
            <p>
                desc:
                <input onChange={onChangeDescHandler} />
            </p>
            <p>
                <button type="button" onClick={onClickHandler}>
                    更新
                </button>
            </p>
        </div>
    );
};

export default App;
