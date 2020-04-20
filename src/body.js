import React from 'react';
import './body.css';
import EdHeader from './edHeader';
import EdProfile from './edProfile';
import EdHighlight from './edHighlight';

function Body() {
    return (
        <div class="duIoak">
            <div class="krSLNl">
                <EdHeader />
                <div class="grid-child">
                <EdProfile/>
                </div>
                <EdHighlight />
            </div>
        </div>
    );
}

export default Body;