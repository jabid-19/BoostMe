import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'

export default function SecondStep({
  formStep,
  prevFormStep,
  nextFormStep,
  formData,
  setFormData,
}) {
  const [chosenEmoji, setChosenEmoji] = useState(null)

  const { setFormValues, data } = useFormData()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  const onSubmit = (values) => {
    setFormValues(values)
    nextFormStep()
  }

  const handleChange = (event) => {
    if (event?.target.name !== 'media') {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    } else {
      console.log(event.target.name)
      if (event.target?.files[0]) {
        setFormData({ ...formData, media: URL?.createObjectURL(event.target?.files[0]) })
      }
    }
  }
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }

  useEffect(() => {
    if (chosenEmoji) {
      setFormData({ ...formData, caption: formData.caption + chosenEmoji.emoji })
    }
  }, [chosenEmoji])

  return (
    <div className={`${formStep === 2 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">2nd Step</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
        <div className="mb-6">
          <label htmlFor="caption" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Post Details
          </label>
          <textarea
            className={`
                w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                ${errors.caption?.message && 'border-error'}
            `}
            id="caption"
            value={formData.caption}
            type="textarea"
            {...register('caption', {
              required: 'Description is required',
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
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
            {...register('media', {
              required: 'Media is required',
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.media && <p className="text-error">{errors.media?.message}</p>}
        </div>
        <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
      </form>
    </div>
  )
}
