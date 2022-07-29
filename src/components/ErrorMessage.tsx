
interface ErrorMessageProps {
  error: string
}

export const ErrorMessage = ({error}:ErrorMessageProps) => {
  return (
    <div><p className="text-center text-red-600">{error}</p></div>
  )
}

