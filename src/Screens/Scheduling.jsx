import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  MapPinIcon,
  Users,
  MessageSquare,
  CheckCircle,
  ChevronDown
} from "lucide-react";

const services = [
  { name: "Architecture", description: "Architectural design & planning" },
  { name: "Interior", description: "Interior design solutions" },
  { name: "BIM", description: "Building Information Modeling" },
  { name: "3D Visualization", description: "3D rendering & visualization" },
  { name: "IT", description: "Technology solutions" },
  { name: "Marketing", description: "Marketing & promotion" },
  { name: "Admin", description: "Administrative services" },
];

const timeZones = [
  { country: "USA", zone: "UTC-5", region: "Eastern Time (ET)" },
  { country: "USA", zone: "UTC-6", region: "Central Time (CT)" },
  { country: "USA", zone: "UTC-7", region: "Mountain Time (MT)" },
  { country: "USA", zone: "UTC-8", region: "Pacific Time (PT)" },
  { country: "USA", zone: "UTC-9", region: "Alaska Time (AKT)" },
  { country: "USA", zone: "UTC-10", region: "Hawaii Time (HST)" },
  { country: "Australia", zone: "UTC+8", region: "Western Standard Time (AWST)" },
  { country: "Australia", zone: "UTC+9:30", region: "Central Standard Time (ACST)" },
  { country: "Australia", zone: "UTC+10", region: "Eastern Standard Time (AEST)" },
  { country: "Australia", zone: "UTC+10:30", region: "Lord Howe Standard Time" },
  { country: "Canada", zone: "UTC-3:30", region: "Newfoundland Time (NT)" },
  { country: "Canada", zone: "UTC-4", region: "Atlantic Time (AT)" },
  { country: "Canada", zone: "UTC-5", region: "Eastern Time (ET)" },
  { country: "Canada", zone: "UTC-6", region: "Central Time (CT)" },
  { country: "Canada", zone: "UTC-7", region: "Mountain Time (MT)" },
  { country: "Canada", zone: "UTC-8", region: "Pacific Time (PT)" },
  { country: "United Kingdom", zone: "UTC+0", region: "Greenwich Mean Time (GMT)" },
  { country: "United Kingdom", zone: "UTC+1", region: "British Summer Time (BST)" },
  { country: "Europe", zone: "UTC+0", region: "Western European Time (WET)" },
  { country: "Europe", zone: "UTC+1", region: "Central European Time (CET)" },
  { country: "Europe", zone: "UTC+2", region: "Eastern European Time (EET)" },
  { country: "Europe", zone: "UTC+3", region: "Moscow Time (MSK)" },
  { country: "India", zone: "UTC+5:30", region: "Indian Standard Time (IST)" },
  { country: "New Zealand", zone: "UTC+12", region: "New Zealand Standard Time (NZST)" },
  { country: "New Zealand", zone: "UTC+12:45", region: "Chatham Standard Time" },
];

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+61", country: "AUS" },
  { code: "+1", country: "CND" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+64", country: "NZ" },
];

const companySizes = [
  "1-10 ",
  "11-50 ",
  "51-200 ",
  "201-500 ",
  "500+ ",
];

const ProgressSteps = ({ currentStep }) => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center relative z-10 flex-1">
              <motion.div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold relative overflow-hidden ${currentStep >= s
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                  }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: currentStep === s ? 1.1 : 1, opacity: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                {currentStep > s ? (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  s
                )}
              </motion.div>
              <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#0d3557] regular">
                {s === 1 ? "Service" : s === 2 ? "Date" : s === 3 ? "Time" : "Details"}
              </span>
            </div>
          ))}

          <div className="absolute top-4 sm:top-5 left-0 right-0 h-0.5 z-0">
            <div className不堪="relative h-full">
              <div className="absolute inset-0 bg-gray-200" />
              <motion.div
                className="absolute inset-0 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentStep / 4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomCalendar = ({ selected, onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const handlePrevMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const handleNextMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  const handleDayClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (newDate >= today && newDate.getDay() !== 0 && newDate.getDay() !== 6) {
      onChange(newDate);
    }
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8 sm:w-10 sm:h-10"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isDisabled = date < today || date.getDay() === 0 || date.getDay() === 6;
      const isSelected =
        selected &&
        selected.getDate() === day &&
        selected.getMonth() === currentMonth.getMonth() &&
        selected.getFullYear() === currentMonth.getFullYear();
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      days.push(
        <motion.button
          key={day}
          onClick={() => handleDayClick(day)}
          disabled={isDisabled}
          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-sm sm:text-base transition-all ${isSelected
              ? "bg-blue-500 text-white shadow-md"
              : isToday
                ? "bg-green-100 text-green-700"
                : "text-[#0d3557]"
            } ${isDisabled
              ? "opacity-40 cursor-not-allowed text-gray-400"
              : "hover:bg-blue-100 hover:text-blue-600"
            }`}
          whileHover={!isDisabled ? { scale: 1.1 } : {}}
          whileTap={!isDisabled ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: day * 0.02 }}
        >
          {day}
        </motion.button>
      );
    }
    return days;
  };

  return (
    <div className="max-w-xs sm:max-w-sm mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <motion.button
          onClick={handlePrevMonth}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="text-sm sm:text-base regular text-[#0d3557]">
            {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
        </div>
        <motion.button
          onClick={handleNextMonth}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
      <div className="grid grid-cols-7 gap-1 regular text-center text-xs sm:text-sm text-[#0d3557] mb-2 sm:mb-3">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 regular gap-1">{renderDays()}</div>
    </div>
  );
};

const TimeSelector = ({ selected, onChange, date, userTimeZone, onTimeZoneChange }) => {
  const baseTimeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];

  const parseTimeString = (timeStr) => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const formatTimeString = (hours, minutes) => {
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const paddedHours = displayHours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes} ${period}`;
  };

  const parseTimeZoneOffset = (zone) => {
    if (!zone) return 0;
    const match = zone.match(/UTC([+-])([0-9:]+)/);
    if (!match) return 0;
    const sign = match[1] === "+" ? 1 : -1;
    const [hours, minutes] = match[2].split(":").map(Number);
    return sign * (hours + (minutes || 0) / 60);
  };

  const adjustTimeSlots = (slots, userTimeZone) => {
    const offset = parseTimeZoneOffset(userTimeZone);
    return slots.map((slot) => {
      const { hours, minutes } = parseTimeString(slot);
      let newHours = hours + Math.floor(offset);
      let newMinutes = minutes + (offset % 1) * 60;

      if (newMinutes >= 60) {
        newHours += 1;
        newMinutes -= 60;
      } else if (newMinutes < 0) {
        newHours -= 1;
        newMinutes += 60;
      }

      while (newHours >= 24) newHours -= 24;
      while (newHours < 0) newHours += 24;

      return formatTimeString(newHours, newMinutes);
    });
  };

  const adjustedTimeSlots = adjustTimeSlots(baseTimeSlots, userTimeZone);

  const renderTimeSlots = () => {
    return adjustedTimeSlots.map((slot, index) => {
      const isSelected = selected === slot;
      return (
        <motion.button
          key={slot}
          onClick={() => onChange(slot)}
          className={`py-2 px-3 rounded-lg text-sm transition-all ${isSelected
              ? "bg-blue-500 text-white shadow-md"
              : "text-[#0d3557] hover:bg-blue-100 hover:text-blue-600"
            } border border-gray-200`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
        >
          {slot}
        </motion.button>
      );
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="max-w-xs sm:max-w-lg mx-auto">
    <motion.div
  className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-4"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>
  <Clock className="w-5 h-5 text-blue-600 mr-2" />

  <div className="relative w-full sm:w-auto">
    <select
      value={userTimeZone}
      onChange={onTimeZoneChange}
      className="appearance-none w-full regular text-sm text-[#0d3557] bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="" className="regular">Select Timezone</option>
      {timeZones.map((tz) => (
        <option className="regular" key={tz.country + tz.zone} value={tz.zone}>
          {tz.country} ({tz.zone} - {tz.region})
        </option>
      ))}
    </select>

    {/* Chevron Down Icon */}
    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
  </div>
</motion.div>

      </div>

      <motion.div
        className="max-w-xs sm:max-w-lg mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="text-sm text-[#0d3557] regular">
            {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </span>
        </div>
      </motion.div>

      <motion.div
        className="max-w-xs sm:max-w-lg mx-auto bg-white regular rounded-lg shadow-md p-4 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="grid grid-cols-4 gap-2 regular">{renderTimeSlots()}</div>
      </motion.div>
    </div>
  );
};
const UserForm = ({ values, onChange, selectedService, selectedDate, selectedTime, userTimeZone }) => {
  const [countryCode, setCountryCode] = useState("+1");

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    onChange({ target: { name: "phone", value: `${e.target.value}${values.phone.replace(/^\+\d+/, "") || ""}` } });
  };

  return (
   <motion.div
  className="max-w-7xl mx-auto bg-white rounded-xl border border-gray-200 p-4 sm:p-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6">
    <motion.div
      className="lg:col-span-3 border-r border-gray-200 pr-4 sm:pr-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h3 className="text-base regular sm:text-lg text-[#0d3557] mb-3 flex items-center gap-2">
        Meeting Summary
      </h3>
      <div className="bg-blue-50 rounded-md p-3 mb-3 text-left">
        <p className="text-sm text-blue-800">Offshore 365: Strategic Consultation</p>
        <p className="text-xs text-blue-600 mt-1">30-minute consultation session</p>
      </div>
      <div className="space-y-2 text-sm text-[#0d3557]">
        <div className="flex items-start gap-2">
          <span className="regular">Service:</span> {selectedService || "Not selected"}
        </div>
        <div className="flex items-start gap-2">
          <span className="regular">Date:</span>
          {selectedDate
            ? selectedDate.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })
            : "Not selected"}
        </div>
        <div className="flex items-start gap-2">
          <span className="regular">Time:</span>
          {selectedTime ? `${selectedTime} (${userTimeZone || "No timezone"})` : "Not selected"}
        </div>
      </div>
      <div className="bg-yellow-50 rounded-md p-3 mt-4">
        <h4 className="text-sm text-yellow-800 mb-1 text-justify regular">Meeting Agenda</h4>
        <ul className="list-disc text-justify list-inside text-xs text-yellow-800 regular space-y-1">
          <li className="regular">Understanding Your AEC Staffing Needs</li>
          <li className="regular">Exploring Offshore 365’s Talent Pool</li>
          <li className="regular">Reviewing Flexible Engagement Models</li>
        </ul>
      </div>
    </motion.div>

    <motion.div
      className="lg:col-span-7"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg text-[#0d3557] mb-2 regular">Your Information</h3>
        <p className="text-xs sm:text-sm text-[#0d3557]">Tell us about yourself and your company</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs text-[#0d3557] regular mb-1 flex items-center gap-1">
            <User className="w-4 h-4 text-blue-500" />
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            required
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border regular border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-[#0d3557] mb-1 regular flex items-center gap-1">
            <Mail className="w-4 h-4 text-blue-500" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 border regular border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-[#0d3557] regular mb-1 flex items-center gap-1">
            <Phone className="w-4 h-4 text-blue-500" />
            Phone Number
          </label>
          <div className="flex">
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              required
              className="w-1/5 px-2 py-2 border border-gray-200 rounded-l-lg text-[10px] text-[#0d3557] regular focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none bg-white"
            >
              {countryCodes.map((cc) => (
                <option key={cc.code + cc.country} value={cc.code}>
                  {cc.code} ({cc.country})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={onChange}
              required
              placeholder="Enter phone number"
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-4/5 px-3 py-2 border border-gray-200 rounded-r-lg text-sm text-[#0d3557] regular focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-[#0d3557] regular mb-1 flex items-center gap-1">
            <Building className="w-4 h-4 text-blue-500" />
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={values.companyName}
            onChange={onChange}
            required
            placeholder="Enter your company name"
            className="w-full px-3 py-2 border border-gray-200 regular rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-[#0d3557] regular mb-1 flex items-center gap-1">
            <MapPinIcon className="w-4 h-4 text-blue-500" />
            Company Location
          </label>
          <input
            type="text"
            name="companyLocation"
            value={values.companyLocation}
            onChange={onChange}
            required
            placeholder="Enter company location"
            className="w-full px-3 py-2 border border-gray-200 regular rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-[#0d3557] regular mb-1 flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-500" />
            Number of Employees
          </label>
          <div className="relative">
            <select
              name="companySize"
              value={values.companySize}
              onChange={onChange}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg regular text-sm text-[#0d3557] focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none bg-white pr-10"
            >
              <option value="">Select company size</option>
              {companySizes.map((size) => (
                <option key={size} className="regular" value={size}>
                  {size}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#0d3557] absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs text-[#0d3557] mb-1 regular flex items-center gap-1">
          <MessageSquare className="w-4 h-4 text-blue-500" />
          Tell us more about your project
        </label>
        <textarea
          name="additionalMessage"
          value={values.additionalMessage}
          onChange={onChange}
          required
          placeholder="Any additional details or requirements..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-200 regular rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none"
        />
      </div>
    </motion.div>
  </div>
</motion.div>

  );
};

const SuccessMessage = ({ selectedService, selectedDate, selectedTime, userTimeZone, formData }) => {
  return (
  <motion.div
  className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {/* Icon */}
  <motion.div
    className="relative mb-6"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
  >
    <div className="bg-gradient-to-tr from-green-100 to-green-200 w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-inner">
      <CheckCircle className="w-8 h-8 text-green-600" />
    </div>
  </motion.div>

  {/* Title */}
  <h2 className="text-2xl font-semibold text-[#0d3557] mb-1">Meeting Scheduled!</h2>
  <p className="text-sm text-[#0d3557] mb-6 regular">
    A confirmation email has been sent. Your meeting summary:
  </p>

  {/* Summary Info */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left bg-gray-50 p-5 rounded-xl border border-gray-100">
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Service</p>
      <p className="text-sm text-[#0d3557] regular">{selectedService}</p>
    </div>
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Date</p>
      <p className="text-sm text-[#0d3557] regular">
        {selectedDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Time</p>
      <p className="text-sm text-[#0d3557] regular">
        {selectedTime} ({userTimeZone})
      </p>
    </div>
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Name</p>
      <p className="text-sm text-[#0d3557] regular">{formData.fullName}</p>
    </div>
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Email</p>
      <p className="text-sm text-[#0d3557] regular">{formData.email}</p>
    </div>
    {formData.phone && (
      <div>
        <p className="text-[13px] text-[#0d3557] font-medium">Phone</p>
        <p className="text-sm text-[#0d3557] regular">{formData.phone}</p>
      </div>
    )}
    <div>
      <p className="text-[13px] text-[#0d3557] font-medium">Company</p>
      <p className="text-sm text-[#0d3557] regular">{formData.companyName}</p>
    </div>
    {formData.companyLocation && (
      <div>
        <p className="text-[13px] text-[#0d3557] font-medium">Location</p>
        <p className="text-sm text-[#0d3557] regular">{formData.companyLocation}</p>
      </div>
    )}
    {formData.companySize && (
      <div>
        <p className="text-[13px] text-[#0d3557] font-medium">Size</p>
        <p className="text-sm text-[#0d3557] regular">{formData.companySize}</p>
      </div>
    )}
    {formData.additionalMessage && (
      <div className="sm:col-span-2">
        <p className="text-[13px] text-[#0d3557] font-medium">Details</p>
        <p className="text-sm text-[#0d3557] regular">{formData.additionalMessage}</p>
      </div>
    )}
  </div>

  {/* Button */}
  <motion.button
    onClick={() => window.location.reload()}
    className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm regular hover:bg-blue-700 transition-all shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Schedule Another
  </motion.button>
</motion.div>

  );
};

export default function ScheduleMeeting() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [userTimeZone, setUserTimeZone] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyLocation: "",
    companySize: "",
    additionalMessage: "",
  });

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
    else if (step === 2 && selectedDate) setStep(3);
    else if (step === 3 && selectedTime && userTimeZone) setStep(4);
    else if (
      step === 4 &&
      formData.fullName &&
      formData.email &&
      formData.companyName
    ) {
      console.log({
        selectedService,
        selectedDate,
        selectedTime,
        userTimeZone,
        ...formData,
      });
      setStep(5);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 5) setStep(step - 1);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleTimeZoneChange = (e) => {
    setUserTimeZone(e.target.value);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: { y: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
    },
  };

  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative ">
          <motion.div
            className="absolute left-2 sm:left-[-200px] bottom-10 w-44 sm:w-[400px] h-44 sm:h-[400px] bg-[#B2E7F1] rounded-full opacity-30 sm:opacity-50"
            variants={floatVariants}
            animate="animate"
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute right-2 sm:right-[-200px] top-4 w-44 sm:w-[400px] h-44 sm:h-[400px] bg-[#E1C2C1] rounded-full opacity-30 sm:opacity-40"
            variants={floatVariants}
            animate="animate"
            transition={{ delay: 0.4 }}
          />

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-4 sm:mb-6 leading-tight relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Schedule a meet with <br className="sm:hidden" /> Offshore 365 experts
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-[#0d3557] mb-6 sm:mb-8 max-w-xl mx-auto relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Power your business today with our expert solutions
          </motion.p>

          {step < 5 && (
            <div className="relative z-10">
              <ProgressSteps currentStep={step} />
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 max-w-lg mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 items-stretch sm:items-end"
              >
                <div className="flex-1 w-full">
                  <label className="block text-sm text-[#0d3557] regular mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    Select a Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2 border regular border-gray-200 rounded-lg text-sm text-[#0d3557] focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none cursor-pointer bg-white shadow-sm hover:border-blue-300 transition-all"
                  >
                    <option value="" className="regular">
                      Choose a service
                    </option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name} - {service.description}
                      </option>
                    ))}
                  </select>
                </div>
                <motion.button
                  onClick={handleNext}
                  disabled={!selectedService}
                  className={`flex-shrink-0 regular h-10 sm:h-10 px-4 sm:px-6 rounded-lg text-sm transition-colors shadow-sm ${selectedService
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    } flex items-center justify-center gap-2`}
                  whileHover={{ scale: selectedService ? 1.05 : 1 }}
                  whileTap={{ scale: selectedService ? 0.95 : 1 }}
                >
                  Next
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <CustomCalendar selected={selectedDate} onChange={handleDateSelect} />
                <div className="flex justify-center regular gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <motion.button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-[#0d3557] regular rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    disabled={!selectedDate}
                    className={`flex items-center gap-2 px-4 sm:px-6 regular py-2 rounded-lg text-sm transition-colors shadow-sm ${selectedDate
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    whileHover={{ scale: selectedDate ? 1.05 : 1 }}
                    whileTap={{ scale: selectedDate ? 0.95 : 1 }}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <TimeSelector
                  selected={selectedTime}
                  onChange={handleTimeSelect}
                  date={selectedDate}
                  userTimeZone={userTimeZone}
                  onTimeZoneChange={handleTimeZoneChange}
                />
                <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <motion.button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-[#0d3557] regular rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    disabled={!selectedTime || !userTimeZone}
                    className={`flex items-center gap-2 px-4 sm:px-6 regular py-2 rounded-lg text-sm transition-colors shadow-sm ${selectedTime && userTimeZone
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    whileHover={{ scale: selectedTime && userTimeZone ? 1.05 : 1 }}
                    whileTap={{ scale: selectedTime && userTimeZone ? 0.95 : 1 }}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <UserForm
                  values={formData}
                  onChange={handleFormChange}
                  selectedService={selectedService}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  userTimeZone={userTimeZone}
                />
                <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <motion.button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-[#0d3557] regular rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    disabled={!formData.fullName || !formData.email || !formData.companyName}
                    className={`flex items-center gap-2 px-4 regular sm:px-6 py-2 rounded-lg text-sm transition-colors shadow-sm ${formData.fullName && formData.email && formData.companyName
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    whileHover={{
                      scale: formData.fullName && formData.email && formData.companyName ? 1.05 : 1,
                    }}
                    whileTap={{
                      scale: formData.fullName && formData.email && formData.companyName ? 0.95 : 1,
                    }}
                  >
                    Schedule Meeting
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <SuccessMessage
                  selectedService={selectedService}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  userTimeZone={userTimeZone}
                  formData={formData}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}