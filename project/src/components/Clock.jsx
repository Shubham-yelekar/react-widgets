import React, { useEffect, useRef , useState, } from 'react'
import {motion , useAnimationFrame} from "framer-motion"

const days = [
 "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const Clock = () => {
  const [angle, setAngle] = useState(0);
  const [time, setTime] = useState({
    hours:0,
    minutes: 0,
    period: "",
    day:'',
    seconds:0
  })
  const getCurrentTime = () => {

    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = (currentTime.getMinutes()).toString().padStart(2,"0")
    const seconds = currentTime.getSeconds()
    const hours12 = (hours % 12 || 12).toString().padStart(2,"0");

    const period = hours >=12 ? 'PM' : 'AM'
    const day = days[currentTime.getDay()]
    setTime({
      hours:hours12,
      minutes,
      period,
      day,
      seconds
    })


  }
  useEffect(() => {
    getCurrentTime()
    const interval = setInterval(getCurrentTime, 1000)
    return ()=> clearInterval(interval)
  }, [])

  const ref = useRef(null)
  useAnimationFrame(() => {
    const ticktime = Math.floor(time.seconds)
    const rotation = (ticktime * 6) % 360 ;
    setAngle(rotation);

  })

  return (
    <div className='relative overflow-hidden flex flex-col items-center justify-center w-[240px] h-[240px] text-gray-50 rounded-[28px] p-6 bg-gradient-to-b from-red-400  to-blue-600 drop-shadow-xl '>
      <p>{time.day}</p>
      <h1 className='league-gothic text-[128px] leading-[90%]'><span>{time.hours}</span>:<span>{time.minutes}</span> </h1>
      <p>{time.period}</p>
      <div className='clock-circle circle-1'></div>
      <div className='clock-circle circle-2'></div>

      <motion.div ref={ref}
      style={{
        background: `conic-gradient(from ${angle}deg at 50% 50%, rgba(255, 255, 255, 0.00) 0deg, #FFF 360deg)`,
        clipPath: "url(#clip-path-ticks)"
      }}
      className='clock-ticks absolute w-full h-full z-10 top-0 left-0 '>
      <svg width="237" height="235" viewBox="0 0 237 235" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <clipPath id='clip-path-ticks'>
              <rect x="116.847" y="0.106827" width="2" height="9.71972" rx="1" fill="white"/>
              <rect x="128.997" y="0.0499024" width="2" height="9.71972" rx="1" transform="rotate(3 128.997 0.0499024)" fill="white"/>
              <rect x="141.627" y="0.0173316" width="2" height="9.71972" rx="1" transform="rotate(12 141.627 0.0173316)" fill="white"/>
              <rect x="154.865" width="2" height="9.71972" rx="1" transform="rotate(19 154.865 0)" fill="white"/>
              <rect x="168.591" y="0.106827" width="2" height="9.71972" rx="1" transform="rotate(24 168.591 0.106827)" fill="white"/>
              <rect x="184.259" y="0.028089" width="2" height="10.5635" rx="1" transform="rotate(30 184.259 0.028089)" fill="white"/>
              <rect x="201.37" y="0.106827" width="2" height="10.9192" rx="1" transform="rotate(37.7751 201.37 0.106827)" fill="white"/>
              <rect x="220.106" y="1.72672" width="2" height="11.4149" rx="1" transform="rotate(45 220.106 1.72672)" fill="white"/>
              <rect x="231.446" y="13.0664" width="2" height="11.1142" rx="1" transform="rotate(45 231.446 13.0664)" fill="white"/>
              <rect x="233.838" y="31.457" width="2" height="11.2398" rx="1" transform="rotate(56 233.838 31.457)" fill="white"/>
              <rect x="235.945" y="104.108" width="2" height="11.3305" rx="1" transform="rotate(86.4341 235.945 104.108)" fill="white"/>
              <rect x="235.914" y="115.933" width="2" height="11.3397" rx="1" transform="rotate(90 235.914 115.933)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(-0.99863 0.052336 0.052336 0.99863 107.127 0.0499024)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(-0.978148 0.207912 0.207912 0.978148 94.4969 0.0173316)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(-0.945519 0.325568 0.325568 0.945519 81.2588 0)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(-0.913545 0.406737 0.406737 0.913545 67.5335 0.106827)" fill="white"/>
              <rect width="2" height="10.5635" rx="1" transform="matrix(-0.866025 0.5 0.5 0.866025 51.8655 0.028089)" fill="white"/>
              <rect width="2" height="10.9192" rx="1" transform="matrix(-0.790421 0.612564 0.612564 0.790421 34.7548 0.106827)" fill="white"/>
              <rect width="2" height="11.4149" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.0177 1.72672)" fill="white"/>
              <rect width="2" height="11.1142" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 4.67801 13.0664)" fill="white"/>
              <rect width="2" height="11.2398" rx="1" transform="matrix(-0.559193 0.829038 0.829038 0.559193 2.28613 31.457)" fill="white"/>
              <rect width="2" height="11.455" rx="1" transform="matrix(-0.529919 0.848048 0.848048 0.529919 1.69135 48.7054)" fill="white"/>
              <rect width="2" height="11.6788" rx="1" transform="matrix(-0.406737 0.913545 0.913545 0.406737 1.02048 63.1453)" fill="white"/>
              <rect width="2" height="11.5672" rx="1" transform="matrix(-0.268664 0.963234 0.963234 0.268664 0.564941 77.8645)" fill="white"/>
              <rect width="2" height="11.2673" rx="1" transform="matrix(-0.130594 0.991436 0.991436 0.130594 0.2612 91.4609)" fill="white"/>
              <rect width="2" height="11.3305" rx="1" transform="matrix(-0.0621967 0.998064 0.998064 0.0621967 0.178864 104.108)" fill="white"/>
              <rect width="2" height="11.3397" rx="1" transform="matrix(0 1 1 0 0.210541 115.933)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(1 0 0 -1 116.847 234.893)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(0.99863 -0.052336 -0.052336 -0.99863 128.997 234.95)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(0.978148 -0.207912 -0.207912 -0.978148 141.627 234.983)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(0.945519 -0.325568 -0.325568 -0.945519 154.865 235)" fill="white"/>
              <rect width="2" height="9.71972" rx="1" transform="matrix(0.913545 -0.406737 -0.406737 -0.913545 168.591 234.893)" fill="white"/>
              <rect width="2" height="10.5635" rx="1" transform="matrix(0.866025 -0.5 -0.5 -0.866025 184.259 234.972)" fill="white"/>
              <rect width="2" height="10.9192" rx="1" transform="matrix(0.790421 -0.612564 -0.612564 -0.790421 201.37 234.893)" fill="white"/>
              <rect width="2" height="11.4149" rx="1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 220.106 233.273)" fill="white"/>
              <rect width="2" height="11.1142" rx="1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 231.446 221.934)" fill="white"/>
              <rect width="2" height="11.2398" rx="1" transform="matrix(0.559193 -0.829038 -0.829038 -0.559193 233.838 203.543)" fill="white"/>
              <rect width="2" height="11.455" rx="1" transform="matrix(0.529919 -0.848048 -0.848048 -0.529919 234.433 186.295)" fill="white"/>
              <rect width="2" height="11.6788" rx="1" transform="matrix(0.406737 -0.913545 -0.913545 -0.406737 235.104 171.855)" fill="white"/>
              <rect width="2" height="11.5672" rx="1" transform="matrix(0.268664 -0.963234 -0.963234 -0.268664 235.559 157.136)" fill="white"/>
              <rect width="2" height="11.2673" rx="1" transform="matrix(0.130594 -0.991436 -0.991436 -0.130594 235.863 143.539)" fill="white"/>
              <rect width="2" height="11.3305" rx="1" transform="matrix(0.0621967 -0.998064 -0.998064 -0.0621967 235.945 130.892)" fill="white"/>
              <rect x="107.127" y="234.95" width="2" height="9.71972" rx="1" transform="rotate(-177 107.127 234.95)" fill="white"/>
              <rect x="94.4969" y="234.983" width="2" height="9.71972" rx="1" transform="rotate(-168 94.4969 234.983)" fill="white"/>
              <rect x="81.2588" y="235" width="2" height="9.71972" rx="1" transform="rotate(-161 81.2588 235)" fill="white"/>
              <rect x="67.5335" y="234.893" width="2" height="9.71972" rx="1" transform="rotate(-156 67.5335 234.893)" fill="white"/>
              <rect x="51.8655" y="234.972" width="2" height="10.5635" rx="1" transform="rotate(-150 51.8655 234.972)" fill="white"/>
              <rect x="34.7548" y="234.893" width="2" height="10.9192" rx="1" transform="rotate(-142.225 34.7548 234.893)" fill="white"/>
              <rect x="16.0177" y="233.273" width="2" height="11.4149" rx="1" transform="rotate(-135 16.0177 233.273)" fill="white"/>
              <rect x="4.67801" y="221.934" width="2" height="11.1142" rx="1" transform="rotate(-135 4.67801 221.934)" fill="white"/>
              <rect x="2.28613" y="203.543" width="2" height="11.2398" rx="1" transform="rotate(-124 2.28613 203.543)" fill="white"/>
              <rect x="1.69135" y="186.295" width="2" height="11.455" rx="1" transform="rotate(-122 1.69135 186.295)" fill="white"/>
              <rect x="1.02048" y="171.855" width="2" height="11.6788" rx="1" transform="rotate(-114 1.02048 171.855)" fill="white"/>
              <rect x="0.564941" y="157.136" width="2" height="11.5672" rx="1" transform="rotate(-105.585 0.564941 157.136)" fill="white"/>
              <rect x="0.2612" y="143.539" width="2" height="11.2673" rx="1" transform="rotate(-97.5039 0.2612 143.539)" fill="white"/>
              <rect x="0.178864" y="130.892" width="2" height="11.3305" rx="1" transform="rotate(-93.5659 0.178864 130.892)" fill="white"/>
              <rect x="234.433" y="48.7054" width="2" height="11.455" rx="1" transform="rotate(58 234.433 48.7054)" fill="white"/>
              <rect x="235.104" y="63.1453" width="2" height="11.6788" rx="1" transform="rotate(66 235.104 63.1453)" fill="white"/>
              <rect x="235.559" y="77.8645" width="2" height="11.5672" rx="1" transform="rotate(74.4152 235.559 77.8645)" fill="white"/>
              <rect x="235.863" y="91.4609" width="2" height="11.2673" rx="1" transform="rotate(82.4961 235.863 91.4609)" fill="white"/>
          </clipPath>
        </defs>
        </svg>
      </motion.div>
    </div>
  )
}

export default Clock