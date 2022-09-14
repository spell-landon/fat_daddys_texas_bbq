import { Fragment } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SOCIAL_MEDIA = [
  {
    name: 'Facebook',
    icon: (
      <Fragment>
        <FacebookRoundedIcon fontSize='large' />
      </Fragment>
    ),
    path: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    icon: (
      <Fragment>
        <InstagramIcon fontSize='large' />
      </Fragment>
    ),
    path: 'https://www.instagram.com',
  },
];
