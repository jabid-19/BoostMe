import React, { useCallback, useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styles from './Calendar.module.scss'

const localizer = momentLocalizer(moment)

const Calendar = () => {
  const [view, setView] = useState(Views.MONTH)
  const onView = useCallback((newView) => setView(newView), [setView])

  const [isOpen, setIsOpen] = useState(false)

  const CURRENT_DATE = moment().toDate()

  const onSelectSlot = (event) => {
    if (view === 'month') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'day')) {
        setIsOpen(false)
      } else setIsOpen(true)
    }
    if (view === 'week') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'minute')) {
        setIsOpen(false)
      } else setIsOpen(true)
    }
  }

  const isOpenState = () => {
    setIsOpen(false)
  }

  const dayPropGetter = (date) => {
    let backgroundColor
    let opacity
    let color
    let cursor
    let customStyle

    if (moment(date).isBefore(CURRENT_DATE, 'day')) {
      backgroundColor = '#e8e8e8'
      cursor = 'default'
    }
    if (moment(date).isSameOrAfter(CURRENT_DATE, 'day')) {
      cursor = 'pointer'
      if (view === 'month') {
        customStyle = styles.dayStyle
      }
    }
    if (moment(date).isSame(CURRENT_DATE, 'day')) {
      backgroundColor = '#E1306C'
      opacity = 0.75
      color = 'white'
    }

    var style = {
      backgroundColor,
      opacity,
      color,
      cursor,
    }
    return {
      className: customStyle,
      style: style,
    }
  }

  return (
    <div>
      <div className="-z-50">
        <BigCalendar
          step={30}
          timeslots={2}
          selectable={true}
          localizer={localizer}
          defaultView={Views.MONTH}
          views={[Views.WEEK, Views.MONTH, Views.AGENDA]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '78vh' }}
          onSelectSlot={onSelectSlot}
          resizable
          dayPropGetter={dayPropGetter}
          onView={onView}
        />
      </div>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 bg-slate-200/50 z-50">
          <div className="flex justify-center items-center mt-60">
            <div className=" flex justify-center items-center bg-white border-8 border-primary shadow-lg shadow-black rounded-lg max-w-[220px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] min-h-[240px] p-2 md:p-8 overflow-auto">
              <div>
                <div className="flex flex-row-reverse justify-between">
                  <label onClick={isOpenState} className="btn btn-sm btn-circle btn-primary">
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Schedule Event!</h3>
                </div>
                <div>
                  <p className="py-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum reprehenderit
                    maiores sapiente, excepturi corporis eum cum ipsam consequatur porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Calendar
