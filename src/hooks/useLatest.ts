import { useRef } from 'react';

/**
 * https://juejin.cn/book/7230622711905517605/section/7231324116094025765?enter_from=course_center&utm_source=course_center#heading-1
 * 获取最新value
 * @template T
 * @param {T} value
 * @return {*}
 */
const useLatest = <T>(value: T) => {
    //使用UseRef缓存数据
    const ref = useRef(value);
    ref.current = value;
    return ref;
};

export default useLatest;
