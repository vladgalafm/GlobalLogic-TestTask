import React from 'react';
import './../style.scss';
import '../../../Styles/main.scss';

const SkillItem = (props) => {
  const level = [];

  for (let i = 0; i < 10; i++) {
    level.push(<div className={`skills__skill-level ${(i < props.data.level) && 'skills__skill-level--actual'}`}></div>);
  }

  return (
    <div className="skills__skill-item">
      <p className="skills__skill-name">{props.data.name}</p>
      <div>
        {level}
      </div>
      <p className="skills__skill-level-numeric">{props.data.level}/10</p>
    </div>
  );
};

export default SkillItem;