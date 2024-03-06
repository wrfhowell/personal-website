import { useEffect, useState } from "react";

const useTypingAnimation = (text = "", speed = 100, onComplete = () => {}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		if (isTyping && displayedText.length < text.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText(text.substring(0, displayedText.length + 1));
			}, speed);
			return () => clearTimeout(timeoutId);
		} else if (isTyping) {
			setIsTyping(false);
			onComplete();
		}
	}, [text, displayedText, isTyping, speed, onComplete]);

	return { displayedText, isTyping };
};

export default useTypingAnimation;
