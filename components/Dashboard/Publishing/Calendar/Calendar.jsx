import moment from 'moment'
import React, { useCallback, useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { FaTimes } from 'react-icons/fa'
import styles from './Calendar.module.scss'

const localizer = momentLocalizer(moment)

const Calendar = () => {
  const [view, setView] = useState({
    view: Views.MONTH,
    selectedDate: null,
  })
  const onView = useCallback((newView) => setView(newView), [setView])

  const [isOpen, setIsOpen] = useState(false)

  const CURRENT_DATE = moment().toDate()

  const onSelectSlot = (event) => {
    if (view.view === 'month') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'day')) {
        setIsOpen(false)
      } else setIsOpen(true)
    }
    if (view.view === 'week') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'minute')) {
        setIsOpen(false)
      } else setIsOpen(true)
    }
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
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Create Post</h3>
                  <button
                    className="p-1 ml-auto bg-transparent opacity-50 border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}>
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <FaTimes />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main thing people are
                    controlled by! Thoughts- their perception of themselves! They're slowed down by
                    their perception of themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                  <p>Schedule Date</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-4 py-3 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white"
                    type="button"
                    onClick={() => setIsOpen(false)}>
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="button"
                    onClick={() => setIsOpen(false)}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  )
}

export default Calendar
