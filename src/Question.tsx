import *  as React from 'react';
import Option from './Option';
import RestartButton from './RestartButton';
import './Question.css';
import Link from './Link';

interface Props {
  options?: Array<string>;
  questionText: string;
  next?: Array<number>;
  links?: Array<{text: string, url: string}>;
  optionClickFn(next: number): void;
  restartClickFn(): void;
}

class Question extends React.Component<Props> {
  public render() {
    const {
      options = [],
      questionText,
      optionClickFn,
      restartClickFn,
      next = [],
      links = [],
    } = this.props;

    const isResult = options.length < 1;
    const hasLinks = links.length > 0;

    return (
      <div className={`Question slideIn`} >
        {isResult ?
          <span>
            <div className="Result">
              {questionText}
            </div>
          </span>
          :
          <div>{questionText}</div>
          }
        <div className="Options">
          {options.map((option: string, index: number) =>
            <Option text={option} key={index} onClick={(e) => optionClickFn(next[index])}/>
          )}
        </div>
        {
          hasLinks ? (
            <div className="Links">
              {links.map(({ url, text }) => <Link url={url} text={text}/> )}
            </div>
          )
          : null
        }
        {
          isResult ?
          <RestartButton onClick={() => restartClickFn()} />
          : null
        }
      </div>
    );
  }
}

export default Question;
