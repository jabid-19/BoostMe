import React, { useState } from 'react'
import FirstStep from './Forms/FirstStep'
import FormCard from './Forms/FormCard'
import SecondStep from './Forms/SecondStep'

const Forms = () => {
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
        <FirstStep formStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
      )}
      {formStep >= 2 && (
        <SecondStep formStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
      )}
    </FormCard>
  )
}

export default Forms
