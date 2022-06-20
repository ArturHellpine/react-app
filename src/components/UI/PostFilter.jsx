import React from 'react';
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
                placheholder='Поиск..'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'По назві'},
                    {value: 'body', name: 'По опису'}
                ]}
                defaultValue={'Сортувати по'}
            />
        </div>
    );
};

export default PostFilter;