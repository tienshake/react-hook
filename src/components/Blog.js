import useFetch from "../custom/fetch";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Blog = () => {
    let newData = []
    const { data: dataBlog } = useFetch('https://jsonplaceholder.typicode.com/posts');
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 10)
    }
    return (
        <>
            {newData && newData.length > 0 && newData.map((item, index) => {
                return (
                    <div key={index}>
                        <div><h3>Title: {item.title}</h3></div>
                        <div>{item.body}</div>
                        <button><Link to={`/blog/${item.id}`}>view detail</Link></button>
                        <hr></hr>
                    </div>
                )
            })}
        </>
    );
}

export default Blog;