import React, { useEffect, useState } from 'react';

const KonamiGif = () => {
    const [win, setWin] = useState(false)
    const konamiCode = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"]

    useEffect(() => {
        let userCode = []
        document.addEventListener('keydown', (e) => {
            userCode.push(e.key.toLowerCase())
            const isEqual = JSON.stringify(userCode) === JSON.stringify(konamiCode.slice(0, userCode.length))

            if (!isEqual) {
                userCode = []
                setWin(false)
            }
            if (isEqual && userCode.length === konamiCode.length) {
                userCode = []
                setWin(true)
            }
        })
    }, [])

    return (
        <div>
            {
                win &&
                <>
                    <iframe
                        src="https://giphy.com/embed/mIZ9rPeMKefm0"
                        width="344"
                        height="480"
                        frameBorder="0"
                        class="giphy-embed"
                        style={{ position: "absolute", top: "50%", right: "40%" }}
                        allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-happy-mIZ9rPeMKefm0">via GIPHY</a></p>
                </>
            }
        </div>
    );
};
export default KonamiGif;

