import React from 'react';
import { useState, useEffect } from 'react';

const Countdown = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const countDownDate = new Date("Jul 1, 2023 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = countDownDate - now;

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));

    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='container mx-auto'>
      <div>
        <span className='time'>{days}</span>
        <span className='label'>Days</span>
      </div>
      <div>
        <span className='time'>{hours}</span>
        <span className='label'>Hours</span>
      </div>
      <div>
        <span className='time'>{minutes}</span>
        <span className='label'>Minutes</span>
      </div>
      <div>
        <span className='time'>{seconds}</span>
        <span className='label'>Seconds</span>
      </div>
    </div>
  )
}

export default Countdown