export function extractDates(text) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  
    const dates = text.match(datePattern);

    if (!dates) return "";
    
    return [...new Set(dates)].join(', ');
  }