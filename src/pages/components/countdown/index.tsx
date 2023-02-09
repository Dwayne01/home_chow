import React from 'react';
import { useState, useEffect } from 'react';

const Countdown = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div>Countdown</div>
  )
}

export default Countdown