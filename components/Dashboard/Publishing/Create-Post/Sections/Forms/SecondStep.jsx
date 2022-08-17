import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputEmoji from 'react-input-emoji'

import Select from 'react-select'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'
export default function SecondStep({
  formStep,
  prevFormStep,
  nextFormStep,
  formData,
  setFormData,
}) {
  const [emoteText, setEmoteText] = useState('')
  const { setFormValues, data } = useFormData()
  const image = []
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]

  const onSubmit = (values) => {
    setFormValues(values)
    nextFormStep()
  }

  const handleSelect = (event) => {
    if (event?.value && event?.label) setFormData({ ...formData, sendMessage: event?.value })
  }

  const handleChange = (event) => {
    if (event?.target.name !== 'media') {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    } else {
      if (event.target.files.length > 1) {
        Object.values(event.target.files).forEach((file) => {
          image.push(URL.createObjectURL(file))
          setFormData({ ...formData, [event.target.name]: image })
        })
      } else {
        if (event.target.files[0]) {
          image.push(URL.createObjectURL(event.target.files[0]))
          setFormData({ ...formData, [event.target.name]: image })
        }
      }
    }
  }

  useEffect(() => {
    setFormData({ ...formData, caption: emoteText })
  }, [emoteText, setFormData])
  console.log(formData)
  return (
    <div className={`${formStep === 2 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">2nd Step</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
        <div className="mb-6">
          <label htmlFor="caption" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Post Details
          </label>
          <InputEmoji onChange={setEmoteText} placeholder="Enter post details" borderRadius={7} />
          {errors.caption && <p className="text-error">{errors.caption?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="media" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Post Image/Video
          </label>
          <input
            className={`
              w-full
              px-3
              py-2
              text-gray-800
              border
              rounded
              outline-none
              bg-gray-50
            ${errors.media?.message && 'border-error'}
            `}
            id="media"
            type="file"
            multiple
            // accept="image/png, image/jpeg, image/webp, video/*"
            {...register('media', {
              required: 'Media is required',
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.media && <p className="text-error">{errors.media?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="sendMessage" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Message Option?
          </label>
          <Controller
            name="sendMessage"
            control={control}
            rules={{ required: 'Message Option is required' }}
            render={({ field }) => (
              <Select
                instanceId="sendMessage"
                classNamePrefix="react-select"
                className={`${errors.sendMessage?.message && 'alert-border'}`}
                isClearable
                {...field}
                placeholder="Select Your option"
                options={options}
                onChange={(value) => {
                  handleSelect(value)
                  field.onChange(value)
                }}
              />
            )}
          />
          {errors.sendMessage && <p className="text-error">{errors.sendMessage?.message}</p>}
        </div>
        <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
      </form>
    </div>
  )
}
