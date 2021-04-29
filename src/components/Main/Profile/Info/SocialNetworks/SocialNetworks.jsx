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
  return (
    <div className={style.info_contact}>
      {Object.keys(props.contacts).map((key) => {
        if (props.contacts[key]) {
          switch (key) {
            case 'github':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={github} alt='github' />
                </a>
              );
            case 'facebook':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={facebook} alt='facebook' />
                </a>
              );
            case 'vk':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={vk} alt='vk' />
                </a>
              );
            case 'youtube':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={youtube} alt='youtube' />
                </a>
              );
            case 'website':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={website} alt='website' />
                </a>
              );
            case 'twitter':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={twitter} alt='twitter' />
                </a>
              );
            case 'instagram':
              return (
                <a href={`${props.contacts[key]}`} className={style.info_contact_a} target='_blank'>
                  <img src={instagram} alt='instagram' />
                </a>
              );
          }
        }
      })}
      {/* <span className=''>Социльные сети не указанны...</span> */}
    </div>
  );
};

export default SocialNetworks;
