import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [answer, setAnswer] = useState("symbolQuestion");

  const handleAnswer = (iconType) => {
    setAnswer(iconType) 
  }
  return (
    <div className="question">
      <QuestionBody 
        iconType={answer} 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleAnswer}/>
        <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleAnswer}/>
        <Option type="smileyNeutral" text="Nevím" onSelected={handleAnswer}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleAnswer}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleAnswer}/>
      </div>
    </div>
  );
};
