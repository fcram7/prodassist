import Box from '@mui/material/Box';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button, CircularProgress } from '@mui/joy';
import { useEffect, useRef, useState } from 'react';
import PomodoroSettings from './PomodoroSettings';
import PomodoroTimerContext from '../../../contexts/pomodoroTimerContext';

const Pomodoro = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [mode, setMode] = useState('work');

  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  
  useEffect(() => {
    const switchMode = () => {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    } 

    secondsLeftRef.current = workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if(isPausedRef.current) {
        return;
      }

      if(secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [workMinutes, breakMinutes]);

  const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60;

  const percentage = Math.round(secondsLeft / totalSeconds * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const startTimerButtonHandler = () => {
    setIsPaused(!isPaused)
    isPausedRef.current = !isPaused;
  };

  const handleShowSettings = () => {
    if (showSettings === true) {
      setShowSettings(false);
    } else {
      setShowSettings(true);
    }
  };

  const pomodoroButtonStyle = {
    position: 'relative',
    left: '22%',
    marginBlock: '2rem',
    marginInline: '0.5rem',
    fontSize: '1.5rem',
  };

  return ( 
    <section className="dashboard-section">
      <div className="dashboard-title">
        <h1 className="section-title">Pomodoro</h1>
      </div>

      <div className="dashboard-content">
        <PomodoroTimerContext.Provider value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? 
            <PomodoroSettings handleShowSettings={handleShowSettings}/>
          :
            <>
              <Box
                sx={{
                  position: 'relative',
                  right: '15%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CircularProgress
                variant='soft'
                  color={isPausedRef.current ? 'danger' : 'success'}
                  sx={{
                    '--CircularProgress-size': '350px',
                    '--CircularProgress-trackThickness': '10px',
                    '--CircularProgress-progressThickness': '10px',
                    color: '#515052'
                  }} 
                  determinate 
                  value={percentage}
                >
                  {minutes + ':' + seconds}
                </CircularProgress>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={pomodoroButtonStyle}
                  size='lg'
                  onClick={startTimerButtonHandler}
                  color={isPausedRef.current ? 'danger' : 'success'}
                >
                  {isPausedRef.current ? "Start" : "Pause"}
                </Button>
                <Button
                  sx={pomodoroButtonStyle}
                  size='lg'
                  color='neutral'
                  onClick={handleShowSettings}
                >
                  <SettingsOutlinedIcon/> Settings
                </Button>
              </Box>
            </>
          }
        </PomodoroTimerContext.Provider>
      </div>
    </section>
   );
}

export default Pomodoro;