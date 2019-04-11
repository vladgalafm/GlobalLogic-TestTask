import React, { Component } from 'react';
import './style.scss';
import '../../Styles/main.scss';
import SkillItem from './SkillItem';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'HTML5', level: 8 },
        { name: 'CSS3', level: 5 },
        { name: 'JavaScript', level: 10 },
        { name: 'ReactJS', level: 8 },
        { name: 'AngularJS', level: 8 },
      ]
    };
    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    return this.state.data.map(skill => <SkillItem data={skill} />);
  }

  render() {
    return (
      <section className="skills" id="skills">
        <div className="skills__wrapper">
          <h3 className="skills__header">
            SKILLS
          </h3>
          <div className="skills__content">
            {this.renderSkills()}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;