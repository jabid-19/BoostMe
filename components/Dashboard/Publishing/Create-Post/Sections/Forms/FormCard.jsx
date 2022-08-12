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
      {/* <div className="flex justify-between my-10">
        <button
          className="
                inline-flex
                items-center
                px-6
                py-2
                text-sm text-gray-800
                rounded-lg
                shadow
                outline-none
                gap-x-1
                hover:bg-gray-100
            "
          onClick={currentStep <= 4 && currentStep > 1 ? prevFormStep : null}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        <button
          className="
              px-6
              py-2
              text-sm text-white
              bg-indigo-500
              rounded-lg
              outline-none
              hover:bg-indigo-600
              ring-indigo-300
          "
          type="submit"
          onClick={currentStep < 4 && currentStep >= 1 ? nextFormStep : null}>
          Next
        </button>
      </div> */}
    </div>
  )
}
