import React from 'react';
import CSE from './edProfile/cse';
import Special from './edProfile/special';
import Free from './edProfile/free';
import HeaderCse from './edProfile/header_cse';
import HeaderSpecial from './edProfile/header_special';
import HeaderFree from './edProfile/header_free';

function EdProfile() {
  return (
    <div class="ijgWJf">
     <HeaderCse />
     <CSE />
     <HeaderSpecial />
     <Special />
     <HeaderFree />
     <Free />
    </div>
  )
}

export default EdProfile;