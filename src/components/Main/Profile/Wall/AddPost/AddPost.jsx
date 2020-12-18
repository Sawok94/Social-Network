import React, { createRef } from 'react';
import style from '../AddPost/AddPost.module.css';
import border from '../../../Main.module.css';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import TextArea from '../../../../../utils/OverallComponents/TextArea/TextArea';
import Button from '../../../../../utils/OverallComponents/Button/Button';

const AddPost = (props) => {
  const ref = React.createRef();

  return (
    <div className={`${style.wall__form} ${border.wrapper}`}>
      <Avatar style='avatar__small' />
      <TextArea place='поста' ref={ref} />
      <Button btn='Опубликовать' value={ref} />
    </div>
  );
};

export default AddPost;
