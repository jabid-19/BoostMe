import moment from 'moment'
import dynamic from 'next/dynamic'
import Image from 'next/image'
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
    ['emoji'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
const Calendar = () => {
  const [view, setView] = useState(Views.MONTH)
  const [calendar, setCalendar] = useState({
    status: {
      loading: false,
      error: null,
      success: null,
    },
    isOpen: false,
    scheduleTime: null,
    value: '',
    images: [],
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
    if (view === 'month') {
      if (moment(date).isSameOrAfter(CURRENT_DATE, 'day')) {
        cursor = 'pointer'
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

  const slotGroupPropGetter = useCallback(
    () => ({
      style: {
        minHeight: 100,
      },
    }),
    []
  )
  const handleChange = (e) => {
    setCalendar({ ...calendar, value: e })
  }

  const handleImageChange = (e) => {
    if (e.target?.files) {
      const files = Array.from(e.target.files)
      setCalendar({ ...calendar, images: files })
    }
  }

  const handleCreate = () => {
    if (calendar.value !== '<p><br></p>' && calendar.value.length) {
      setCalendar({ ...calendar, status: { loading: true } })
    }
  }

  const handleClearStates = () => {
    setCalendar({
      isOpen: false,
      images: [],
      value: '',
      scheduleTime: null,
      status: { loading: false, error: null, success: null },
    })
  }

  return (
    <div>
      <div className="relative">
        <button
          className="px-8 py-2 rounded-md bg-primary text-white font-bold hover:bg-red-600 mb-4"
          onClick={() => setCalendar({ ...calendar, isOpen: true })}>
          Create A Post
        </button>
      </div>
      <div className="-z-50">
        <BigCalendar
          step={15}
          timeslots={2}
          selectable={true}
          localizer={localizer}
          scrollToTime={new Date()}
          defaultView={Views.MONTH}
          views={[Views.WEEK, Views.MONTH, Views.AGENDA]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '78vh' }}
          onSelectSlot={onSelectSlot}
          resizable
          dayPropGetter={dayPropGetter}
          slotGroupPropGetter={slotGroupPropGetter}
          onView={onView}
          messages={{
            previous: '<',
            next: '>',
            agenda: 'Events',
          }}
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
                    onClick={handleClearStates}>
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <FaTimes />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* text editor */}
                  <ReactQuill
                    modules={modules}
                    placeholder="Write post details"
                    theme="snow"
                    onChange={handleChange}
                  />
                  {(calendar.value === '<p><br></p>' || !calendar.value.length) && (
                    <p className="text-error text-xs p-1">*Post details is required!</p>
                  )}
                  {/* image selector */}
                  <div className="mt-8">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      multiple
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        file:hover:cursor-pointer
                      "
                      onChange={handleImageChange}
                    />
                    {calendar?.images.length >= 1 && (
                      <div className="flex items-center gap-4 mt-5">
                        {calendar.images.map((image, index) => (
                          <div key={index}>
                            <Image
                              src={URL.createObjectURL(image)}
                              width={150}
                              height={150}
                              alt="post"
                              className="rounded-md object-cover"
                            />
                            <p className="relative text-xs w-[150px] break-words">
                              <span>{image.name}</span>
                              <span className="absolute bottom-0 right-0 font-bold">
                                ({(image?.size / (1000 * 1000)).toFixed(2)}MB)
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* time selector */}
                  <div className="flex justify-between items-center gap-16 mt-10">
                    <p className="text-neutral">
                      Schedule Date:{' '}
                      <span className="font-bold">
                        {moment(calendar.scheduleTime || new Date()).format('MMMM Do, h:mm A')}
                      </span>
                    </p>
                    <input
                      className="border-2 rounded-md px-2 py-1 text-neutral"
                      type="datetime-local"
                      min={moment(new Date()).format('YYYY-MM-DDThh:mm')}
                      aria-disabled="true"
                      defaultValue={moment(calendar.scheduleTime || new Date()).format(
                        'YYYY-MM-DDThh:mm'
                      )}
                      onChange={(e) => setCalendar({ ...calendar, scheduleTime: e.target.value })}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-4 py-3 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    type="button"
                    onClick={handleClearStates}>
                    Close
                  </button>
                  <button
                    className={`text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                      (calendar.value === '<p><br></p>' || !calendar.value.length) &&
                      'bg-gray-400 hover:bg-gray-400'
                    }`}
                    type="button"
                    onClick={handleCreate}>
                    {calendar.status.loading ? 'Loading...' : 'Create Post'}
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
