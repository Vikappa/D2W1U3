import ListGroup from 'react-bootstrap/ListGroup';

function CommentList(props) {
  let comment = props.comment;
  console.log(comment);

  return (
    <ListGroup.Item>
      <span style={{ color: 'blue', fontSize: '18px' }}>{comment.author}</span>: {comment.comment}
    </ListGroup.Item>
  );
}

export default CommentList;
