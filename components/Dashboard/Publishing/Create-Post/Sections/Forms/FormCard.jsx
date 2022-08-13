export default function FormCard({ children, currentStep, prevFormStep, nextFormStep }) {
  return (
    <div className="flex flex-col mx-5 w-full">
      <ul className="steps">
        <li className={`${currentStep === 1 || currentStep >= 1 ? 'step step-primary' : 'step'}`}>
          Step 1
        </li>
        <li className={`${currentStep === 2 || currentStep >= 2 ? 'step step-primary' : 'step'}`}>
          Step 2
        </li>
        <li className={`${currentStep === 3 || currentStep >= 3 ? 'step step-primary' : 'step'}`}>
          Step 3
        </li>
        <li className={`${currentStep === 4 ? 'step step-primary' : 'step'}`}>Step 4</li>
      </ul>
      <div>{children}</div>
    </div>
  )
}
