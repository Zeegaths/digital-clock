const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        function tick () {
            const dateOutput = document.getElementById('date');
            const timeOutput = document.getElementById('time');

            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const date = currentDate.getDate();
            const day = weekday[currentDate.getDay()];

            const dateFormat = `${year}-${month}-${date}, ${day}`;
            dateOutput.textContent = dateFormat

            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

            const timeFormat = `${hours}:${minutes}:${seconds}`;
            timeOutput.textContent = timeFormat
        }
        tick();        
        setInterval(tick, 1000)