import { useEffect, useRef } from 'react';
import useLatest from './useLatest';

/**
 * 组件卸载时运行
 * @param {() => void} fn
 */
const useUnMount = (fn: () => void) => {
    const fnRef = useLatest(fn);
    useEffect(() => {
        return fnRef.current();
    }, []);
};

export default useUnMount;
