import React from 'react';
import style from './SocialNetworks.module.css';
import facebook from '../../../../../assets/facebook.png';
import github from '../../../../../assets/github.png';
import instagram from '../../../../../assets/instagram.png';
import twitter from '../../../../../assets/twitter.png';
import youtube from '../../../../../assets/youtube.png';
import vk from '../../../../../assets/vk.png';
import website from '../../../../../assets/website.png';

const SocialNetworks = (props) => {
  const socialLink = (key, images, alt) => {
    return (
      <a
        key={key}
        href={`${props.contacts[key]}`}
        className={style.info_contact_a}
        target='_blank'
        rel='noreferrer'
      >
        <img src={images} alt={alt} />
      </a>
    );
  };
  return (
    <div className={style.info_contact}>
      {Object.keys(props.contacts).map((key) => {
        if (props.contacts[key]) {
          switch (key) {
            case 'github':
              return socialLink(key, github, 'github');
            case 'facebook':
              return socialLink(key, facebook, 'facebook');
            case 'vk':
              return socialLink(key, vk, 'vk');
            case 'youtube':
              return socialLink(key, youtube, 'youtube');
            case 'website':
              return socialLink(key, website, 'website');
            case 'twitter':
              return socialLink(key, twitter, 'twitter');
            case 'instagram':
              return socialLink(key, instagram, 'instagram');
            default:
              return null;
          }
        }
        return null;
      })}
    </div>
  );
};

export default SocialNetworks;
