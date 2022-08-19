import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import 'react-big-calendar/lib/sass/styles'
const localizer = momentLocalizer(moment)
console.log('localizer', localizer)
// const myEventsList = [
//   { id: 0, start: new Date(), end: new Date(), title: 'special event' },
//   { id: 1, start: new Date(), end: new Date(), title: 'special event2' },
//   { id: 2, start: new Date(), end: new Date(), title: 'special event3' },
// ]

// const events = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2022, 7, 17, 9, 0, 0),
//     end: new Date(2022, 7, 17, 11, 0, 0),
//     // resourceId: 1,
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     start: new Date(2022, 7, 18, 14, 30, 0),
//     end: new Date(2022, 7, 18, 16, 30, 0),
//     // resourceId: 2,
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     // allDay: true,
//     start: new Date(2022, 7, 16, 8, 30, 0),
//     end: new Date(2022, 7, 19, 11, 30, 0),
//     // resourceId: 3,
//   },
//   {
//     id: 3,
//     title: 'Birthday Party',
//     start: new Date(2022, 7, 19, 7, 0, 0),
//     end: new Date(2022, 7, 19, 10, 30, 0),
//     // resourceId: 4,
//   },
// ]

// const resourceMap = [
//   { resourceId: 1, resourceTitle: 'Board room' },
//   { resourceId: 2, resourceTitle: 'Training room' },
//   { resourceId: 3, resourceTitle: 'Meeting room 1' },
//   { resourceId: 4, resourceTitle: 'Meeting room 2' },
// ]

// const styles = {
//   container: {
//     width: '80wh',
//     height: '75vh',
//     margin: '2em',
//   },
// }

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const CURRENT_DATE = moment().toDate()
  console.log('current date', CURRENT_DATE)

  const onSelectSlot = (event) => {
    // window.alert('Slot is selected')
    console.log('Event', event)
    if (moment(event.start).isBefore(CURRENT_DATE, 'day')) {
      setIsOpen(false)
    } else setIsOpen(true)
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
  // const today = new Date()
  // const day = today.getDay()
  const dayPropGetter = (date) => {
    let backgroundColor
    let opacity
    let color
    let cursor

    if (moment(date).isBefore(CURRENT_DATE, 'day')) {
      backgroundColor = '#e8e8e8'
      // opacity = 0.5
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
    // if (moment(date).isBefore(CURRENT_DATE, 'month')) {
    //   backgroundColor = '#FCAF45'
    //   opacity = 0.25
    // }
    // if (moment(date).isAfter(CURRENT_DATE, 'month')) {
    //   backgroundColor = '#FCAF45'
    //   opacity = 0.5
    // }
    var style = {
      backgroundColor,
      opacity,
      color,
      cursor,
    }
    return {
      style: style,
    }
    // ...(moment(date).day() < day && {
    //   style: {
    //     backgroundColor: 'red',
    //     color: 'white',
    //   },
    // }),
  }

  // const slotPropGetter = (date) => {
  //   const CURRENT_DATE = moment().toDate()
  //   let backgroundColor

  //   if (moment(date).isBefore(CURRENT_DATE, 'month')) {
  //     backgroundColor = '#f7f8f9'
  //   }

  //   var style = {
  //     backgroundColor,
  //   }
  //   return {
  //     style: style,
  //   }
  // }

  return (
    <div>
      <div className="-z-50">
        <BigCalendar
          // steps={30}
          selectable={true}
          localizer={localizer}
          // events={events}
          defaultView={Views.MONTH}
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
          //     return <div className="bg-primary">click</div>
          //   },
          // }}
          // components={{
          //   // you have to pass your custom wrapper here
          //   // so that it actually gets used
          //   dateCellWrapper: ColoredDateCellWrapper,
          // }}
          // min={new Date()}
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
