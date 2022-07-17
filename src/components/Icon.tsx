import GetIcon from '../utils/GetIcons';
import { config } from '../utils/config';

export default function Icon({ icon }: { icon: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${GetIcon(icon)}` }}
      className='w-[30px] h-[30px] hover:scale-[1.15] duration-300 ease-in-out'
      style={{ fill: `${config.iconColor}` }}
    ></div>
  );
}
