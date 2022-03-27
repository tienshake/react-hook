import { useParams } from "react-router-dom";
import useFetch from "../custom/fetch";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const BlogDetail = () => {
    let { id } = useParams();
    const { data: dataBlog } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(dataBlog)
    return (
        <div>detail blog
            <h3>Title: {dataBlog.title}</h3>
            <p>Title: {dataBlog.body}</p>

        </div>
    );
}

export default BlogDetail;