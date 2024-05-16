export const NumberFormatter = (props) => {
  const formattedNumber = new Intl.NumberFormat("en-In", {
    maximumSignificantDigits: 3,
  }).format(props);
  return formattedNumber;
};
export const formatter = (item) => {
  return `${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getRemainingTime = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const difference = expiry - today;
  const millisecondsPerMinute = 1000 * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;

  const days = Math.floor(difference / millisecondsPerDay);
  const hours = Math.floor(
    (difference % millisecondsPerDay) / millisecondsPerHour
  );
  const minutes = Math.floor(
    (difference % millisecondsPerHour) / millisecondsPerMinute
  );

  if (days > 0) {
    if (days == 1) {
      return `${days} day`;
    } else {
      return `${days} days`;
    }
  } else {
    if (hours > 0) {
      if (hours == 1) {
        return `${hours} hour`;
      } else {
        return `${hours} hours`;
      }
    } else {
      if (minutes == 1) {
        return `${minutes} minute`;
      } else if (minutes < 0) {
        return `Coupon Expired`;
      } else {
        return `${minutes} minutes`;
      }
    }
  }
};

export const getRemainingTimeCard = (expiryDate) => {
  const data = getRemainingTime(expiryDate);
  return data == "Coupon Expired" ? data : `Expire in ${data}`;
};

// for point history
export const groupAndFormatData = async (data) => {
  // Group the data by date
  const groupedData = data.reduce((groups, item) => {
    const date = new Date(item.created_at);
    const formattedDate = formatDate(date);
    if (!groups[formattedDate]) {
      groups[formattedDate] = {
        date: formattedDate,
        data: [],
      };
    }
    groups[formattedDate].data.push(item);
    return groups;
  }, {});

  // Convert the grouped data object to an array
  const result = Object.values(groupedData);

  return result;
};

function formatDate(date) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (isSameDate(date, today)) {
    return "Today";
  } else if (isSameDate(date, yesterday)) {
    return "Yesterday";
  } else {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${ordinalSuffix(day)} ${month} ${year}`;
  }
}

function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function ordinalSuffix(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const suffixIndex =
    number % 10 < 4 && (number % 100 < 10 || number % 100 >= 20)
      ? number % 10
      : 0;
  return number + suffixes[suffixIndex];
}

export const mergeArraysByDate = async (arr1, arr2) => {
  // Create a map to store the merged data
  const mergedMap = new Map();

  // Merge the data from arr1
  arr1.forEach((item) => {
    mergedMap.set(item.date, item.data);
  });

  // Merge the data from arr2
  arr2.forEach((item) => {
    const existingData = mergedMap.get(item.date);
    if (existingData) {
      mergedMap.set(item.date, existingData.concat(item.data));
    } else {
      mergedMap.set(item.date, item.data);
    }
  });

  // Convert the merged map back to an array
  const mergedArray = Array.from(mergedMap, ([date, data]) => ({
    date,
    data,
  }));

  return mergedArray;
};
