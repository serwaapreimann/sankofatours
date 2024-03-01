import './modal.scss';
import Data from  '../../data/browse.json';




export default function Modal() {
    return (
      <>
        <h1 className='explore--title'>Explore Africa</h1>
        <div className="modal--container">
          {Data.map((item) => (
            <div className='explore--container' key={item.id}>
              <figure className="explore--figure">
                <img className='explore--image' src={item.image} alt={item.category} />
                <figcaption className='explore--caption'>{item.category}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </>
    );
  }
  