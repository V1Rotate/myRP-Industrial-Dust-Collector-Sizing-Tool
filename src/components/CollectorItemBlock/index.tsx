import { Link } from 'react-router-dom';

type CollectorItemBlockProps = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export const CollectorItemBlock: React.FC<CollectorItemBlockProps> = ({
  id,
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div className='collectorItem-block-wrapper'>
      <div className='collectorItem-block'>
        <Link
          key={id}
          to={`/collectorItems/${id}`}
          className='collectorItem-block_link'
        >
          <img
            className='collectorItem-block_image itemImg'
            src={imageUrl}
            alt='Dust Collector'
          />
          <h4 className='collectorItem-block__title collectorItem-title'>
            {title}
          </h4>
          <h5 className='subTitle'>{subtitle}</h5>
        </Link>
      </div>
    </div>
  );
};
