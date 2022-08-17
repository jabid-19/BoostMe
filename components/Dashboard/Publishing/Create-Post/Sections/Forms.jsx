import React, { useState } from 'react'
import FirstStep from './Forms/FirstStep'
import FormCard from './Forms/FormCard'
import SecondStep from './Forms/SecondStep'
import ThirdStep from './Forms/ThirdStep'

const Forms = ({ formData, setFormData }) => {
  const [formStep, setFormStep] = useState(1)

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)

  return (
    <FormCard
      currentStep={formStep}
      prevFormStep={prevFormStep}
      nextFormStep={nextFormStep}
      className="w-full">
      {formStep >= 1 && (
        <FirstStep
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {formStep >= 2 && (
        <SecondStep
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {formStep >= 3 && (
        <ThirdStep
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </FormCard>
  )
}

export default Forms
