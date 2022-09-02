import moment from 'moment'
import dynamic from 'next/dynamic'
import React, { useCallback, useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { FaTimes } from 'react-icons/fa'
import styles from './Calendar.module.scss'

const localizer = momentLocalizer(moment)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
const Calendar = () => {
  const [view, setView] = useState(Views.MONTH)
  const [calendar, setCalendar] = useState({
    isOpen: false,
    scheduleTime: null,
    value: '',
  })
  const onView = useCallback((newView) => setView(newView), [setView])
  const CURRENT_DATE = moment().toDate()

  const onSelectSlot = (event) => {
    if (view === 'month') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'day')) {
        setCalendar({ ...calendar, isOpen: false, scheduleTime: event.start })
      } else setCalendar({ ...calendar, isOpen: true, scheduleTime: event.start })
    }
    if (view === 'week') {
      if (moment(event.start).isBefore(CURRENT_DATE, 'minute')) {
        setCalendar({ ...calendar, isOpen: false, scheduleTime: event.start })
      } else setCalendar({ ...calendar, isOpen: true, scheduleTime: event.start })
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
      {calendar.isOpen && (
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
                    onClick={() => setCalendar({ ...calendar, isOpen: false })}>
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <FaTimes />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ReactQuill modules={modules} theme="snow" />
                  <div className="flex justify-between items-center gap-16 mt-10">
                    <p className="text-neutral">
                      Schedule Date:
                      <span className="font-bold">
                        {moment(calendar.scheduleTime).format('MMMM Do, h:mm A')}
                      </span>
                    </p>
                    <input
                      className="border-2 rounded-md px-2 py-1 text-neutral"
                      type="datetime-local"
                      defaultValue={moment(calendar.scheduleTime).format('YYYY-MM-DDThh:mm')}
                      onChange={(e) => setCalendar({ ...calendar, scheduleTime: e.target.value })}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-4 py-3 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white"
                    type="button"
                    onClick={() => setCalendar({ ...calendar, isOpen: false })}>
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="button"
                    onClick={() => setCalendar({ ...calendar, isOpen: false })}>
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
