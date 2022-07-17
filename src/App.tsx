import axios from 'axios';
import { useEffect, useState } from 'react';
import Socials from './components/Socials';

interface User {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: string | null;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  banner_color: string | null;
  accent_color: string | null;
  bio: string;
}

const discordID = '90431685472038912';

const App = () => {
  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dcdn.dstn.to/profile/${discordID}`).then((res) => {
      const data: User = res.data.user;
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='card w-[32rem] bg-base-100 shadow-2xl'>
        <figure className='px-10 pt-10'>
          {loading ? (
            <div className='avatar animate-pulse'>
              <div className=' bg-gray-300 w-32 h-32 mask mask-decagon' />
            </div>
          ) : (
            <div className='avatar'>
              <img
                className='mask mask-decagon'
                src={`https://cdn.discordapp.com/avatars/${discordID}/${data?.avatar}`}
              />
            </div>
          )}
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700'>
            Palskie
          </h2>
          <p>{data?.bio}</p>
          <div className='w-full h-1/4 mt-5 lg:mt-3 md:mt-3'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
