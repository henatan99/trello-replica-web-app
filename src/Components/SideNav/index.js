import React from "react";
import './index.css';

const SideNav = () => {
    const expandIcon = "data:image/png;base64,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";
    
    return (
        <nav class="sidebar_wrapper">
            <button class="button_buttonwrapper button_white">
                <img class="button_icon" src="images/user-blue.022f390c.png" />
            </button>
            <button class="button_buttonwrapper button_transparent">
                <img class="button_icon" src={expandIcon} />
            </button>
        </nav>
    )
}

export default SideNav;