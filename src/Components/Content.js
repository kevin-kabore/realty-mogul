import React from 'react';

import Panel from './Panel';
import '../styles/Content.css'


const Content = ({contentA, contentB, displayA, togglePanel}) => (
  <div className="Content">
    <div onClick={() => togglePanel()} className={displayA ? "PanelA" : "PanelA hide-text"}>
      <Panel  content={displayA ? contentA : ''}/>
    </div>
    <div onClick={() => togglePanel()} className={displayA ? "PanelB hide-text" : "PanelB"}>
      <Panel  content={displayA ? '' : contentB}/>
    </div>
  </div>
)



export default Content;
