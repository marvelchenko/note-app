// const useCreateDate = () => {
//     const dateObj = new Date();
//     const month = dateObj.getMonth();
//     let monthName;
//     switch(month) {
//         case 0: monthName = "Jan";
//         break;
//         case 1: monthName = "Feb";
//         break;
//         case 2: monthName = "Mar";
//         break;
//         case 3: monthName = "Apr";
//         break;
//         case 4: monthName = "May";
//         break;
//         case 5: monthName = "Jun";
//         break;
//         case 6: monthName = "Jul";
//         break;
//         case 7: monthName = "Aug";
//         break;
//         case 8: monthName = "Sept";
//         break;
//         case 9: monthName = "Oct";
//         break;
//         case 10: monthName = "Nov";
//         break;
//         case 11: monthName = "Dec";
//         break;
//     }
//     const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} | ${dateObj.getHours()}:${dateObj.getMinutes()}`;
//     return date;
// }
// export default useCreateDate

const useCreateDate = () => {
    const dateObj = new Date();

    // Get month name using an array
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthName = months[dateObj.getMonth()];

    // Format minutes to always have 2 digits
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    // Create formatted date string
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} | ${dateObj.getHours()}:${minutes}`;
    return date;
};

export default useCreateDate;
