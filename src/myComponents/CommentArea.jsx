import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CommentList from './CommentList';
import Addcomment from './Addcomment'
class CommentArea extends Component {

    state = {
        commentListArray: [],
        isLoading: true,
        isError: false
    }

    setCommentListArray = (commentListArray) => {
        this.setState({ commentListArray: commentListArray })
    }   

    fetchComments = () => {
        console.log(this.props )
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYmZhMjViMjYxNTAwMTk4YTY5ZDEiLCJpYXQiOjE3MDY4MDMxMDYsImV4cCI6MTcwODAxMjcwNn0.Nd53m85hDCboOWQbiPqo7w_rfR59J3N42S42IYpZ2cM"
                }
        })
        .then((response) => {
            if (response.ok) {
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

componentDidUpdate(prevProps) {
    if (this.props!== prevProps) {
        this.fetchComments()
    }}

    render() {
        return (
            <ListGroup>
                {this.state.commentListArray.map((comment, index) => (
                    <CommentList key={index} comment={comment} updateParent={this.fetchComments}/>
                ))}
                    <ListGroup.Item>
                    <Addcomment asin={this.props.asin} commentListArray={this.state.commentListArray} setCommentListArray={this.setCommentListArray} updateParent={this.fetchComments} /> 
                    </ListGroup.Item>
            </ListGroup>
        )
    }
}

export default CommentArea;
