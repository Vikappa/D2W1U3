import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-regular fa-trash-can" />
function CommentList(props) {
  const { comment, author, rate, createdAt, updatedAt } = props.comment;
  const formattedDate = updatedAt || createdAt;

  // Converti la data in formato leggibile
  const displayDate = new Date(formattedDate).toLocaleDateString("it-IT", {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  // Genera le stelle in base al rate
  const renderStars = (rate) => {
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="text-warning" />);
    }
    return stars;
  };

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center position-relative">
        <div className='d-flex flex-column align-items-start'>
          <span className="text-primary fw-bold" style={{ fontSize: '18px' }}>{author}:</span> {comment}
        </div>
        <div className="d-none d-lg-flex flex-column align-items-end  justify-content-between">
          <div className="text-muted d-flex" style={{ fontSize: '14px' }}>{displayDate}</div>
          <div className='d-flex align-items-center justify-content-between'> 
          <FontAwesomeIcon icon={faTrashCan} className='btn btn-sm btn-outline-danger buttonEliminaLg'/>
            <div className='container-fluid ms-auto'>
            {renderStars(rate)}
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-outline-danger buttonEliminaSm">
        <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </ListGroup.Item>
  );
}

export default CommentList;
