import { useForm } from 'react-hook-form'
import { useFormData } from '../../../../../../context'

export default function FirstStep({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  const onSubmit = (values) => {
    const formData = new FormData()
    formData.append('file', values.logo[0])
    values.logo = formData
    setFormValues(values)
    nextFormStep()
  }

  return (
    <div className={`${formStep === 1 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">1st Step</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
        <div>
          <label htmlFor="pageName" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Page Name
          </label>
          <input
            className="
                w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                focus:ring
                ring-primary
            "
            id="pageName"
            {...register('pageName', {
              required: true,
            })}
          />
          {errors.pageName && <p className="text-error">Page Name is required</p>}
        </div>
        <div>
          <label htmlFor="logo" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Logo
          </label>
          <input
            className="
                w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                focus:ring
                ring-primary
            "
            id="logo"
            type="file"
            {...register('logo', {
              required: true,
            })}
          />
          {errors.logo && <p className="text-error">Logo is required</p>}
        </div>
        <div>
          <label htmlFor="category" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Category
          </label>
          <input
            className="
                w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-none
                bg-gray-50
                focus:ring
                ring-primary
            "
            id="category"
            {...register('category', {
              required: true,
            })}
          />
          {errors.logo && <p className="text-error">Logo is required</p>}
        </div>
        <button
          className="
            mt-4
            px-6
            py-2
            text-sm text-white
            bg-indigo-500
            rounded-lg
            outline-none
            hover:bg-indigo-600
            ring-indigo-300
          "
          type="submit">
          Next
        </button>
      </form>
    </div>
  )
}
