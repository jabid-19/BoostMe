import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'
export default function FirstStep({ formStep, prevFormStep, nextFormStep, formData, setFormData }) {
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
    console.log(values)
    const formData = new FormData()
    formData.append('file', values.logo[0])
    values.logo = formData
    setFormValues(values)
    nextFormStep()
  }

  const handleChange = (event) => {
    if (event?.target.name !== 'logo') {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    } else {
      console.log(true)
      setFormData({ ...formData, logo: URL.createObjectURL(event.target.files[0]) })
    }
  }

  const handleSelect = (event) => {
    if (event?.value && event?.label) setFormData({ ...formData, category: event?.value })
  }

  return (
    <div className={`${formStep === 1 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">1st Step</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
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
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.logo && <p className="text-error">{errors.logo?.message}</p>}
        </div>
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
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.pageName && <p className="text-error">{errors.pageName?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="pageCategory" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Page Category
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
            ${errors.pageCategory?.message ? 'border-error' : ''}`}
            id="pageCategory"
            {...register('pageCategory', {
              required: 'Page Category is required',
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.pageCategory && <p className="text-error">{errors.pageCategory.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Select Category
          </label>
          <Controller
            name="category"
            control={control}
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <Select
                classNamePrefix="react-select"
                className={`${errors.category?.message && 'alert-border'}`}
                isClearable
                {...field}
                placeholder="Select Your category"
                options={options}
                onChange={(value) => {
                  handleSelect(value)
                  field.onChange(value)
                }}
              />
            )}
          />
          {errors.category && <p className="text-error">{errors.category?.message}</p>}
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
              onChange: (e) => {
                handleChange(e)
              },
            })}
          />
          {errors.pageUrl && <p className="text-error">{errors.pageUrl.message}</p>}
          <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
        </div>
      </form>
    </div>
  )
}
