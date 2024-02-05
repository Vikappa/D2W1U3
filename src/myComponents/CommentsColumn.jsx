import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

class CommentsColumn extends Component {
  state = {
    asin: ''
  };

  componentDidMount() {
    this.setState({
      asin: this.props.bookDaRecensire ? this.props.bookDaRecensire : ''
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.bookDaRecensire.asin !== prevProps.bookDaRecensire.asin) {
      this.setState({
        asin: this.props.bookDaRecensire.asin
      })
    }

  }

  render() {
    const { asin } = this.props.bookDaRecensire;
    return (
      <div id="colonnaRecensioni" className={`${asin ? "d-inline col-xs-3" : "col-xs-0 d-none"}`}>
        <h1>{this.props.bookDaRecensire.title}</h1>
        <img src={this.props.bookDaRecensire.img} alt='book cover'></img>
        <CommentArea asin={asin}></CommentArea>
      </div>
    );
  }
}

export default CommentsColumn;
