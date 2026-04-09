//  ============================= Module 07 Exercise 03 Side 45 =============================
import React, { createContext, useState, useContext } from "react";
const EmojiContext = React.createContext({ mood: 'happy', handleUpdateMood: () => {} });

export const EmojiProvider = (props) => {
    const [mood, setMood] = useState('happy'); // Fixed initial state to match your data keys

    const handleUpdateMood = (newMood) => {
        setMood(newMood);
    };

    return (
        <EmojiContext.Provider value={{ mood, handleUpdateMood }}>
            {props.children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};