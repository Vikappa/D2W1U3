import React, { Component } from 'react'

class CommentsColumn extends Component {
    state = {
        asin: ''
    }

    componentDidMount() {
        this.setState({
            asin: this.props.bookDaRecensire.asin ? this.props.bookDaRecensire.asin : ''
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.bookDaRecensire.asin !== prevProps.bookDaRecensire.asin) {
            this.setState({
                asin: this.props.bookDaRecensire.asin
            })
        }
    }

    render() {
        return (
            <div id="colonnaRecensioni">
                <p className='text-white'>{this.state.asin}</p>
            </div>
        )
    }
}

export default CommentsColumn
