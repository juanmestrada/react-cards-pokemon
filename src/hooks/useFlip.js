import React, { useState } from "react";

const useFlip = (initialFlipState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialFlipState);

    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }

    return [isFacingUp, flipCard];
}

export default useFlip;