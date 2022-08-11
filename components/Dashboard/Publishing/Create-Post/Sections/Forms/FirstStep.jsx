import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { useFormData } from '../../../../../../context'
export default function FirstStep({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData()

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  //   select options
  const options = [
    { value: 'stories', label: 'Stories' },
    { value: 'post', label: 'Post' },
  ]

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
        <div className="mb-6">
          <label htmlFor="pageName" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Page Name
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
                ${errors.pageName?.message && 'border-error'}
            `}
            id="pageName"
            {...register('pageName', {
              required: 'Page Name is required',
            })}
          />
          {errors.pageName && <p className="text-error">{errors.pageName?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="logo" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Logo
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
                ${errors.logo?.message && 'border-error'}
            `}
            id="logo"
            type="file"
            {...register('logo', {
              required: 'Logo is required',
            })}
          />
          {errors.logo && <p className="text-error">{errors.logo?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Category
          </label>
          <Controller
            name="category"
            control={control}
            rules={{ required: 'category is required' }}
            render={({ field }) => (
              <Select
                classNamePrefix="react-select"
                className="alert-border"
                isClearable
                {...field}
                placeholder="Select Your category"
                options={options}
              />
            )}
          />
          {errors.category && <p className="text-error">Category is required</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="pageUrl" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Page URL
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
                ${errors.pageUrl?.message ? 'border-error' : ''}`}
            id="pageUrl"
            {...register('pageUrl', {
              required: 'Page URL is required',
            })}
          />
          {errors.pageUrl && <p className="text-error">{errors.pageUrl.message}</p>}
        </div>
        <button
          className="
            w-full
            px-3
            py-3
            text-gray-800
            border
            rounded-lg
            outline-none
            bg-primary
            font-bold
          "
          type="submit">
          Next
        </button>
      </form>
    </div>
  )
}
