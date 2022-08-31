import React, { useCallback, useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import 'react-big-calendar/lib/sass/styles'
const localizer = momentLocalizer(moment)
// console.log('localizer', localizer)
// import PropTypes from 'prop-types'
// import { Navigate } from 'react-big-calendar'
// import TimeGrid from 'react-big-calendar/lib/TimeGrid'

// some dummy events to check out if the schedules events are shown in the calendar
// const events = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2022, 7, 17, 9, 0, 0),
//     end: new Date(2022, 7, 17, 11, 0, 0),
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     start: new Date(2022, 7, 18, 14, 30, 0),
//     end: new Date(2022, 7, 18, 16, 30, 0),
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     // allDay: true,
//     start: new Date(2022, 7, 16, 8, 30, 0),
//     end: new Date(2022, 7, 19, 11, 30, 0),
//   },
//   {
//     id: 3,
//     title: 'Birthday Party',
//     start: new Date(2022, 7, 19, 7, 0, 0),
//     end: new Date(2022, 7, 19, 10, 30, 0),
//   },
// ]

// this function is for custom week view
// function MyWeek({
//   date,
//   localizer,
//   max = localizer.endOf(new Date(), 'day'),
//   min = localizer.startOf(new Date(), 'day'),
//   scrollToTime = localizer.startOf(new Date(), 'day'),
//   ...props
// }) {
//   const currRange = useMemo(() => MyWeek.range(date, { localizer }), [date, localizer])

//   return (
//     <TimeGrid
//       date={date}
//       eventOffset={15}
//       localizer={localizer}
//       max={max}
//       min={min}
//       range={currRange}
//       scrollToTime={scrollToTime}
//       {...props}
//     />
//   )
// }

// MyWeek.propTypes = {
//   date: PropTypes.instanceOf(Date).isRequired,
//   localizer: PropTypes.object,
//   max: PropTypes.instanceOf(Date),
//   min: PropTypes.instanceOf(Date),
//   scrollToTime: PropTypes.instanceOf(Date),
// }

// MyWeek.range = (date, { localizer }) => {
//   const start = date
//   const end = localizer.add(start, 7, 'day')

//   let current = start
//   const range = []

//   while (localizer.lte(current, end, 'day')) {
//     range.push(current)
//     current = localizer.add(current, 1, 'day')
//   }

//   return range
// }

// MyWeek.navigate = (date, action, { localizer }) => {
//   switch (action) {
//     case Navigate.PREVIOUS:
//       return localizer.add(date, -8, 'day')

//     case Navigate.NEXT:
//       return localizer.add(date, 8, 'day')

//     default:
//       return date
//   }
// }

// MyWeek.title = (date) => {
//   return <div className="text-3xl">Week: {date.toLocaleDateString()}</div>
// }

const Calendar = () => {
  const [view, setView] = useState(Views.MONTH)
  const onView = useCallback((newView) => setView(newView), [setView])

  const [isOpen, setIsOpen] = useState(false)

  const CURRENT_DATE = moment().toDate()
  // console.log('current date', CURRENT_DATE)

  const onSelectSlot = (event) => {
    // console.log('Event', event)
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

  // example implementation of a wrapper
  // const ColoredDateCellWrapper = ({ children, value }) =>
  //   React.cloneElement(Children.only(children), {
  //     style: {
  //       ...children.style,
  //       backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
  //     },
  //   })

  const dayPropGetter = (date) => {
    let backgroundColor
    let opacity
    let color
    let cursor

    if (moment(date).isBefore(CURRENT_DATE, 'day')) {
      backgroundColor = '#e8e8e8'
      cursor = 'default'
    }
    if (moment(date).isSameOrAfter(CURRENT_DATE, 'day')) {
      cursor = 'pointer'
    }
    if (moment(date).isSame(CURRENT_DATE, 'day')) {
      backgroundColor = '#E1306C'
      opacity = 0.5
      color = 'white'
    }

    var style = {
      backgroundColor,
      opacity,
      color,
      cursor,
    }
    return {
      style: style,
    }
  }

  // it's for taking the slots property
  // const slotPropGetter = (date) => {
  //   let backgroundColor

  //   if (moment(date).isBefore(CURRENT_DATE, 'day')) {
  //     backgroundColor = 'red'
  //   }

  //   var style = {
  //     backgroundColor,
  //   }
  //   return {
  //     style: style,
  //   }
  // }

  // const { views } = useMemo(
  //   () => ({
  //     views: {
  //       month: true,
  //       week: MyWeek,
  //       agenda: true,
  //     },
  //   }),
  //   []
  // )

  return (
    <div>
      <div className="-z-50">
        <BigCalendar
          // steps={30}
          selectable={true}
          localizer={localizer}
          // events={events}
          defaultView={Views.MONTH}
          // views={views}
          views={[Views.WEEK, Views.MONTH, Views.AGENDA]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '78vh' }}
          onSelectSlot={onSelectSlot}
          resizable
          // slotPropGetter={slotPropGetter}
          dayPropGetter={dayPropGetter}
          // components={{
          //   dateCellWrapper: function dateCellWrapperFunction() {
          //     return <div className="bg-primary hover:bg-secondary">click</div>
          //   },
          // }}
          // components={{
          //   // you have to pass your custom wrapper here
          //   // so that it actually gets used
          //   dateCellWrapper: ColoredDateCellWrapper,
          // }}
          // min={new Date()}
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
