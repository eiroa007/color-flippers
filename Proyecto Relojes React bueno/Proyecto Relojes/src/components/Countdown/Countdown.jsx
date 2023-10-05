import { useEffect, useState } from "react"
import "./Countdown.css"

const Countdown = () => {
    const [time, seTime] = useState("");
    useEffect(() => {
        let countDownDate = new Date("Sept 27, 2023 13:47:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            seTime(days + "d" + hours + "h" + minutes + "m" + seconds + "s");
            if (distance < 0) {
                clearInterval(x);
                seTime("COUNTDOWN FINISHED");
            }


        }, 1000 );
    }, []);
    return ( <div className="countdown">
        <h2>{time}</h2>
    </div>

    );
};
export default Countdown;