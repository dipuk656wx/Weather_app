const curDate = document.getElementById("date");
        let weathericon = document.getElementById("weathericon");

        const tempStatus = "Clouds";
        const getCurrentDay = () => {
            var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tues";
            weekday[3] = "Wed";
            weekday[4] = "Thur";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
            let currentTime = new Date();
            let ans = weekday[currentTime.getDay()].toUpperCase();
            return ans

        }

        let ans = getCurrentDay();
        const getCurrentTime = () => {
            var months = [
                "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept",
                "Oct", "Nov", "Dec",
            ];
            var now = new Date();
            var month = months[now.getMonth()].toUpperCase();
            var day = now.getDate();
            var year = now.getFullYear();
            var hours = now.getHours();
            var min = now.getMinutes();
            let x = "AM"
            year = year.toString().slice(2);
            if (hours > 11) {
                x = "PM";
                if (hours > 12) {
                    hours -= 12;
                }
            }
            if (min < 10) min = "0" + min;
            let ans = month + " " + year + " | " + hours + ":" + min + x;
            return ans
        }
        let a = getCurrentDay() + " | " + getCurrentTime();
        curDate.innerHTML = a;