import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CommentList(props) {
  const { comment, author, rate, createdAt, updatedAt } = props.comment
  const dataDaUsare = updatedAt || createdAt // se non c'è updatedAt, usa createdAt
  const displayDate = new Date(dataDaUsare).toLocaleDateString("it-IT", {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })

  const renderStars = (rate) => {
    let stars = []
    for (let i = 0; i < rate; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: 'gold' }} />)
    }
    return stars
  }

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div className='d-flex flex-column align-items-start d-md-inline'>
          <span className="text-primary fw-bold" style={{ fontSize: '18px' }}>{author}:</span> {comment}
        </div>
        <div className="d-none d-md-flex flex-column align-items-end">
          <div className="text-muted" style={{ fontSize: '14px' }}>{displayDate}</div>
          <div>{renderStars(rate)}</div>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default CommentList

