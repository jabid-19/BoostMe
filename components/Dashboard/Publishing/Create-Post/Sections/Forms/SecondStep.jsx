import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFormData } from '../../../../../../context'
import NextPrev from './NextPrev'

export default function SecondStep({ formStep, prevFormStep, nextFormStep }) {
  const [createObjectURL, setCreateObjectURL] = useState(null)

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

  useEffect(() => {
    if (data.logo) {
      setCreateObjectURL(window.URL.createObjectURL(data.logo))
    }
  }, [data.logo])
  return (
    <div className={`${formStep === 2 ? 'block' : 'hidden'}`}>
      <h2 className="text-center text-3xl font-bold text-neutral">1st Step</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-2">
        <div>
          <label htmlFor="password" className="inline-flex mb-2 text-xl font-bold text-neutral">
            Email
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
            type="password"
            id="password"
            {...register('password', {
              required: true,
            })}
          />
          {errors.password && <p className="text-error">password is required</p>}
        </div>
        <NextPrev formStep={formStep} prevFormStep={prevFormStep} />
      </form>
      {/* <Image src={createObjectURL || ''} width={200} height={200} alt="logo" /> */}
    </div>
  )
}
