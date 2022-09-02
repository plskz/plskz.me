import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';
import { config } from '../utils/config';
import Icon from './Icon';

const Socials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e: any) => {
    navigator.clipboard.writeText(e.target.closest('[data-tip]').dataset.tip);
    toast.success('Copied to clipboard!', {
      duration: 2000,
    });
  };

  const icons = config.links.map((icon) => {
    if (icon.type == 'url') {
      return (
        <div
          className='text-center items-center cursor-pointer'
          key={icon.slug}
          onMouseLeave={() => {
            setIsMounted(true);
          }}
        >
          <a href={icon.link} target='_blank' rel='noopener noreferrer'>
            <Icon icon={icon.slug} />
          </a>
        </div>
      );
    } else if (icon.type == 'hover') {
      return (
        <div
          className='text-center items-center cursor-pointer'
          key={icon.slug}
          onMouseLeave={() => {
            setIsMounted(false);
          }}
        >
          <a data-tip={icon.text} key={icon.slug} onClick={handleClick}>
            <Icon icon={icon.slug} />
          </a>
          {isMounted && <ReactTooltip place='top' type='dark' effect='float' />}
        </div>
      );
    } else {
      return;
    }
  });
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      <Toaster
        toastOptions={{
          style: {
            background: `${config.textColor}`,
          },
        }}
      />
      {icons}
    </div>
  );
};

export default Socials;
