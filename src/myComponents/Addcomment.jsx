import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Addcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        comment: '',
        rate: '3',
        elementId: props.asin,
      }
    };
  }

  handleRateChange = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        rate: e.target.value
      }
    });
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        comment: e.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.comment)
  
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(this.state.comment),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYmZhMjViMjYxNTAwMTk4YTY5ZDEiLCJpYXQiOjE3MDY4MDMxMDYsImV4cCI6MTcwODAxMjcwNn0.Nd53m85hDCboOWQbiPqo7w_rfR59J3N42S42IYpZ2cM",
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
this.props.updateParent()
          } else {
            throw new Error('Errore nel salvataggio del commento! :(')
          }
        })
        .catch((e) => {
          alert(e)
        })

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Voto (1-5)</InputGroup.Text>
          <Form.Control
            type="range"
            min="1"
            max="5"
            value={this.state.comment.rate}
            onChange={this.handleRateChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Commento:</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Commento"
            required
            value={this.state.comment.comment}
            onChange={this.handleCommentChange}  
          />
        </InputGroup>

        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default Addcomment;
