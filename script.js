document.addEventListener('DOMContentLoaded', function() {
    // Function to update current UTC time
    function updateCurrentTimeUTC() {
      const now = new Date();
      const options = { timeZone: 'UTC', weekday: 'long', hour12: false };
      const timeString = now.toLocaleTimeString('en-US', options);
      document.querySelector('[data-testid="currentTimeUTC"]').textContent = timeString;
      
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    }
  
    // Update time initially
    updateCurrentTimeUTC();
  
    // Update time every minute (60000 milliseconds)
    setInterval(updateCurrentTimeUTC, 60000);
  });
  