import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullCollectorItem: React.FC = () => {
  const [collectorItem, setCollectorItem] = React.useState<{
    drawingUrl: string;
    title: string;
    subtitle: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCollectorItem() {
      try {
        const { data } = await axios.get(
          'https://6340b21416ffb7e275c45dec.mockapi.io/collectorItems/' + id
        );
        setCollectorItem(data);
      } catch (error) {
        alert('Error with fetching RP Dust Collector Item');
        navigate('/selection');
      }
    }

    fetchCollectorItem();
  }, []);

  if (!collectorItem) {
    return <>Loading ...</>;
  }

  return (
    <div className='fullCollectorItem-container'>
      <img
        className='fullCollectorItem-container_img'
        src={collectorItem.drawingUrl}
        alt='Dust Collector Item'
      />
      <h2 className='fullCollectorItem-container_title'>
        {collectorItem.title}
      </h2>

      <Link to='/selection'>
        <button className='fullCollectorItem-container_btn'>
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullCollectorItem;
