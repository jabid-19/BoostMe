import { useForm } from 'react-hook-form'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'
export default function ThirdStep({ formStep, prevFormStep, nextFormStep, formData, setFormData }) {
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
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className={`${formStep === 3 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">2nd Step</h2>
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
            htmlFor="contractNumber"
            className="inline-flex mb-2 text-xl font-bold text-neutral">
            Contract Number
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
          {errors.contractNumber && <p className="text-error">{errors.contractNumber.message}</p>}
        </div>
        <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
      </form>
    </div>
  )
}
