import {connect} from "react-redux";
import Sample from "../components/Sample";
import {getPost,getUsers} from "../modules/sample";
import React, { useEffect } from "react";
import loading from "../modules/loading";

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
})=>{
    //클래스 형태 컴포넌트였다면 componentDidMount
    useEffect(()=>{
        getPost(1);
        getUsers(1);
    },[getPost,getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({sample}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);


