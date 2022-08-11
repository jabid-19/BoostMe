import React, { useState } from 'react'
import FormCard from './Forms/FormCard'

const Forms = () => {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
  return <FormCard currentStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
}

export default Forms
