import react from 'react';
import { Avatar } from 'antd';
import classes from './styles.module.scss';
export const MemberCard = ({ name, id, src, role }) => {
  return (
    <div className={classes.cardwrapper}>
      <Avatar size={160} src={src} className={classes.avatar} />
      <div className={classes.card}>
        <h3 className={classes.name}>{name}</h3>
        <h3>{id}</h3>
      </div>
    </div>
  );
};
