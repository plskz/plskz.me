import { useLanyard } from 'use-lanyard';
import Socials from './components/Socials';

const discordID = '90431685472038912';

const App = () => {
  const { data: activity } = useLanyard(discordID);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='card w-[32rem] bg-base-100 shadow-2xl'>
        <figure className='px-10 pt-10'>
          {!activity ? (
            <div className='avatar animate-pulse indicator'>
              <span className='indicator-item indicator-bottom badge right-5 bottom-6 w-7 h-7 border-4 border-base-100 bg-grey-600' />
              <div className=' bg-gray-300 w-32 h-32 mask mask-hexagon-2' />
            </div>
          ) : (
            <div className='avatar indicator'>
              <span
                className={`indicator-item indicator-bottom badge right-5 bottom-6 w-7 h-7 border-4 border-base-100 ${
                  activity.discord_status === 'offline'
                    ? 'bg-grey-600'
                    : 'bg-green-600'
                }`}
              />
              <img
                className='mask mask-hexagon-2'
                src={`https://cdn.discordapp.com/avatars/${discordID}/${activity.discord_user.avatar}`}
                alt={activity.discord_user.username}
              />
            </div>
          )}
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700'>
            Palskie
          </h2>
          <p>Chaeyoung</p>
          <div className='w-full h-1/4 mt-5 lg:mt-3 md:mt-3'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
