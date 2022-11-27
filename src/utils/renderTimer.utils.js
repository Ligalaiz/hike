const renderTimer = () => {
  const HOURS_DEADLINE = 23;
  const MINUTES_DEADLINE = 59;
  const SECONDS_DEADLINE = 60;

  const renderTime = () => {
    const date = new Date();
    const currentHours = HOURS_DEADLINE - date.getHours();
    const currentMin = MINUTES_DEADLINE - date.getMinutes();
    const currentSec = SECONDS_DEADLINE - date.getSeconds();

    const hours = currentHours < 10 ? `0${currentHours}` : currentHours;
    const min = currentMin < 10 ? `0${currentMin}` : currentMin;
    const sec = currentSec < 10 ? `0${currentSec}` : currentSec;

    const timersID = {
      hours: ['hoursFirst', 'hoursSec'],
      min: ['minFirst', 'minSec'],
      sec: ['secFirst', 'secSec'],
    };

    const timersData = {
      hours,
      min,
      sec,
    };

    Object.keys(timersID).forEach((timerArr) => {
      timersID[timerArr].forEach((timer) => {
        document.getElementById(timer).textContent = timersData[timerArr];
      });
    });
  };

  setInterval(() => renderTime(), 1000);
};

export { renderTimer };
