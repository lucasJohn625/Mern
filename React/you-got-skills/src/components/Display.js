
import React from 'react';

const Display = (props) => {
    const {skillList } = props;
  return (
    <div>
        Display Skill List for {props.name}
        {
            skillList.map((skill, skillListIndex)=> (
              <p key= {skillListIndex}>
                { skill.skillName }
                            <br />
                  {
                  skill.superSkilled ?
                    <span>They are super skilled</span>
                    : <span>They are okay at this </span>
                            }
                        </p>
                    ))
            }
    </div>
  );
}

export default Display;
 