export default function FormCard({ children, currentStep, prevFormStep, nextFormStep }) {
  return (
    <ul className="steps gap-5">
      <li className="step step-primary">Step 1</li>
      <li className="step step-primary">Step 2</li>
      <li className="step">Step 3</li>
      <li className="step">Step 4</li>
    </ul>
  )
}
