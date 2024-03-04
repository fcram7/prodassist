import { Button, Slider } from '@mui/joy';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import PomodoroTimerContext from '../../../contexts/pomodoroTimerContext';

const PomodoroSettings = ({ handleShowSettings }) => {
  const workMinuteMarks = [
    {
      value: 1,
      label: "1 minute",
    },
    {
      value: 60,
      label: "60 minutes",
    },
  ];

  const breakMinuteMarks = [
    {
      value: 1,
      label: "1 minute",
    },
    {
      value: 25,
      label: "25 minutes",
    },
  ]

  const timeValueMarks = (value) => {
    if (value === 1) {
      return `${value} minute`;
    } else {
      return `${value} minutes`;
    }
  };

  const timerContext = useContext(PomodoroTimerContext);

  return ( 
    <div>
      <Button onClick={handleShowSettings}>
        Back
      </Button>
      <Box 
        sx={{ 
          width: 300,
          marginBlock: '1.5rem'
        }}
      >
        <label htmlFor="">Work Time: {timerContext.workMinutes}:00</label>
        <Slider
          sx={{
            marginBottom: '2rem',
            marginInline: '1.25rem'
          }}
          aria-label='Custom Marks'
          getAriaValueText={timeValueMarks}
          step={5}
          min={0}
          max={60}
          value={timerContext.workMinutes}
          valueLabelDisplay='auto'
          marks={workMinuteMarks}
          onChange={(e, newValue) => timerContext.setWorkMinutes(newValue)}
        />
        <label htmlFor="">Break Time: {timerContext.breakMinutes}:00</label>
        <Slider 
          sx={{
            marginInline: '1.25rem'
          }}
          aria-label='Custom Marks'
          getAriaValueText={timeValueMarks}
          step={5}
          min={0}
          max={25}
          value={timerContext.breakMinutes}
          valueLabelDisplay='auto'
          marks={breakMinuteMarks}
          onChange={(e, newValue) => timerContext.setBreakMinutes(newValue)}
        />
      </Box>
    </div>
   );
}
 
PomodoroSettings.propTypes = {
  handleShowSettings: PropTypes.func,
}

export default PomodoroSettings;