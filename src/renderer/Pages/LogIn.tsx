import React from 'react';
// import bgImage from '../../../assets/img/login-bg.jpg';
import { SiAnilist } from 'react-icons/si';
import Button from '../Components/Button';
import { useMainUtils } from '../Components/Contexts/MainUtilsContext';

export default function LogIn() {
  const { openUrl } = useMainUtils();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="shadow-md w-[360px] bg-background-main border border-background-light rounded-md flex justify-center gap-10 px-5 py-10 text-text-main flex-col text-center items-center">
        <span className="text-xl">Login</span>
        <Button
          variant="gradient"
          onClick={() =>
            openUrl(
              'https://anilist.co/api/v2/oauth/authorize?client_id=19640&response_type=token',
            )
          }
          Icon={SiAnilist}
        >
          Login with AniList
        </Button>
      </div>
    </div>
  );
}

// {
//   MediaListCollection(userId: 6058291, type: ANIME, sort: SCORE_DESC) {
//     lists {
//       entries {
//         media {
//           title {
//             english
//           }
//         }
//         score
//       }
//     }
//   }
// }
