import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CommentList from './CommentList';

class CommentArea extends Component {

    state = {
        commentListArray: [],
        isLoading: true,
        isError: false
    }

    fetchComments = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYmZhMjViMjYxNTAwMTk4YTY5ZDEiLCJpYXQiOjE3MDY4MDMxMDYsImV4cCI6MTcwODAxMjcwNn0.Nd53m85hDCboOWQbiPqo7w_rfR59J3N42S42IYpZ2cM"
                }
        })
        .then((response) => {
            if (response.ok) {
                // Procedo all'estrazione del json dalla response
                return response.json()
            } else {
                throw new Error('Errore nella ricezione dati dal server')
            }
        })
        .then((commentList) => {
            this.setState({ commentListArray: commentList, isLoading: false })
        })
        .catch((err) => {
            console.error(err);
            this.setState({ isError: true, isLoading: false })
        })
    }

    componentDidMount() {
        this.fetchComments();
    }

    render() {
        return (
            <ListGroup>
                {this.state.commentListArray.map((comment, index) => (
                    <CommentList key={index} comment={comment} />
                ))}
            </ListGroup>
        );
    }
}

export default CommentArea;
