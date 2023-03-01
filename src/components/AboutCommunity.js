import React from "react";

export const AboutCommunity = (props) => {
    const currentSubreddit = props.currentSubreddit;
    const created = new Date(currentSubreddit.created_utc * 1000);

    const formatSubscribers = (subscribers) => {
        if(subscribers < 1000){
            return subscribers;
        }else if(subscribers < 1000000){
            return (subscribers / 1000).toFixed(1) + 'k';
        }else{
            return (subscribers / 1000000).toFixed(1) + 'm';
        }
    }

    const formatMonth = (monthNumber) => {
        switch(monthNumber){
            case 1:
                return 'Jan';
            case 2:
                return 'Feb';
            case 3:
                return 'Mar';
            case 4:
                return 'Apr';
            case 5:
                return 'May';
            case 6:
                return 'Jun';
            case 7:
                return 'Jul';
            case 8:
                return 'Aug';
            case 9:
                return 'Sep';
            case 10:
                return 'Oct';
            case 11:
                return 'Nov';
            default:
                return 'Dic';
        }
    }

    return (
        <div id="about-community">
            <p className="bold-text">About Community</p>
            <hr/>
            <p>{currentSubreddit.public_description}</p>
            <p id="community-created"><span className="material-symbols-outlined">overview</span><span className="gray-text">Created {formatMonth(created.getUTCMonth() + 1)} {created.getUTCDate()}, {created.getUTCFullYear()}</span></p>
            <hr/>
            <p><span className="bold-text">{formatSubscribers(currentSubreddit.subscribers)}</span><br/><span className="gray-text">Subscribers</span></p>
        </div>
    )

}