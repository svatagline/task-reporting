function generateHourlyRanges(dateString: string) {
    const date = new Date(dateString);
    date.setHours(7, 0, 0, 0); // Start from 7 AM

    let hourlyRanges = [];

    for (let i = 7; i < 23; i++) { // 7 AM to 11 PM
        let startTimestamp = Math.floor(date.getTime() / 1000);
        date.setHours(i + 1);
        let endTimestamp = Math.floor(date.getTime() / 1000);

        hourlyRanges.push({
            id: `${startTimestamp}_${endTimestamp}`,
            name: `${formatTime(i)} to ${formatTime(i + 1)}`
        });
    }

    // Full-day range
    hourlyRanges.push({
        id: `${hourlyRanges[0].id.split('_')[0]}_${hourlyRanges[hourlyRanges.length - 1].id.split('_')[1]}`,
        name: "7 AM to 11 PM"
    });

    return hourlyRanges;
}

// Helper function to format time in 12-hour format
function formatTime(hour: number) {
    let period = hour >= 12 ? "PM" : "AM";
    let formattedHour = hour % 12 || 12; // Convert 0 -> 12 for AM/PM format
    return `${formattedHour} ${period}`;
}

// Example usage
// console.log(generateHourlyRanges("January 30, 2025"));