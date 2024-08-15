export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

// export const handleConvertToISO()=> {
//     const inputElement = inputRef.current;
//     if (inputElement) {
//         const dateInput = inputElement.value;
//         if (dateInput) {
//             // Convert date string to ISO-8601 DateTime format
//             const isoDateTime = new Date(`${dateInput}T00:00:00Z`).toISOString();
//             console.log(isoDateTime); // Or do something with the ISO string
//         }
//     }
// }