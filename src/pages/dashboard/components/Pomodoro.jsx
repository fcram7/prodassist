import Box from '@mui/material/Box';
import { Button, CircularProgress } from '@mui/joy';
import { useState } from 'react';

const Pomodoro = () => {
  const [start, setStart] = useState(false);

  const startTimerButtonHandler = () => {
    setStart(true);
    if (start === true) {
      setStart(false);
    }
  }
  return ( 
    <section className="dashboard-section">
      <div className="dashboard-title">
        <h1 className="section-title">Pomodoro</h1>
      </div>

      <div className="dashboard-content">
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
            color={start ? 'danger' : 'success'}
            sx={{
              '--CircularProgress-size': '350px',
              '--CircularProgress-trackThickness': '10px',
              '--CircularProgress-progressThickness': '10px',
              color: '#515052'
            }} 
            determinate 
            value={80}
          >
            25:00
          </CircularProgress>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              position: 'relative',
              left: '30%',
              marginBlock: '2rem',
              fontSize: '1.5rem',
            }}
            size='lg'
            onClick={startTimerButtonHandler}
            color={start ? 'danger' : 'success'}
          >
            {start ? "Pause" : "Start"}
          </Button>
        </Box>
      </div>
    </section>
   );
}
 
export default Pomodoro;