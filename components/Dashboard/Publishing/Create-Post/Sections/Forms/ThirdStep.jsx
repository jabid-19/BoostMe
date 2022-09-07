import { useForm } from 'react-hook-form'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'

import { useState } from 'react'
import { createPost } from '../../../../../../src/backend/Post'

export default function ThirdStep({ formStep, prevFormStep, nextFormStep, formData, setFormData }) {
  const [status, setStatus] = useState({
    success: false,
    error: false,
  })
  const { setFormValues, data } = useFormData()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  const onSubmit = async (values) => {
    setFormValues(values)

    // ===edited by Tahmid: start===
    const finalData = { ...data, ...values }
    const fd = new FormData()
    fd.append('logo', finalData.logo.get('file'))
    finalData.media.getAll('media').forEach((element) => {
      fd.append('media', element)
    })
    const keys = Object.keys(finalData)
    keys.forEach((key, index) => {
      if (key != 'logo' || key != 'media') {
        fd.append(key, finalData[key])
      }
    })

    const user = JSON.parse(localStorage.getItem('user'))
    const response = await createPost(fd, user.user_id)
    if (response.status == 200 || response.status == 201) {
      setStatus({ success: true, error: false })
    } else {
      setStatus({ success: false, error: true })
    }
    // ===edited by Tahmid: end===
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className={`${formStep === 3 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">3rd Step</h2>
      {status.success && !status.error ? (
        <h1>Form Submitted</h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
          <div className="mb-6">
            <label htmlFor="budget" className="inline-flex mb-2 text-xl font-bold text-neutral">
              Budget
            </label>
            <input
              type="number"
              className={` w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                ${errors.budget?.message ? 'border-error' : ''}`}
              id="budget"
              {...register('budget', {
                required: 'Budget is required',
                onChange: (e) => {
                  handleChange(e)
                },
              })}
            />
            {errors.budget && <p className="text-error">{errors.budget.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="inline-flex mb-2 text-xl font-bold text-neutral">
              Location
            </label>
            <input
              className={` w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                ${errors.location?.message ? 'border-error' : ''}`}
              id="location"
              {...register('location', {
                required: 'Location is required',
                onChange: (e) => {
                  handleChange(e)
                },
              })}
            />
            {errors.location && <p className="text-error">{errors.location.message}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="contactNumber"
              className="inline-flex mb-2 text-xl font-bold text-neutral">
              Contact Number
            </label>
            <input
              className={` w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                ${errors.contractNumber?.message ? 'border-error' : ''}`}
              id="contractNumber"
              {...register('contractNumber', {
                required: 'Contract Number is required',
                onChange: (e) => {
                  handleChange(e)
                },
              })}
            />
            {errors.contractNumber && (
              <p className="text-error text-2xl">{errors.contractNumber.message}</p>
            )}
          </div>
          <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
        </form>
      )}
      {status.error && <h1 className="text-error text-2xl">Error! Try Again!</h1>}
    </div>
  )
}
